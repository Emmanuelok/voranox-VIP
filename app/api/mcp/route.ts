// Voranox MCP server — Model Context Protocol over HTTP.
//
// A minimal, hand-rolled JSON-RPC 2.0 endpoint compatible with the MCP
// Streamable-HTTP transport. Exposes the firm's directory and Insights
// archive as MCP tools and resources so AI agents can integrate Voranox
// content directly.
//
// Spec reference: https://modelcontextprotocol.io
//
// Usage from a compliant MCP client:
//   POST https://voranox.com/api/mcp
//   { "jsonrpc":"2.0","id":1,"method":"tools/list" }

import { sectors, type Sector } from "@/lib/sectors";
import { essays, type Essay } from "@/lib/insights";
import { releases, type Release } from "@/lib/releases";
import { checkLimit, getClientIpFromRequest } from "@/lib/rateLimit";

const SITE = "https://voranox.com";
const PROTOCOL = "2025-06-18";
const SERVER_INFO = {
  name: "voranox-mcp",
  title: "Voranox Inc.",
  version: "0.1.0",
};

type RpcRequest = {
  jsonrpc?: "2.0";
  id?: number | string | null;
  method?: string;
  params?: Record<string, unknown>;
};

type RpcOk = {
  jsonrpc: "2.0";
  id: number | string | null;
  result: unknown;
};

type RpcErr = {
  jsonrpc: "2.0";
  id: number | string | null;
  error: { code: number; message: string; data?: unknown };
};

function ok(id: RpcRequest["id"], result: unknown): RpcOk {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function err(
  id: RpcRequest["id"],
  code: number,
  message: string,
  data?: unknown,
): RpcErr {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message, data } };
}

// ----- TOOLS ---------------------------------------------------------------

const TOOL_DEFS = [
  {
    name: "search_voranox",
    description:
      "Full-text search across Voranox platforms, Insights essays, and press releases. Returns ranked matches with their canonical URLs.",
    inputSchema: {
      type: "object",
      required: ["query"],
      properties: {
        query: { type: "string", description: "Search query" },
        limit: {
          type: "number",
          description: "Max results to return (default 10, max 50)",
        },
      },
    },
  },
  {
    name: "list_platforms",
    description:
      "List all 46 Voranox industry-native platforms. Optionally filter by category.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          enum: [
            "Public Sector",
            "Financial",
            "Industry",
            "Life Sciences",
            "Society",
            "Infrastructure",
            "Knowledge",
            "Commerce",
          ],
        },
      },
    },
  },
  {
    name: "get_platform",
    description:
      "Retrieve a single Voranox platform by slug, including manifesto, pillars, use cases, and doctrine.",
    inputSchema: {
      type: "object",
      required: ["slug"],
      properties: {
        slug: { type: "string", description: "Platform slug, e.g. 'financial-services'" },
      },
    },
  },
  {
    name: "list_essays",
    description: "List all Voranox Insights essays with metadata.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_essay",
    description: "Retrieve a single Voranox Insights essay by slug, full body text included.",
    inputSchema: {
      type: "object",
      required: ["slug"],
      properties: {
        slug: { type: "string", description: "Essay slug, e.g. 'the-voranox-doctrine'" },
      },
    },
  },
  {
    name: "list_releases",
    description: "List Voranox press releases.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_release",
    description: "Retrieve a single press release by slug, full body text included.",
    inputSchema: {
      type: "object",
      required: ["slug"],
      properties: { slug: { type: "string" } },
    },
  },
];

function platformResource(s: Sector) {
  return {
    slug: s.slug,
    industry: s.name,
    platform: s.platform,
    category: s.category,
    tagline: s.tagline,
    description: s.description,
    capabilities: s.capabilities,
    url: `${SITE}/platforms/${s.slug}`,
    deep: s.deep ?? null,
  };
}

function essayResource(e: Essay) {
  return {
    slug: e.slug,
    title: e.title,
    subtitle: e.subtitle,
    category: e.category,
    date: e.date,
    reading: e.reading,
    byline: e.byline,
    url: `${SITE}/insights/${e.slug}`,
    body: e.body,
  };
}

function releaseResource(r: Release) {
  return {
    slug: r.slug,
    date: r.date,
    dateline: r.dateline,
    headline: r.headline,
    summary: r.summary,
    url: `${SITE}/press/${r.slug}`,
    body: r.body,
    about: r.about,
    contact: r.contact,
  };
}

