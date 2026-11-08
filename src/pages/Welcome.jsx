import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { config } from "../config";
import { GiftBox } from "../components/GiftBox";
import { Fireworks } from "../components/Fireworks";

export function Welcome() {
  const [opened, setOpened] = useState(false);
  return <section className="hero-page">
    <Fireworks />
    <div className="eyebrow"><FiStar size={15} /> A tiny gift, made with love</div>
    <motion.div className="hero-emoji" animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.div>
    <h1>{config.welcomeTitle}</h1>
    <p className="lead">{config.welcomeText}</p>
    <p className="soft-copy">Are you ready to open your Diwali gift?</p>
    <GiftBox opened={opened} onClick={() => setOpened(true)} />
    {opened && <motion.p className="reveal-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>A little happiness is waiting for you, {config.friendName}! 💗</motion.p>}
    <Link className="primary-button" to="/wish">Start My Surprise <FiArrowRight size={17} /></Link>
    <div className="floating-hearts" aria-hidden="true">♡　✦　♡　✧　♡</div>
  </section>;
}