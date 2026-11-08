import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MusicPlayer from "./components/MusicPlayer";
import { Navbar } from "./components/Navbar";
import { PageTransition } from "./components/PageTransition";
import { Welcome } from "./pages/Welcome";
import { DiwaliWish } from "./pages/DiwaliWish";
import { Appreciation } from "./pages/Appreciation";
import { Memories } from "./pages/Memories";
import { SpecialLetter } from "./pages/SpecialLetter";
import { FinalSurprise } from "./pages/FinalSurprise";
import "./App.css";

const pagePaths = ["/", "/wish", "/about", "/memories", "/letter", "/final"];

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  const currentPage = Math.max(0, pagePaths.indexOf(location.pathname));

  if (loading) {
    return <div className="loader-screen"><div className="loader-diya">🪔</div><p>Preparing a little magic...</p></div>;
  }

  return (
    <div className="app-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar currentPage={currentPage} />
      <MusicPlayer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Welcome /></PageTransition>} />
          <Route path="/wish" element={<PageTransition><DiwaliWish /></PageTransition>} />
          <Route path="/about" element={<PageTransition><Appreciation /></PageTransition>} />
          <Route path="/memories" element={<PageTransition><Memories /></PageTransition>} />
          <Route path="/letter" element={<PageTransition><SpecialLetter /></PageTransition>} />
          <Route path="/final" element={<PageTransition><FinalSurprise /></PageTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}