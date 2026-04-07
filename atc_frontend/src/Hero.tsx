import { motion } from "framer-motion";

export default function Hero() {
  const colors = ["#7B2FBE", "#1D7FE8", "#2DC653", "#F5C518", "#E63946"];
  
  // 5 wedges radiating from 75% 50%, with precisely calculated perimeter 
  // intersections to make the 5 center angles visually equal (~72 degrees each).
  const polygonShapes = [
    "polygon(75% 0%, 100% 0%, 100% 30%, 75% 50%)",          // 1. Top Right
    "polygon(100% 30%, 100% 90%, 75% 50%)",                 // 2. Middle Right
    "polygon(100% 90%, 100% 100%, 30% 100%, 75% 50%)",      // 3. Bottom
    "polygon(30% 100%, 0% 100%, 0% 30%, 75% 50%)",          // 4. Bottom Left
    "polygon(0% 30%, 0% 0%, 75% 0%, 75% 50%)"               // 5. Top Left
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
        background: "#ffffff", // Changed background to white
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 6%",
        color: "#0a0a0a" // Text is now black
      }}
    >
      {/* Background Triangles - Fully opaque, instantly appearing to be ready before the image */}
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0, top: 0, left: 0 }}>
        {colors.map((color, i) => (
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
              backgroundColor: color,
              clipPath: polygonShapes[i],
              transformOrigin: "75% 50%", // Exact intersection behind the image
            }}
          />
        ))}
      </div>

      <div style={{ zIndex: 2, maxWidth: "55%", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Adjusted Typography: Black Text, removed text glow */}
        <h1 style={{ margin: 0, color: "#0a0a0a", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500 }}>Athletes </span>
          <span style={{ fontFamily: '"Playwrite IE", cursive', fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400 }}>to</span>
          <br/>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(64px, 8vw, 120px)", fontWeight: 800, textTransform: "uppercase", display: "block", marginTop: "8px", color: "#0a0a0a" }}>
            Champions
          </span>
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.8vw, 20px)", opacity: 0.9, lineHeight: 1.6, maxWidth: "480px", margin: 0, fontWeight: 500 }}>
          Here where we accompany you to greatness. Track every rep, sprint, and milestone.
        </p>
        
        <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap", alignItems: "center" }}>
          <motion.a 
            href="#cta" 
            whileHover={{ scale: 1.05, backgroundColor: "#0a0a0a", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              padding: "10px 22px",
              background: "transparent",
              color: "#0a0a0a",
              border: "2px solid #0a0a0a",
              borderRadius: "9999px",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.3px",
              transition: "background-color 0.2s, color 0.2s"
            }}
          >
            Start Tracking
          </motion.a>
          
          <motion.a 
            href="#how" 
            whileHover={{ scale: 1.05, backgroundColor: "transparent", color: "#0a0a0a" }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "var(--font-accent)",
              fontWeight: 600,
              padding: "10px 22px",
              background: "#0a0a0a",
              color: "#ffffff",
              border: "2px solid #0a0a0a",
              borderRadius: "9999px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.3px",
              transition: "background-color 0.2s, color 0.2s"
            }}
          >
            See How It Works
          </motion.a>
        </div>
      </div>

      <div style={{ zIndex: 2, flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%", position: "relative" }}>
        {/* Syncing rotation with entry: Rotates from Right (18deg) to left past neutral (-4deg) to rest (0deg) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 18 }}
           animate={{ opacity: 1, scale: 1, y: 0, rotate: [18, -4, 0] }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // Delays slightly so Triangles are definitively first
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
