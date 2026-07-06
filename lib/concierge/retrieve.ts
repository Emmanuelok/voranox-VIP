// Lightweight lexical retrieval over the knowledge corpus.
//
// No embeddings/vector DB — a TF-style term-overlap scorer is more than enough
// for a bounded, developer-authored corpus and keeps the endpoint dependency-free
// and fast. Returns the top-k most relevant docs for a query.

import { knowledge, type KnowledgeDoc } from "./knowledge";

const STOP = new Set([
  "the","a","an","and","or","of","to","in","for","on","is","are","it","its",
  "with","that","this","what","which","who","how","do","does","can","you","your",
  "i","we","our","us","me","my","at","by","as","be","from","about","tell","show",
  "please","help","need","want","would","should","could","give","list","voranox",
]);

function tokenize(s: string): string[] {
  return (s.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter(
    (t) => t.length > 1 && !STOP.has(t),
  );
}

// Precompute per-doc token frequency maps once per process.
type Indexed = { doc: KnowledgeDoc; tf: Map<string, number>; len: number };
const index: Indexed[] = knowledge.map((doc) => {
  const tokens = tokenize(`${doc.title} ${doc.title} ${doc.text}`); // title weighted 2x
  const tf = new Map<string, number>();
  for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
  return { doc, tf, len: tokens.length || 1 };
});

// Document frequency for inverse-document-frequency weighting.
const df = new Map<string, number>();
for (const { tf } of index) {
  for (const term of tf.keys()) df.set(term, (df.get(term) ?? 0) + 1);
}
const N = index.length;

export type RetrievedDoc = KnowledgeDoc & { score: number };

export function retrieve(query: string, k = 6): RetrievedDoc[] {
  const qTerms = tokenize(query);
  if (qTerms.length === 0) {
    // No usable query terms — return the firm overview + directory as a floor.
    return index
      .filter((i) => i.doc.kind === "firm" || i.doc.id === "page--platforms")
      .map((i) => ({ ...i.doc, score: 0 }));
  }
  const qSet = new Set(qTerms);

  const scored = index.map(({ doc, tf, len }) => {
    let score = 0;
    for (const term of qSet) {
      const f = tf.get(term);
      if (!f) continue;
      const idf = Math.log(1 + N / (1 + (df.get(term) ?? 0)));
      score += (f / len) * idf;
    }
    return { doc, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => ({ ...s.doc, score: s.score }));
}

/** Render retrieved docs into a compact context block for the model. */
export function renderContext(docs: RetrievedDoc[]): string {
  if (docs.length === 0) return "No specific matches found in the corpus.";
  return docs
    .map(
      (d, i) =>
        `[${i + 1}] ${d.title}\nURL: ${d.url}\n${d.text}`,
    )
    .join("\n\n");
}