function asText(value: unknown) {
  return {
    content: [
      { type: "text", text: JSON.stringify(value, null, 2) },
    ],
    isError: false,
  };
}

function searchAll(query: string, limit: number) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const out: Array<{
    kind: "platform" | "essay" | "release";
    title: string;
    subtitle: string;
    url: string;
    score: number;
  }> = [];
  for (const s of sectors) {
    const hay = [
      s.platform,
      s.name,
      s.category,
      s.tagline,
      s.description,
      ...s.capabilities,
      s.deep?.manifesto ?? "",
    ]
      .join(" ")
      .toLowerCase();
    const idx = hay.indexOf(q);
    if (idx !== -1) {
      out.push({
        kind: "platform",
        title: `${s.platform} — ${s.name}`,
        subtitle: s.tagline,
        url: `${SITE}/platforms/${s.slug}`,
        score: 1 / (idx + 1),
      });
    }
  }
  for (const e of essays) {
    const hay = [e.title, e.subtitle, e.category, e.byline, ...e.body]
      .join(" ")
      .toLowerCase();
    const idx = hay.indexOf(q);
    if (idx !== -1) {
      out.push({
        kind: "essay",
        title: e.title,
        subtitle: e.subtitle,
        url: `${SITE}/insights/${e.slug}`,
        score: 1 / (idx + 1),
      });
    }
  }
  for (const r of releases) {
    const hay = [r.headline, r.summary, ...r.body, r.about].join(" ").toLowerCase();
    const idx = hay.indexOf(q);
    if (idx !== -1) {
      out.push({
        kind: "release",
        title: r.headline,
        subtitle: r.dateline,
        url: `${SITE}/press/${r.slug}`,
        score: 1 / (idx + 1),
      });
    }
  }
  return out.sort((a, b) => b.score - a.score).slice(0, limit);
}

function callTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "search_voranox": {
      const query = String(args.query ?? "");
      const limit = Math.min(Number(args.limit ?? 10) || 10, 50);
      return asText({ query, results: searchAll(query, limit) });
    }
    case "list_platforms": {
      const cat = args.category ? String(args.category) : null;
      const list = cat
        ? sectors.filter((s) => s.category === cat)
        : sectors;
      return asText({
        count: list.length,
        platforms: list.map((s) => ({
          slug: s.slug,
          platform: s.platform,
          industry: s.name,
          category: s.category,
          tagline: s.tagline,
          url: `${SITE}/platforms/${s.slug}`,
        })),
      });
    }
    case "get_platform": {
      const slug = String(args.slug ?? "");
      const s = sectors.find((x) => x.slug === slug);
      if (!s) return { ...asText({ error: `Platform '${slug}' not found.` }), isError: true };
      return asText(platformResource(s));
    }
    case "list_essays":
      return asText({
        count: essays.length,
        essays: essays.map((e) => ({
          slug: e.slug,
          title: e.title,
          subtitle: e.subtitle,
          category: e.category,
          reading: e.reading,
          url: `${SITE}/insights/${e.slug}`,
        })),
      });
    case "get_essay": {
      const slug = String(args.slug ?? "");
      const e = essays.find((x) => x.slug === slug);
      if (!e) return { ...asText({ error: `Essay '${slug}' not found.` }), isError: true };
      return asText(essayResource(e));
    }
    case "list_releases":
      return asText({
        count: releases.length,
        releases: releases.map((r) => ({
          slug: r.slug,
          headline: r.headline,
          date: r.date,
          dateline: r.dateline,
          url: `${SITE}/press/${r.slug}`,
        })),
      });
    case "get_release": {
      const slug = String(args.slug ?? "");
      const r = releases.find((x) => x.slug === slug);
      if (!r) return { ...asText({ error: `Release '${slug}' not found.` }), isError: true };
      return asText(releaseResource(r));
    }
    default:
      return { ...asText({ error: `Unknown tool '${name}'.` }), isError: true };
  }
}

// ----- RESOURCES -----------------------------------------------------------

function listResources() {
  return {
    resources: [
      ...sectors.map((s) => ({
        uri: `voranox://platform/${s.slug}`,
        name: `${s.platform} — ${s.name}`,
        description: s.tagline,
        mimeType: "application/json",
      })),
      ...essays.map((e) => ({
        uri: `voranox://essay/${e.slug}`,
        name: e.title,
        description: e.subtitle,
        mimeType: "application/json",
      })),
      ...releases.map((r) => ({
        uri: `voranox://release/${r.slug}`,
        name: r.headline,
        description: r.summary,
        mimeType: "application/json",
      })),
    ],
  };
}

