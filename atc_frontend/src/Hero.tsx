import { motion } from "framer-motion";

export default function Hero() {
  const backgrounds = [
    "#000000",                                   // Outer layer (Black)
    "#000000",                                   // Deep layer (Black)
    "linear-gradient(135deg, #FFB703, #E85D04)", // Vivid Yellow/Orange
    "linear-gradient(135deg, #FFB703, #E85D04)", // Vivid Yellow/Orange
    "linear-gradient(135deg, #EF233C, #902923)"  // Intense Red (Inner core)
  ];

  // Concentric expanding circles originating exactly from behind the upper body/head of the athlete
  const concentricShapes = [
    "circle(150% at 75% 40%)",  // 1. Base layer, covers entire screen
    "circle(90% at 75% 40%)",   // 2. Large expanding ring (Black)
    "circle(48.3% at 73.5% 43%)", // 3. Medium expanding ring (Yellow - slightly lowered)
    "circle(28.2% at 75% 40%)", // 4. Tight ring (Yellow - slightly lowered)
    "circle(13% at 75% 35%)"    // 5. Core circle (Red - kept exactly at the original height)
  ];

  return (
    <div
      style={{
        marginTop: "calc(68px + 3vw)",
        marginBottom: "3vw",
        marginLeft: "3vw",
        marginRight: "3vw",
        height: "calc(100vh - 68px - 6vw)",
        borderRadius: "25px",
        background: "#000000", // Changed background to dark to fit white text
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 6%",
        color: "#ffffff" // Text is now white
      }}
    >
      {/* Background radial ripples - Fully opaque, instantly appearing */}
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0, top: 0, left: 0 }}>
        {backgrounds.map((bg, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 1 }} // Instantly fully appeared
            animate={{ scale: 1, opacity: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: bg,
              clipPath: concentricShapes[i], // Expanding circular layers
              transformOrigin: "75% 40%",    // Base anchor
            }}
          />
        ))}
      </div>

      <div style={{ zIndex: 2, maxWidth: "55%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Adjusted Typography: White Text */}
        <h1 style={{ margin: 0, color: "#ffffff", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500 }}>Athletes </span>
          <span style={{ fontFamily: '"Playwrite IE", cursive', fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400 }}>to</span>
          <br/>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(64px, 8vw, 120px)", fontWeight: 800, textTransform: "uppercase", display: "block", marginTop: "8px", color: "#ffffff" }}>
            Champ<span style={{ color: "#000000", marginLeft: "0.1em" }}>ions</span>
          </span>
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.8vw, 20px)", opacity: 0.9, lineHeight: 1.6, maxWidth: "480px", margin: 0, fontWeight: 500, color: "#ffffff" }}>
            Train harder. Track smarter. Win bigger.
        </p>

        <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap", alignItems: "center" }}>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "var(--font-body)", // Poppins
              fontWeight: 600,
              padding: "12px 24px",
              background: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff",
              borderRadius: "9999px",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "0.5px",
              transition: "background-color 0.2s, color 0.2s"
            }}
          >
            Start Tracking
          </motion.a>

          <motion.a
            href="#how"
            whileHover={{ scale: 1.05, backgroundColor: "transparent", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "var(--font-display)", // Boldonse, same as Champions
              fontWeight: 500,
              padding: "10px 22px",
              background: "#ffffff",
              color: "#000000",
              border: "2px solid #ffffff",
              borderRadius: "0px",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.5px",
              transition: "background-color 0.2s, color 0.2s"
            }}
          >
            See How It Works
          </motion.a>
        </div>
      </div>

      <div style={{ zIndex: 2, flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%", position: "relative" }}>
        {/* Quick entry pop without rotation or y-translation */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
           style={{ zIndex: 1, position: "relative", height: "100%", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", transformOrigin: "bottom center" }}
        >
            <img 
              src="/hero_img.png" 
              alt="Hero Preview" 
              style={{
                marginBottom: "-15%", // Push the image further down the container
                width: "135%",       // Considerably bigger width
                height: "135%",      // Considerably bigger height
                maxWidth: "none",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                transformOrigin: "bottom center"
              }} 
            />
        </motion.div>
      </div>
    </div>
  );
}
