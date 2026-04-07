import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import "./index.css";

const LogoScaler = () => {
  const [logoMode, setLogoMode] = useState<"monogram" | "full">("full");

  // Inheriting the exact pixel measurements you settled on!
  const [athletesSize, setAthletesSize] = useState(30);
  const [toSize, setToSize] = useState(29);
  const [championsSize, setChampionsSize] = useState(18);
  
  // New layout tuners specifically for the 'C'
  const [cTopOffset, setCTopOffset] = useState(0);
  const [cSpacing, setCSpacing] = useState(3);

  const logoRefWhite = useRef<HTMLDivElement>(null);
  const logoRefBlack = useRef<HTMLDivElement>(null);

  const textA = logoMode === "monogram" ? "A" : "Athletes";
  const textT = logoMode === "monogram" ? "t" : "to";
  const textC = logoMode === "monogram" ? "C" : "Champions";

  const handleExport = async (mode: "white" | "black") => {
    const node = mode === "white" ? logoRefWhite.current : logoRefBlack.current;
    if (!node) return;
    
    try {
      const dataUrl = await toPng(node, { 
        backgroundColor: "rgba(0,0,0,0)",
        pixelRatio: 4, // Ultra High resolution export (4x size)
        style: { margin: "0", transform: "none" }
      });
      
      const link = document.createElement("a");
      link.download = `AtC-${logoMode}Logo-${mode}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export PNG:", err);
      alert("Failed to export PNG. See console.");
    }
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: "var(--off-white)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px", fontFamily: "var(--font-body)", overflowY: "auto", padding: "40px 0" }}>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>AtC Monogram Studio</h2>
        <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>Fine-tune the typography and export fully transparent PNGs directly from the browser.</p>
        
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "24px" }}>
          <button onClick={() => setLogoMode("monogram")} style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid var(--black)", background: logoMode === "monogram" ? "var(--black)" : "transparent", color: logoMode === "monogram" ? "white" : "var(--black)", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600 }}>Short (AtC)</button>
          <button onClick={() => setLogoMode("full")} style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid var(--black)", background: logoMode === "full" ? "var(--black)" : "transparent", color: logoMode === "full" ? "white" : "var(--black)", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600 }}>Full Logo</button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "40px", position: "relative" }}>
        {/* Hidden render nodes for mathematically perfect PNG exports without UI wrapper padding */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
           <div ref={logoRefBlack} className="nav-logo" style={{ pointerEvents: "none", margin: 0, padding: "4px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: `${athletesSize}px`, color: "#000000", letterSpacing: "-0.3px", lineHeight: 1 }}>{textA}</span>
              <span style={{ fontFamily: "var(--font-accent)", fontSize: `${toSize}px`, color: "#000000", margin: "0 -1px 0 0", lineHeight: 1 }}>{textT}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: `${championsSize}px`, color: "#000000", position: "relative", top: `${cTopOffset}px`, marginLeft: `${cSpacing}px`, lineHeight: 1 }}>{textC}</span>
            </div>
        </div>
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
           <div ref={logoRefWhite} className="nav-logo" style={{ pointerEvents: "none", margin: 0, padding: "4px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: `${athletesSize}px`, color: "#ffffff", letterSpacing: "-0.3px", lineHeight: 1 }}>{textA}</span>
              <span style={{ fontFamily: "var(--font-accent)", fontSize: `${toSize}px`, color: "#ffffff", margin: "0 -1px 0 0", lineHeight: 1 }}>{textT}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: `${championsSize}px`, color: "#ffffff", position: "relative", top: `${cTopOffset}px`, marginLeft: `${cSpacing}px`, lineHeight: 1 }}>{textC}</span>
            </div>
        </div>

        {/* Live Preview Boxes */}
        <div style={{ background: "white", padding: "48px 64px", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="nav-logo" style={{ pointerEvents: "none", margin: 0 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: `${athletesSize}px`, color: "#000000", letterSpacing: "-0.3px", transition: "font-size 0.1s" }}>{textA}</span>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: `${toSize}px`, color: "#000000", margin: "0 -1px 0 0", transition: "font-size 0.1s" }}>{textT}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: `${championsSize}px`, color: "#000000", position: "relative", top: `${cTopOffset}px`, marginLeft: `${cSpacing}px`, transition: "all 0.1s" }}>{textC}</span>
          </div>
        </div>
        <div style={{ background: "#0a0a0a", padding: "48px 64px", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="nav-logo" style={{ pointerEvents: "none", margin: 0 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: `${athletesSize}px`, color: "#ffffff", letterSpacing: "-0.3px", transition: "font-size 0.1s" }}>{textA}</span>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: `${toSize}px`, color: "#ffffff", margin: "0 -1px 0 0", transition: "font-size 0.1s" }}>{textT}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: `${championsSize}px`, color: "#ffffff", position: "relative", top: `${cTopOffset}px`, marginLeft: `${cSpacing}px`, transition: "all 0.1s" }}>{textC}</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "420px", background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
        {/* Letter Sizes */}
        {[
          { label: `'${textA}' Typography Size`, size: athletesSize, setter: setAthletesSize, min: 10, max: 100 },
          { label: `'${textT}' Typography Size`, size: toSize, setter: setToSize, min: 10, max: 100 },
          { label: `'${textC}' Typography Size`, size: championsSize, setter: setChampionsSize, min: 10, max: 100 },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
              <span style={{ fontSize: "14px" }}>{item.label}</span>
              <span style={{ fontSize: "14px", background: "var(--gray)", padding: "4px 8px", borderRadius: "4px" }}>{item.size}px</span>
            </div>
            <input type="range" min={item.min} max={item.max} value={item.size} onChange={(e) => item.setter(Number(e.target.value))} style={{ width: "100%", cursor: "pointer", accentColor: "var(--black)" }} />
          </div>
        ))}
        
        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "8px 0" }} />

        {/* C-Specific Spacing Tuners */}
        {[
          { label: `Vertical Offset of '${textC}' (Raise/Lower)`, size: cTopOffset, setter: setCTopOffset, min: -20, max: 20, step: 0.1 },
          { label: `Spacing between '${textT}' and '${textC}'`, size: cSpacing, setter: setCSpacing, min: -10, max: 20, step: 0.1 },
        ].map((item, i) => (
          <div key={`offset-${i}`} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
              <span style={{ fontSize: "14px", color: "var(--purple)" }}>{item.label}</span>
              <span style={{ fontSize: "14px", background: "var(--gray)", padding: "4px 8px", borderRadius: "4px", minWidth: "40px", textAlign: "right" }}>{item.size}px</span>
            </div>
            <input type="range" min={item.min} max={item.max} step={item.step} value={item.size} onChange={(e) => item.setter(Number(e.target.value))} style={{ width: "100%", cursor: "pointer", accentColor: "var(--purple)" }} />
          </div>
        ))}

      </div>

      <div style={{ display: "flex", gap: "16px", marginBottom: "60px" }}>
        <button onClick={() => handleExport("black")} style={{ padding: "14px 24px", background: "white", color: "var(--black)", border: "2px solid #ccc", borderRadius: "8px", cursor: "pointer", fontWeight: 600, fontFamily: "var(--font-body)" }}>
          ⬇ Export Black PNG
        </button>

        <button onClick={() => handleExport("white")} style={{ padding: "14px 24px", background: "var(--black)", color: "white", border: "2px solid var(--black)", borderRadius: "8px", cursor: "pointer", fontWeight: 600, fontFamily: "var(--font-body)" }}>
          ⬇ Export White PNG
        </button>

        <button onClick={() => window.location.hash = ""} style={{ padding: "14px 24px", background: "transparent", color: "var(--black)", border: "none", textDecoration: "underline", cursor: "pointer", fontWeight: 600, fontFamily: "var(--font-body)", marginLeft: "12px" }}>
          Close Studio
        </button>
      </div>
    </div>
  );
};

export default LogoScaler;