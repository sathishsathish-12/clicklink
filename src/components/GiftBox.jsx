import { motion } from "framer-motion";

export function GiftBox({ opened, onClick }) {
  return <motion.button className={`gift-box ${opened ? "gift-open" : ""}`} onClick={onClick} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} aria-label="Open the surprise gift">
    <span className="gift-lid">🎀</span><span className="gift-body">🎁</span>
    {opened && <motion.span className="gift-pop" initial={{ y: 15, opacity: 0 }} animate={{ y: -55, opacity: 1 }}>✨💖✨</motion.span>}
  </motion.button>;
}