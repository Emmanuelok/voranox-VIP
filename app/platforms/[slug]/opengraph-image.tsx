import { ImageResponse } from "next/og";
import { sectorsBySlug, sectors } from "@/lib/sectors";

export const alt = "Voranox Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const sector = sectorsBySlug(params.slug);
  return [
    {
      id: "default",
      alt: sector ? `${sector.platform} — ${sector.name}` : "Voranox Platform",
      size,
      contentType,
    },
  ];
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export default async function PlatformOG({
  params,
}: {
  params: { slug: string };
}) {
  const sector = sectorsBySlug(params.slug);
  if (!sector) {
    return new ImageResponse(<div />, { ...size });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at top right, rgba(201,169,97,0.22), transparent 55%), #050816",
          color: "#F5F1E8",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              letterSpacing: 5,
              fontSize: 18,
              color: "#C9A961",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#C9A961"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M10 12 L20 30 L30 12"
                stroke="#E0C887"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="1.6" fill="#E0C887" />
            </svg>
            <span>VORANOX INC.</span>
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 5,
              color: "rgba(245,241,232,0.55)",
            }}
          >
            {sector.category.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              color: "rgba(245,241,232,0.5)",
            }}
          >
            {sector.name.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1,
              letterSpacing: -2,
              background:
                "linear-gradient(135deg, #9E823F 0%, #E0C887 50%, #9E823F 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {sector.platform}
          </div>
          <div
            style={{
              fontSize: 30,
              fontStyle: "italic",
              color: "rgba(245,241,232,0.85)",
              maxWidth: 1000,
              lineHeight: 1.3,
            }}
          >
            “{sector.tagline}”
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
