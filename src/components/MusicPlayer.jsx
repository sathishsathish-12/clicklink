
import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaMusic,
  FaStepForward,
} from "react-icons/fa";

const songs = [
  {
    title: "Bigil celebration track",
    src: `${import.meta.env.BASE_URL}music/Bigil.mp3`,
  },
  {
    title: "Magale",
    src: `${import.meta.env.BASE_URL}music/magale.mp3`,
  },
];

function MusicPlayer() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Play music
  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
    } catch (error) {
      console.log("Music playback error:", error);
      setIsPlaying(false);
      setAutoplayBlocked(true);
    }
  };

  // Pause music
  const pauseMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Play or pause music
  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  // Next song
  const nextSong = () => {
    setCurrentSong((previousSong) => {
      return (previousSong + 1) % songs.length;
    });
  };

  // Try autoplay when component loads
  useEffect(() => {
    playMusic();
  }, []);

  // Load and play the selected song
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.load();

    if (isPlaying) {
      playMusic();
    }
  }, [currentSong]);

  // When song finishes, play next song
  const handleSongEnded = () => {
    setCurrentSong((previousSong) => {
      return (previousSong + 1) % songs.length;
    });
  };

  // Audio error
  const handleAudioError = () => {
    setIsPlaying(false);
    console.error("Unable to load song:", songs[currentSong].src);
  };

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src={songs[currentSong].src}
        onEnded={handleSongEnded}
        onPlay={() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        }}
        onPause={() => setIsPlaying(false)}
        onError={handleAudioError}
        preload="auto"
      />

      <div className="music-info">
        <FaMusic className="music-icon" />
        <span>{songs[currentSong].title}</span>
      </div>

      {/* Play / Pause */}
      <button
        type="button"
        onClick={toggleMusic}
        className="music-control"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Next song */}
      <button
        type="button"
        onClick={nextSong}
        className="music-control"
        aria-label="Next song"
      >
        <FaStepForward />
      </button>

      {/* Show button if autoplay is blocked */}
      {autoplayBlocked && !isPlaying && (
        <button
          type="button"
          className="music-start-button"
          onClick={playMusic}
        >
          🪔 Play Diwali Music ❤️
        </button>
      )}

    </div>
  );
}

export default MusicPlayer;
