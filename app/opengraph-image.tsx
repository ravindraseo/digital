import { ImageResponse } from "next/og";

export const alt = "Digital Ravindra — Digital Marketing Agency in Delhi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a192f 0%, #112d4e 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 30,
              background: "#0f2540",
              border: "2px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 60,
              fontWeight: 900,
            }}
          >
            <span>D</span>
            <span style={{ color: "#ff5a1f" }}>R</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 800, display: "flex" }}>
              Digital<span style={{ color: "#ff5a1f", marginLeft: 16 }}>Ravindra</span>
            </div>
            <div style={{ fontSize: 24, letterSpacing: 6, color: "#94a3b8" }}>GROW | RANK | CONVERT</div>
          </div>
        </div>
        <div style={{ marginTop: 56, fontSize: 44, fontWeight: 700, lineHeight: 1.25, maxWidth: 1000 }}>
          Digital marketing, SEO &amp; Google Business Profile experts for Delhi NCR
        </div>
      </div>
    ),
    size,
  );
}
