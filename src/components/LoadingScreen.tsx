import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(48 55% 96%) 0%, hsl(45 50% 92%) 100%)",
        }}
      />
      
      <div className="relative flex flex-col items-center px-4">
        <motion.div
          className="text-5xl sm:text-6xl mb-4 sm:mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.span
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
            style={{ willChange: "transform" }}
          >
            🌼
          </motion.span>
        </motion.div>
        
        <motion.p
          className="font-display text-lg sm:text-xl text-primary tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Ženska Pijaca
        </motion.p>
        
        <motion.div
          className="mt-5 sm:mt-6 w-40 sm:w-48 h-0.5 bg-sage-light/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
            style={{ willChange: "width" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;