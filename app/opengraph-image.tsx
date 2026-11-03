import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/site-config";

export const alt = "Integral Labs — Custom Software, Web Platforms, SEO & AEO Engineering";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b1120",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: brand tag */}
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
              fontSize: 26,
              letterSpacing: "0.3em",
              color: "#60a5fa",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            INTEGRAL LABS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#475569",
              fontFamily: "monospace",
            }}
          >
            INTEGRAL GROUPS
          </div>
        </div>

        {/* Middle: headline + subtext */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Custom Software,</span>
            <span style={{ display: "flex" }}>
              Web Platforms{" "}
              <span style={{ color: "#3b82f6", display: "flex" }}>&amp;</span>{" "}
              Search Dominance
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: 940,
              display: "flex",
            }}
          >
            Next.js engineering, bespoke business systems, Technical SEO and AI
            search optimization — built as equal disciplines.
          </div>
        </div>

        {/* Bottom: capability chips + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            {["Web Platforms", "Custom Software", "Technical SEO", "AEO"].map(
              (chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    padding: "10px 22px",
                    borderRadius: 999,
                    backgroundColor: "rgba(59,130,246,0.12)",
                    border: "2px solid rgba(59,130,246,0.4)",
                    color: "#93c5fd",
                    fontSize: 22,
                    fontWeight: 600,
                  }}
                >
                  {chip}
                </div>
              )
            )}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#64748b",
              fontFamily: "monospace",
            }}
          >
            {SITE_CONFIG.domain.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
