import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const ParallaxContainer = ({ children, className = "", intensity = 20 }: ParallaxContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isMobile) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;