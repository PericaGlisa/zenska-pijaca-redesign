import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBee = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    setIsMobile(window.innerWidth < 768);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  // Don't render on mobile or if user prefers reduced motion
  if (prefersReducedMotion || isMobile) {
    return null;
  }

  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      initial={{ x: "-10vw", y: "30vh" }}
      animate={{
        x: ["0vw", "25vw", "45vw", "70vw", "85vw", "110vw"],
        y: ["30vh", "20vh", "35vh", "15vh", "25vh", "30vh"],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 8,
      }}
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          y: [0, -8, 0, -5, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-3xl md:text-4xl drop-shadow-lg"
        style={{
          filter: "drop-shadow(0 4px 8px hsl(38 70% 50% / 0.3))",
        }}
      >
        🐝
      </motion.div>
    </motion.div>
  );
};

export default AnimatedBee;