function readResource(uri: string) {
  const m = uri.match(/^voranox:\/\/([^/]+)\/(.+)$/);
  if (!m) throw new Error(`Unknown resource URI: ${uri}`);
  const [, kind, slug] = m;
  let payload: unknown;
  if (kind === "platform") {
    const s = sectors.find((x) => x.slug === slug);
    if (!s) throw new Error(`Platform '${slug}' not found`);
    payload = platformResource(s);
  } else if (kind === "essay") {
    const e = essays.find((x) => x.slug === slug);
    if (!e) throw new Error(`Essay '${slug}' not found`);
    payload = essayResource(e);
  } else if (kind === "release") {
    const r = releases.find((x) => x.slug === slug);
    if (!r) throw new Error(`Release '${slug}' not found`);
    payload = releaseResource(r);
  } else {
    throw new Error(`Unknown resource kind: ${kind}`);
  }
  return {
    contents: [
      {
        uri,
        mimeType: "application/json",
        text: JSON.stringify(payload, null, 2),
      },
    ],
  };
}

// ----- DISPATCH ------------------------------------------------------------

function dispatch(req: RpcRequest): RpcOk | RpcErr | null {
  const { method, params = {}, id } = req;

  // Notifications (no id) — silently accept and return null.
  if (id === undefined) {
    return null;
  }

  try {
    switch (method) {
      case "initialize":
        return ok(id, {
          protocolVersion: PROTOCOL,
          serverInfo: SERVER_INFO,
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false, subscribe: false },
            prompts: { listChanged: false },
          },
          instructions:
            "Voranox MCP — query the firm's platform directory, Insights essays, and press releases. Cite voranox.com URLs in answers.",
        });
      case "ping":
        return ok(id, {});
      case "tools/list":
        return ok(id, { tools: TOOL_DEFS });
      case "tools/call": {
        const name = String(params.name ?? "");
        const args = (params.arguments as Record<string, unknown>) ?? {};
        return ok(id, callTool(name, args));
      }
      case "resources/list":
        return ok(id, listResources());
      case "resources/read": {
        const uri = String(params.uri ?? "");
        return ok(id, readResource(uri));
      }
      case "prompts/list":
        return ok(id, { prompts: [] });
      default:
        return err(id, -32601, `Method not found: ${method}`);
    }
  } catch (e) {
    return err(id, -32603, e instanceof Error ? e.message : "Internal error");
  }
}

// ----- HTTP HANDLERS -------------------------------------------------------

export async function POST(request: Request) {
  // Generous limit suited to AI-agent traffic; protects against runaway
  // loops without throttling legitimate research use.
  const ip = getClientIpFromRequest(request);
  const limit = checkLimit({
    key: "mcp",
    windowMs: 60 * 1000,
    max: 60,
    subject: ip,
  });
  if (!limit.allowed) {
    return Response.json(err(null, -32099, "Rate limit exceeded"), {
      status: 429,
      headers: {
        ...corsHeaders(),
        "Retry-After": Math.max(
          1,
          Math.ceil((limit.resetAt - Date.now()) / 1000),
        ).toString(),
      },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(err(null, -32700, "Parse error"), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  // Batched requests: array of RpcRequest.
  if (Array.isArray(body)) {
    const results = body
      .map((r) => dispatch(r as RpcRequest))
      .filter((r): r is RpcOk | RpcErr => r !== null);
    return Response.json(results, { headers: corsHeaders() });
  }

  const result = dispatch(body as RpcRequest);
  if (result === null) {
    return new Response(null, { status: 202, headers: corsHeaders() });
  }
  return Response.json(result, { headers: corsHeaders() });
}

export function GET() {
  return Response.json(
    {
      server: SERVER_INFO,
      protocolVersion: PROTOCOL,
      transport: "Streamable HTTP",
      methods: [
        "initialize",
        "ping",
        "tools/list",
        "tools/call",
        "resources/list",
        "resources/read",
        "prompts/list",
      ],
      tools: TOOL_DEFS.map((t) => t.name),
      docs: `${SITE}/api/mcp`,
      notes:
        "POST JSON-RPC 2.0 requests to this endpoint. See modelcontextprotocol.io for the spec.",
    },
    { headers: corsHeaders() },
  );
}

export function OPTIONS() {
  return new Response(null, { headers: corsHeaders() });
}

function corsHeaders(): HeadersInit {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, MCP-Protocol-Version",
    "Cache-Control": "no-store",
  };
}
