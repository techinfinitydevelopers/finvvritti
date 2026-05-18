import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Finvvritti – CA & CS Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f2644 0%, #1a3a6b 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            FINVVRITTI
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "#c9a84c",
              borderRadius: 2,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#c9a84c",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            CA &amp; CS Advisory
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 800,
              lineHeight: 1.5,
            }}
          >
            Accounting · Taxation · Compliance · CFO Services · Valuation
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.45)",
              marginTop: 8,
            }}
          >
            finvvritti.com
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
