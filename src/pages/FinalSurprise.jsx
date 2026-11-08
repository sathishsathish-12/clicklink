import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiRefreshCw, FiMessageCircle, FiStar } from "react-icons/fi";
import { config } from "../config";
import { Fireworks } from "../components/Fireworks";
import { Diya } from "../components/Diya";

export function FinalSurprise() {
  const [replay, setReplay] = useState(0);
  return <section className="content-page final-page">
    <Fireworks replayKey={replay} />
    <div className="eyebrow"><FiStar size={15} /> The brightest wishes for you</div>
    <motion.div className="final-diya" animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><Diya large /></motion.div>
    <h1>Happy Diwali Once Again! ❤️</h1>
    <p className="lead">{config.finalLine}</p>
    <div className="confetti-line">✦ ✨ 🎉 ✨ ✦</div>
    <div className="final-actions">
      <button className="primary-button" onClick={() => setReplay((v) => v + 1)}><FiRefreshCw size={17} /> Celebrate Again</button>
      <Link className="secondary-button" to="/letter"><FiMessageCircle size={17} /> Read My Message Again</Link>
      <Link className="secondary-button" to="/"><FiArrowLeft size={17} /> Back to Beginning</Link>
    </div>
    <p className="signature">Made with a little extra sparkle for {config.friendName} ✨</p>
  </section>;
}