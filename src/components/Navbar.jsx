import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const labels = ["Welcome", "Diwali Wish", "About You", "Memories", "A Letter", "Finale"];
const paths = ["/", "/wish", "/about", "/memories", "/letter", "/final"];

export function Navbar({ currentPage }) {
  return (
    <header className="topbar">
      <Link className="brand" to="/"><span>🪔</span> For Priyadharini</Link>
      <div className="progress-wrap">
        <div className="progress-track"><span style={{ width: `${((currentPage + 1) / 6) * 100}%` }} /></div>
        <small>{currentPage + 1} / 6 · {labels[currentPage]}</small>
      </div>
      <FiHeart className="top-heart" size={19} fill="currentColor" />
      <nav className="sr-only" aria-label="Page navigation">
        {paths.map((path, i) => <Link key={path} to={path}>{labels[i]}</Link>)}
      </nav>
    </header>
  );
}