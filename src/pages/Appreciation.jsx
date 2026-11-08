import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiHeart, FiStar } from "react-icons/fi";
import { config } from "../config";

const compliments = ["Your smile is contagious 🌷", "Your kindness is a superpower 💖", "You make ordinary moments special ✨", "Never forget how wonderful you are 🌸"];

export function Appreciation() {
  const [revealed, setRevealed] = useState([]);
  const [heart, setHeart] = useState(false);
  function reveal(i) { setRevealed((old) => old.includes(i) ? old : [...old, i]); }
  return <section className="content-page">
    <div className="petal petal-one">🌸</div><div className="petal petal-two">🌼</div>
    <div className="eyebrow"><FiStar size={15} /> A few words from the heart</div>
    <h1>{config.appreciationTitle}</h1>
    <div className="text-card"><p>{config.appreciation[0]}</p><p>{config.appreciation[1]}</p></div>
    <h2 className="mini-heading">A few little reminders...</h2>
    <div className="compliment-grid">{compliments.map((item, i) => <button className={`compliment-card ${revealed.includes(i) ? "revealed" : ""}`} key={item} onClick={() => reveal(i)}>{revealed.includes(i) ? item : <>Tap to reveal <span>✧</span></>}</button>)}</div>
    <button className={`heart-button ${heart ? "heart-pop" : ""}`} onClick={() => setHeart((v) => !v)}><FiHeart fill={heart ? "currentColor" : "none"} /> {heart ? "Sending you lots of love!" : "Send a little heart"}</button>
    <div className="nav-actions"><Link className="secondary-button" to="/wish"><FiArrowLeft size={16} /> Back</Link><Link className="primary-button" to="/memories">Next <FiArrowRight size={17} /></Link></div>
  </section>;
}