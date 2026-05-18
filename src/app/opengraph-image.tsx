import { ImageResponse } from "next/og";
import { LOGO_B64 } from "./_logo-b64";

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
          background: "#ffffff",
          position: "relative",
        }}
      >
        {/* Top gold bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)" }} />

        {/* Left panel — logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 480, height: "100%", borderRight: "2px solid #f0ece4" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_B64} alt="Finvvritti" style={{ width: 260, height: "auto" }} />
        </div>

        {/* Right panel — text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, width: 720, padding: "0 80px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#c9a84c", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            CA &amp; CS Advisory
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, color: "#0f2644", lineHeight: 1.2 }}>
            Accounting, Taxation &amp; Compliance
          </div>
          <div style={{ width: 60, height: 3, background: "#c9a84c", borderRadius: 2 }} />
          <div style={{ fontSize: 20, color: "#555", lineHeight: 1.6 }}>
            One-stop solution for Finance, Compliance &amp; Growth. CA &amp; CS expertise across Auditing, Taxation, CFO Services and Valuation.
          </div>
          <div style={{ fontSize: 18, color: "#0f2644", fontWeight: 600, marginTop: 8 }}>
            finvvritti.com
          </div>
        </div>

        {/* Bottom gold bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)" }} />
      </div>
    ),
    { ...size }
  );
}
