"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };
type Source = { title: string; url: string };

const SUGGESTIONS = [
  "What does Voranox do?",
  "Which platform is for banking?",
  "How does an engagement work?",
  "What is sovereign-grade deployment?",
];

function pathOf(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

// Render assistant text with /path links and paragraph breaks.
function renderContent(text: string) {
  const parts = text.split(/(\/[a-z0-9][a-z0-9/-]*)/gi);
  return parts.map((part, i) => {
    if (/^\/[a-z0-9][a-z0-9/-]*$/i.test(part)) {
      return (
        <a
          key={i}
          href={part}
          className="text-gold underline underline-offset-2 hover:text-gold-light"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sources, busy]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const clean = text.trim();
      if (!clean || busy) return;
      const nextMessages: Message[] = [
        ...messages,
        { role: "user", content: clean },
      ];
      setMessages(nextMessages);
      setInput("");
      setSources([]);
      setBusy(true);

      // Placeholder assistant turn we stream into.
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const res = await fetch("/api/concierge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: nextMessages }),
          signal: ctrl.signal,
        });

        if (!res.ok || !res.body) {
          const j = await res.json().catch(() => null);
          throw new Error(
            j?.error ?? "The concierge is unavailable right now.",
          );
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.trim()) continue;
            let evt: Record<string, unknown>;
            try {
              evt = JSON.parse(line);
            } catch {
              continue;
            }
            if (evt.type === "sources" && Array.isArray(evt.sources)) {
              setSources(evt.sources as Source[]);
            } else if (evt.type === "delta" && typeof evt.text === "string") {
              const chunk = evt.text as string;
              setMessages((m) => {
                const copy = [...m];
                const last = copy[copy.length - 1];
                if (last?.role === "assistant")
                  copy[copy.length - 1] = {
                    ...last,
                    content: last.content + chunk,
                  };
                return copy;
              });
            } else if (evt.type === "error") {
              throw new Error((evt.message as string) ?? "Something went wrong.");
            }
          }
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setMessages((m) => {
          const copy = [...m];
          const last = copy[copy.length - 1];
          const msg =
            (err as Error).message ||
            "The concierge is briefly unavailable. Please email briefings@voranox.com.";
          if (last?.role === "assistant" && !last.content)
            copy[copy.length - 1] = { ...last, content: msg };
          else copy.push({ role: "assistant", content: msg });
          return copy;
        });
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [busy, messages],
  );

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close concierge" : "Ask the Voranox concierge"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 pl-4 pr-5 h-12 border border-gold/40 bg-midnight/90 backdrop-blur-md text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-all shadow-2xl"
      >
        <span
          aria-hidden
          className={`w-2 h-2 rounded-full bg-gold ${busy ? "animate-pulse" : ""} transition`}
        />
        {open ? "Close" : "Concierge"}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Voranox concierge"
          className="fixed inset-x-3 bottom-20 sm:inset-x-auto sm:right-5 sm:w-[420px] z-[95] flex flex-col max-h-[70vh] border border-gold/25 bg-midnight/95 backdrop-blur-xl shadow-2xl fade-up"
        >
          <header className="flex items-center justify-between px-5 py-4 border-b border-gold/15">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gold/80">
                Voranox Concierge
              </p>
              <p className="text-[11px] text-ivory/45 mt-0.5">
                Grounded in voranox.com · not a substitute for a briefing
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="w-8 h-8 inline-flex items-center justify-center border border-gold/20 text-ivory/70 hover:text-gold hover:border-gold/50 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
            {messages.length === 0 && (
              <div className="space-y-5">
                <p className="font-serif text-xl text-ivory leading-snug">
                  How can I help you understand Voranox?
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="text-left text-xs text-ivory/75 border border-gold/20 px-3 py-2 hover:border-gold/50 hover:text-ivory transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] bg-gold/10 border border-gold/25 px-4 py-2.5 text-sm text-ivory/90"
                      : "max-w-[90%] text-sm text-ivory/85 leading-relaxed whitespace-pre-wrap"
                  }
                >
                  {m.role === "assistant" && m.content === "" && busy ? (
                    <span className="inline-flex gap-1 items-center text-ivory/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse [animation-delay:0.3s]" />
                    </span>
                  ) : (
                    renderContent(m.content)
                  )}
                </div>
              </div>
            ))}

            {sources.length > 0 && !busy && (
              <div className="pt-2 border-t border-gold/10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Sources
                </p>
                <ul className="space-y-1">
                  {sources.slice(0, 4).map((s) => (
                    <li key={s.url}>
                      <a
                        href={pathOf(s.url)}
                        className="text-xs text-ivory/60 hover:text-gold transition"
                      >
                        {s.title} · {pathOf(s.url)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-gold/15 p-3 flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Ask about platforms, doctrine, engagement…"
              aria-label="Message the concierge"
              className="flex-1 resize-none bg-midnight border border-gold/20 px-3 py-2.5 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold outline-none max-h-28"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="shrink-0 w-10 h-10 inline-flex items-center justify-center bg-gold-shine text-midnight disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
