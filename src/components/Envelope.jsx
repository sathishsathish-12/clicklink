import { motion } from "framer-motion";

export function Envelope({ opened, onClick }) {
  return <motion.button className={`envelope ${opened ? "envelope-open" : ""}`} onClick={onClick} whileTap={{ scale: 0.97 }} aria-label="Open your letter">
    <span className="letter-paper">💌</span><span className="envelope-flap" /><span className="envelope-base">✉️</span>
    {!opened && <small>tap to open</small>}
  </motion.button>;
}