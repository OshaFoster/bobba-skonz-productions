'use client';

import { useEffect, useState, useRef } from 'react';

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDraining, setIsDraining] = useState(false);
  const [drainStart, setDrainStart] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isDraining) {
      const startTimer = setTimeout(() => setDrainStart(true), 10);
      const endTimer = setTimeout(() => {
        setIsDraining(false);
        setDrainStart(false);
      }, 510);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [isDraining]);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsDraining(true);
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="group relative w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/50 flex items-center justify-center overflow-hidden transition-all"
      >
        {/* Fill animation - from bottom */}
        {!isDraining && (
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-full transition-all duration-500 ease-out ${
              isPlaying ? 'h-full' : 'h-0 group-hover:h-full'
            }`}
          ></div>
        )}

        {/* Drain animation - from top */}
        {isDraining && (
          <div
            className={`absolute top-0 left-0 right-0 bg-white rounded-full transition-all duration-500 ease-out ${
              drainStart ? 'h-0' : 'h-full'
            }`}
          ></div>
        )}

        {/* Play/Pause Icon */}
        <svg
          className={`relative z-10 w-6 h-6 transition-colors duration-300 ${
            isPlaying ? 'text-black' : 'text-white'
          } ${!isPlaying ? 'ml-0.5' : ''}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {isPlaying ? (
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          ) : (
            <path d="M8 5v14l11-7z"/>
          )}
        </svg>
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/audio/LANDR-warps mixed2-Balanced-Medium-REV_V2.m4a" />
    </>
  );
}
