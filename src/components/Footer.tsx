import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-20 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="flex flex-col items-center gap-1.5 sm:gap-2">
        {/* Decorative element */}
        <div className="flex items-center gap-2 text-sage-light/60" aria-hidden="true">
          <span className="w-6 sm:w-8 h-px bg-sage-light/40" />
          <span className="text-xs">✿</span>
          <span className="w-6 sm:w-8 h-px bg-sage-light/40" />
        </div>
        
        {/* Copyright */}
        <p className="font-body text-[10px] sm:text-xs text-muted-foreground/70 tracking-wider">
          © {currentYear} Ženska Pijaca. Sva prava zadržana.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;