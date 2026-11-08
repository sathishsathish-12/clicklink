import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { Diya } from "../components/Diya";
import { Fireworks } from "../components/Fireworks";
import { config } from "../config";

export function DiwaliWish() {
  return <section className="content-page wish-page">
    <Fireworks />
    <div className="eyebrow"><FiStar size={15} /> Light, love & laughter</div>
    <h1>{config.greeting}</h1>
    <p className="lead message-width">{config.wish}</p>
    <div className="diya-row"><Diya /><Diya /><Diya /></div>
    <p className="hint">Tap a diya and let your little light shine ✨</p>
    <div className="nav-actions"><Link className="secondary-button" to="/"><FiArrowLeft size={16} /> Back</Link><Link className="primary-button" to="/about">Next <FiArrowRight size={17} /></Link></div>
  </section>;
}