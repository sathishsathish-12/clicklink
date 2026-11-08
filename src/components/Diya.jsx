import { useState } from "react";

export function Diya({ large = false }) {
  const [lit, setLit] = useState(false);
  return <button className={`diya-button ${large ? "diya-large" : ""} ${lit ? "is-lit" : ""}`} onClick={() => setLit((v) => !v)} aria-label={lit ? "Turn diya off" : "Light the diya"}>
    <span className="flame">🔥</span><span className="diya-bowl">🪔</span><small>{lit ? "glowing!" : "tap to light"}</small>
  </button>;
}