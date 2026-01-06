import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: "sage" | "honey" | "cream";
  blur?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

const GlowingOrb = ({ 
  size = 400, 
  color = "sage", 
  blur = 100,
  opacity = 0.15,
  className = "",
  animate = true 
}: GlowingOrbProps) => {
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

  const colors = {
    sage: "82 50% 55%",
    honey: "38 70% 55%",
    cream: "45 55% 75%",
  };

  // Reduce blur on mobile for better performance
  const effectiveBlur = isMobile ? Math.min(blur, 60) : blur;
  const effectiveSize = isMobile ? size * 0.7 : size;
  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: effectiveSize,
        height: effectiveSize,
        background: `radial-gradient(circle, hsl(${colors[color]} / ${opacity}) 0%, transparent 70%)`,
        filter: `blur(${effectiveBlur}px)`,
        willChange: shouldAnimate ? "transform, opacity" : "auto",
      }}
      animate={shouldAnimate ? {
        scale: [1, 1.1, 1],
        opacity: [opacity, opacity * 0.7, opacity],
      } : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
};

export default GlowingOrb;