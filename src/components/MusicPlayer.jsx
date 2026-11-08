import { useEffect, useRef, useState } from "react";
import { FiMusic, FiVolume2, FiVolumeX, FiPlay, FiPause, FiSkipForward } from "react-icons/fi";
import { config } from "../config";

export function MusicPlayer() {
  const audioRef = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.load();
  }, [songIndex]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else {
      try { await audio.play(); setPlaying(true); }
      catch { setPlaying(false); }
    }
  }

  function nextSong() {
    setSongIndex((old) => (old + 1) % config.songs.length);
    setPlaying(false);
  }

  return (
    <div className="music-control">
      <audio preload="none" ref={audioRef} src={config.songs[songIndex].src} loop onEnded={() => setPlaying(false)} />
      <span className="song-name"><FiMusic size={14} /> {config.songs[songIndex].title}</span>
      <button aria-label={playing ? "Pause music" : "Play music"} onClick={togglePlay}>{playing ? <FiPause size={16} /> : <FiPlay size={16} />}</button>
      <button aria-label="Next song" onClick={nextSong}><FiSkipForward size={16} /></button>
      <button aria-label={muted ? "Unmute" : "Mute"} onClick={() => { const next = !muted; setMuted(next); if (audioRef.current) audioRef.current.muted = next; }}>
        {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
      </button>
    </div>
  );
}