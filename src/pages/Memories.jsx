import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiX, FiImage } from "react-icons/fi";
import { config } from "../config";

export function Memories() {
  const [selected, setSelected] = useState(null);
  return <section className="content-page">
    <div className="eyebrow"><FiImage size={15} /> Little moments, lovely memories</div>
    <h1>Beautiful Moments Deserve Beautiful Memories.</h1>
    <p className="lead">A little gallery waiting for your favourite pictures. 💗</p>
    <div className="memory-grid">{config.memories.map((photo, i) => <button className="memory-card" key={photo.src} onClick={() => setSelected(photo)}>
      <div className="photo-placeholder"><img src={photo.src} alt={`Memory ${i + 1}`} onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="placeholder-content">📸<small>Add your photo</small></span></div>
      <span>{photo.caption}</span>
    </button>)}</div>
    <p className="hint">Replace photo-1.jpg through photo-6.jpg inside <code>public/images</code> with your own pictures.</p>
    <div className="nav-actions"><Link className="secondary-button" to="/about"><FiArrowLeft size={16} /> Back</Link><Link className="primary-button" to="/letter">Next <FiArrowRight size={17} /></Link></div>
    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="photo-modal" onClick={(e) => e.stopPropagation()}><button className="close-button" onClick={() => setSelected(null)} aria-label="Close"><FiX /></button><div className="modal-photo">🌸</div><h3>{selected.caption}</h3><p>Some moments deserve to stay close to the heart.</p></div></div>}
  </section>;
}