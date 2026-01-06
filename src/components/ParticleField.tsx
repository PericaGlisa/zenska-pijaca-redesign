import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "leaf" | "petal" | "sparkle" | "daisy";
  rotation: number;
}

const ParticleField = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    motionQuery.addEventListener("change", handleMotionChange);
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const particles = useMemo(() => {
    if (!dimensions.width || prefersReducedMotion) return [];
    
    const items: Particle[] = [];
    
    // Reduce particle count on mobile for better performance
    const leafCount = isMobile ? 4 : 8;
    const petalCount = isMobile ? 4 : 8;
    const sparkleCount = isMobile ? 6 : 12;
    const daisyCount = isMobile ? 2 : 4;
    
    // Leaves
    for (let i = 0; i < leafCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: 18 + Math.random() * 14,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 8,
        type: "leaf",
        rotation: Math.random() * 360,
      });
    }
    
    // Petals
    for (let i = leafCount; i < leafCount + petalCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: 12 + Math.random() * 10,
        duration: 18 + Math.random() * 8,
        delay: Math.random() * 10,
        type: "petal",
        rotation: Math.random() * 360,
      });
    }
    
    // Sparkles
    const sparkleStart = leafCount + petalCount;
    for (let i = sparkleStart; i < sparkleStart + sparkleCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 6,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        type: "sparkle",
        rotation: 0,
      });
    }

    // Daisies
    const daisyStart = sparkleStart + sparkleCount;
    for (let i = daisyStart; i < daisyStart + daisyCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: 16 + Math.random() * 12,
        duration: 20 + Math.random() * 10,
        delay: Math.random() * 12,
        type: "daisy",
        rotation: Math.random() * 360,
      });
    }
    
    return items;
  }, [dimensions, prefersReducedMotion, isMobile]);

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  const renderParticle = (particle: Particle) => {
    const willChangeStyle = { willChange: "transform, opacity" as const };
    
    switch (particle.type) {
      case "leaf":
        return (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${particle.x}%`,
              fontSize: `${particle.size}px`,
              ...willChangeStyle,
            }}
            initial={{ y: "-10vh", rotate: particle.rotation, opacity: 0 }}
            animate={{
              y: "110vh",
              rotate: particle.rotation + 720,
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌿
          </motion.div>
        );
      
      case "petal":
        return (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${particle.x}%`,
              fontSize: `${particle.size}px`,
              ...willChangeStyle,
            }}
            initial={{ y: "-10vh", rotate: particle.rotation, opacity: 0 }}
            animate={{
              y: "110vh",
              rotate: particle.rotation + 540,
              x: isMobile ? [0, 15, -10, 20, 0] : [0, 30, -20, 40, 0],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌸
          </motion.div>
        );
      
      case "sparkle":
        return (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              ...willChangeStyle,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="currentColor"
                className="text-honey/60"
              />
            </svg>
          </motion.div>
        );

      case "daisy":
        return (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${particle.x}%`,
              fontSize: `${particle.size}px`,
              ...willChangeStyle,
            }}
            initial={{ y: "-10vh", rotate: particle.rotation, opacity: 0 }}
            animate={{
              y: "110vh",
              rotate: particle.rotation + 360,
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🌼
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ willChange: "auto" }}
      aria-hidden="true"
    >
      {particles.map(renderParticle)}
    </div>
  );
};

export default ParticleField;