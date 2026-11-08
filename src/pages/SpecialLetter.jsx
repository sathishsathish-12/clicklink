import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { Envelope } from "../components/Envelope";
import { config } from "../config";

export function SpecialLetter() {
  const [opened, setOpened] = useState(false);
  return <section className="content-page letter-page">
    <div className="eyebrow"><FiStar size={15} /> A message just for you</div>
    <h1>Someone Has a Little Message for You...</h1>
    {!opened ? <><Envelope opened={opened} onClick={() => setOpened(true)} /><p className="hint">A tiny note is tucked inside 💌</p></> :
      <motion.article className="letter-card" initial={{ opacity: 0, y: 28, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <div className="letter-sparkles">♡ ✨ ♡</div><p>{config.letter}</p><div className="letter-sign">With warm wishes, ❤️</div>
      </motion.article>}
    <div className="nav-actions"><Link className="secondary-button" to="/memories"><FiArrowLeft size={16} /> Back</Link><Link className="primary-button" to="/final">One Last Surprise <FiArrowRight size={17} /></Link></div>
  </section>;
}