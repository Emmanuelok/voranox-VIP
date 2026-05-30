import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — the gold V monogram on midnight, generated at build.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050816",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#E0C887" strokeWidth="1.5" />
          <path
            d="M10 12 L20 30 L30 12"
            stroke="#E0C887"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="2" fill="#E0C887" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
