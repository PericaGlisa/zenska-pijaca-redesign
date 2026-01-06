import { motion } from "framer-motion";

const DecorativeBorder = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block" aria-hidden="true">
      {/* Top left corner */}
      <motion.div
        className="absolute top-8 left-8 w-24 md:w-32 h-24 md:h-32 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path
            d="M0 50 Q0 0 50 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
          <path
            d="M0 70 Q0 20 50 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Top right corner */}
      <motion.div
        className="absolute top-8 right-8 w-24 md:w-32 h-24 md:h-32 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary transform scale-x-[-1]">
          <path
            d="M0 50 Q0 0 50 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
          <path
            d="M0 70 Q0 20 50 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Bottom left corner */}
      <motion.div
        className="absolute bottom-8 left-8 w-24 md:w-32 h-24 md:h-32 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary transform scale-y-[-1]">
          <path
            d="M0 50 Q0 0 50 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Bottom right corner */}
      <motion.div
        className="absolute bottom-8 right-8 w-24 md:w-32 h-24 md:h-32 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary transform scale-[-1]">
          <path
            d="M0 50 Q0 0 50 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="0" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Decorative lines */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/4 md:w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/4 md:w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

export default DecorativeBorder;