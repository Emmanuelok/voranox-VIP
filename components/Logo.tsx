import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? 36 : size === "sm" ? 22 : 28;
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Voranox Inc."
    >
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-180"
      >
        <defs>
          <linearGradient id="vgold" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#9E823F" />
            <stop offset="50%" stopColor="#E0C887" />
            <stop offset="100%" stopColor="#9E823F" />
          </linearGradient>
        </defs>
        <circle
          cx="20"
          cy="20"
          r="18.5"
          stroke="url(#vgold)"
          strokeWidth="1"
        />
        <path
          d="M10 12 L20 30 L30 12"
          stroke="url(#vgold)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="1.6" fill="url(#vgold)" />
      </svg>
      <span className="font-serif text-xl tracking-wider text-ivory">
        VORANOX
        <span className="ml-1.5 text-[0.6em] tracking-[0.4em] text-gold align-middle">
          INC.
        </span>
      </span>
    </Link>
  );
}
