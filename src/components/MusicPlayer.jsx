
import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaMusic, FaStepForward } from "react-icons/fa";

const songs = [
  {
    title: "Bigil celebration track",
    src: `${import.meta.env.BASE_URL}music/Bigil.mp3`,
  },
  {
    title: "Magale",
    src: `${import.meta.env.BASE_URL}music/Magale.mp3`,
  },
];

function MusicPlayer() {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Play music
  const playMusic = async () => {
    try {
      if (!audioRef.current) return;

      await audioRef.current.play();

      setIsPlaying(true);
      setAutoplayBlocked(false);
    } catch (error) {
      console.log("Music playback blocked:", error);

      setIsPlaying(false);
      setAutoplayBlocked(true);
    }
  };

  // Pause music
  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Play or pause
  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  // Play next song
  const nextSong = () => {
    setCurrentSong((previousSong) => {
      return (previousSong + 1) % songs.length;
    });
  };

  // Attempt autoplay when component opens
  useEffect(() => {
    playMusic();
  }, []);

  // Start playback after changing songs
  useEffect(() => {
    if (currentSong !== 0) {
      playMusic();
    }
  }, [currentSong]);

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src={songs[currentSong].src}
        onEnded={nextSong}
        onPlay={() => {
          setIsPlaying(true);
          setAutoplayBlocked(false);
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          console.error(
            "Cannot load music file:",
            songs[currentSong].src
          );
        }}
        preload="auto"
      />

      <div className="music-info">
        <FaMusic className="music-icon" />

        <span>{songs[currentSong].title}</span>
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="music-control"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button
        type="button"
        onClick={nextSong}
        className="music-control"
        aria-label="Next song"
      >
        <FaStepForward />
      </button>

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
