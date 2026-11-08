import { useState } from "react";

export function Fireworks({ replayKey = 0 }) {
  const [burst, setBurst] = useState(0);
  return <div className="fireworks" key={`${replayKey}-${burst}`} aria-hidden="true">
    {Array.from({ length: 16 }, (_, i) => <span key={i} className={`spark spark-${i % 8}`} style={{ left: `${5 + ((i * 37) % 90)}%`, top: `${8 + ((i * 23) % 72)}%`, animationDelay: `${(i % 6) * 0.35}s` }} />)}
    <button className="firework-retrigger" tabIndex={-1} onClick={() => setBurst((v) => v + 1)} aria-hidden="true" />
  </div>;
}