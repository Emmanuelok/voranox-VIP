import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Voranox Inc. — Intelligence for Every Industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse at top, rgba(201,169,97,0.18), transparent 60%), #050816",
          color: "#F5F1E8",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            letterSpacing: 6,
            fontSize: 22,
            color: "#C9A961",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 40 40">
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
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              maxWidth: 1000,
              letterSpacing: -1,
            }}
          >
            Intelligence,{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #9E823F 0%, #E0C887 50%, #9E823F 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontStyle: "italic",
              }}
            >
              refined
            </span>{" "}
            for every industry on earth.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 22,
              color: "rgba(245,241,232,0.6)",
              letterSpacing: 4,
            }}
          >
            <span>THE INTELLIGENCE STANDARD</span>
            <span style={{ color: "#C9A961" }}>·</span>
            <span>VORANOX.COM</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
