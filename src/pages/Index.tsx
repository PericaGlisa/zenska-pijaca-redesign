import { useState, useEffect } from "react";
import { Phone, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-zenska-pijaca.png";
import ParticleField from "@/components/ParticleField";
import GlowingOrb from "@/components/GlowingOrb";
import DecorativeBorder from "@/components/DecorativeBorder";
import MouseFollower from "@/components/MouseFollower";
import AnimatedBee from "@/components/AnimatedBee";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import ParallaxContainer from "@/components/ParallaxContainer";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload logo
    const img = new Image();
    img.src = logo;
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Custom cursor */}
      <MouseFollower />
      
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-cream relative overflow-hidden grain">
        {/* Ambient glowing orbs */}
        <GlowingOrb size={700} color="sage" className="-top-60 -left-60" opacity={0.1} blur={120} />
        <GlowingOrb size={500} color="honey" className="top-1/3 -right-40" opacity={0.06} blur={140} />
        <GlowingOrb size={450} color="cream" className="bottom-0 left-1/3" opacity={0.12} blur={100} />
        <GlowingOrb size={400} color="sage" className="-bottom-40 right-1/4" opacity={0.08} blur={120} />

        {/* Animated bee */}
        <AnimatedBee />

        {/* Particle effects */}
        <ParticleField />

        {/* Decorative border elements */}
        <DecorativeBorder />

        {/* Hero gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `
              radial-gradient(ellipse 120% 60% at 50% -10%, hsl(82 50% 55% / 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 80% 40% at 80% 90%, hsl(38 70% 55% / 0.04) 0%, transparent 50%)
            `,
          }}
        />

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-3 sm:px-4 py-16 sm:py-20 pb-24 sm:pb-28">
          <AnimatePresence>
            {showContent && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
              >
                {/* Logo with parallax */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8 sm:mb-10 md:mb-14 lg:mb-16 relative"
                >
                  {/* Multi-layer glow behind logo */}
                  <div className="absolute inset-0 scale-125">
                    <div className="absolute inset-0 blur-[60px] opacity-20 bg-primary/30 rounded-full animate-pulse-soft" />
                    <div className="absolute inset-0 blur-[40px] opacity-15 bg-honey/20 rounded-full" style={{ animationDelay: "1s" }} />
                  </div>
                  
                  <ParallaxContainer intensity={15}>
                    <motion.img 
                      src={logo} 
                      alt="Ženska Pijaca - Kupovina sa dušom" 
                      className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] object-contain relative z-10"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-0.5, 0.5, -0.5],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.4, ease: "easeOut" },
                      }}
                      style={{
                        filter: "drop-shadow(0 25px 50px hsl(82 40% 30% / 0.2)) drop-shadow(0 10px 20px hsl(82 40% 40% / 0.15))",
                      }}
                    />
                  </ParallaxContainer>
                </motion.div>

                {/* Premium content card */}
                <motion.div 
                  variants={itemVariants}
                  className="max-w-2xl mx-auto text-center relative"
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-sage-light/20 via-cream/30 to-sage-light/20 rounded-[2rem] blur-xl opacity-60" />
                  
                  <div className="relative glass-strong rounded-2xl sm:rounded-[1.75rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-sage-light/25 overflow-hidden mx-4 sm:mx-0">
                    {/* Inner ambient light */}
                    <div className="absolute inset-0 bg-gradient-to-b from-daisy/60 via-transparent to-cream-dark/20 pointer-events-none" />
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    
                    {/* Animated shimmer */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, hsl(82 50% 60% / 0.08) 45%, hsl(82 50% 60% / 0.12) 50%, hsl(82 50% 60% / 0.08) 55%, transparent 60%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{
                        backgroundPosition: ["200% 0", "-200% 0"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Main heading with letter animation */}
                      <motion.h1 
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-2 tracking-tight leading-[1.1]"
                        variants={itemVariants}
                      >
                        <AnimatedText text="Uskoro" className="block" />
                        <span className="text-gradient block mt-1">
                          <AnimatedText text="stižemo" />
                        </span>
                      </motion.h1>
                      
                      {/* Elegant decorative divider */}
                      <motion.div 
                        className="flex items-center justify-center gap-3 sm:gap-4 my-6 sm:my-8"
                        variants={itemVariants}
                      >
                        <motion.span 
                          className="w-12 sm:w-16 md:w-20 h-px"
                          style={{
                            background: "linear-gradient(90deg, transparent, hsl(82 45% 65%))",
                          }}
                          initial={{ scaleX: 0, originX: 1 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.2, delay: 1.2 }}
                        />
                        <motion.span 
                          className="text-primary text-2xl"
                          animate={{ 
                            rotate: [0, 8, -8, 0],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          ✿
                        </motion.span>
                        <motion.span 
                          className="w-12 sm:w-16 md:w-20 h-px"
                          style={{
                            background: "linear-gradient(90deg, hsl(82 45% 65%), transparent)",
                          }}
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.2, delay: 1.2 }}
                        />
                      </motion.div>

                      {/* Announcement text */}
                      <motion.p 
                        className="font-elegant text-lg sm:text-xl md:text-2xl text-foreground/90 mb-4 sm:mb-5 leading-relaxed tracking-wide px-2"
                        variants={itemVariants}
                      >
                        Naš <span className="font-semibold text-primary italic">webshop</span> prolazi kroz potpunu transformaciju!
                      </motion.p>
                      
                      <motion.p 
                        className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto px-2"
                        variants={itemVariants}
                      >
                        U novoj godini vas očekuje potpuno{" "}
                        <span className="font-semibold text-sage-dark">novo ruho</span> i 
                        još lepše iskustvo kupovine sa dušom.
                      </motion.p>

                      {/* Premium divider */}
                      <motion.div 
                        className="w-2/3 mx-auto h-px my-6 sm:my-8 md:my-10"
                        style={{
                          background: "linear-gradient(90deg, transparent, hsl(82 45% 70% / 0.5), transparent)",
                        }}
                        variants={itemVariants}
                      />

                      {/* Order info */}
                      <motion.div variants={itemVariants}>
                        <p className="font-elegant text-base sm:text-lg md:text-xl text-foreground/75 mb-5 sm:mb-7 italic tracking-wide">
                          Za poručivanja, tu smo za vas
                        </p>
                        
                        {/* Premium Phone CTA */}
                        <motion.a 
                          href="tel:+381648278384"
                          className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-sage text-primary-foreground px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-body font-semibold text-base sm:text-lg md:text-xl relative overflow-hidden"
                          style={{
                            boxShadow: "0 10px 40px hsl(82 45% 40% / 0.25), 0 4px 15px hsl(82 45% 40% / 0.15), inset 0 1px 0 hsl(82 50% 70% / 0.3)",
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 15px 50px hsl(82 50% 40% / 0.35), 0 5px 20px hsl(82 50% 40% / 0.2), inset 0 1px 0 hsl(82 50% 70% / 0.4)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                            initial={{ x: "-150%" }}
                            whileHover={{ x: "150%" }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                          />
                          
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 flex-shrink-0" />
                          <span className="relative z-10 tracking-wide">+381 64 827 8384</span>
                        </motion.a>
                      </motion.div>

                      {/* Social Media */}
                      <motion.div 
                        className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-sage-light/25"
                        variants={itemVariants}
                      >
                        <p className="font-body text-[10px] sm:text-xs text-muted-foreground/70 mb-4 sm:mb-5 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                          Pratite nas
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                          <motion.a 
                            href="https://www.facebook.com/profile.php?id=100076473301474/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary/60 hover:bg-primary hover:text-primary-foreground text-secondary-foreground rounded-full transition-all duration-300 border border-sage-light/20 hover:border-transparent backdrop-blur-sm w-full sm:w-auto justify-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label="Facebook"
                          >
                            <FacebookIcon />
                            <span className="font-body text-sm font-medium tracking-wide">Facebook</span>
                          </motion.a>
                          <motion.a 
                            href="https://www.instagram.com/zenska_pijaca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary/60 hover:bg-primary hover:text-primary-foreground text-secondary-foreground rounded-full transition-all duration-300 border border-sage-light/20 hover:border-transparent backdrop-blur-sm w-full sm:w-auto justify-center"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label="Instagram"
                          >
                            <InstagramIcon />
                            <span className="font-body text-sm font-medium tracking-wide">Instagram</span>
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Tagline */}
                <motion.p 
                  className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark/80 italic mt-10 sm:mt-12 md:mt-14 tracking-wide flex items-center justify-center"
                  variants={itemVariants}
                >
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Kupovina sa dušom
                  </motion.span>
                  <motion.span 
                    className="inline-flex items-center ml-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-primary text-primary drop-shadow-sm" />
                  </motion.span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />

        {/* Premium animated wave */}
        <div className="absolute bottom-0 left-0 right-0 h-36 overflow-hidden pointer-events-none">
          <motion.svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 w-full h-full"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(82 50% 72% / 0.15)" />
                <stop offset="50%" stopColor="hsl(82 48% 62% / 0.25)" />
                <stop offset="100%" stopColor="hsl(82 50% 72% / 0.15)" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(82 45% 68% / 0.1)" />
                <stop offset="50%" stopColor="hsl(82 45% 58% / 0.18)" />
                <stop offset="100%" stopColor="hsl(82 45% 68% / 0.1)" />
              </linearGradient>
            </defs>
            <motion.path 
              d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
              fill="url(#waveGradient1)"
              animate={{
                d: [
                  "M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z",
                  "M0,75 C240,25 480,95 720,45 C960,75 1200,25 1440,75 L1440,120 L0,120 Z",
                  "M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0,80 C360,45 720,95 1080,55 C1260,45 1380,75 1440,65 L1440,120 L0,120 Z"
              fill="url(#waveGradient2)"
              animate={{
                d: [
                  "M0,80 C360,45 720,95 1080,55 C1260,45 1380,75 1440,65 L1440,120 L0,120 Z",
                  "M0,55 C360,90 720,40 1080,75 C1260,55 1380,45 1440,85 L1440,120 L0,120 Z",
                  "M0,80 C360,45 720,95 1080,55 C1260,45 1380,75 1440,65 L1440,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default Index;