import { motion } from "framer-motion";

export function PageTransition({ children }) {
  return (
    <motion.main className="page"
      initial={{ opacity: 0, y: 22, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.99 }}
      transition={{ duration: 0.42, ease: "easeOut" }}>
      {children}
    </motion.main>
  );
}