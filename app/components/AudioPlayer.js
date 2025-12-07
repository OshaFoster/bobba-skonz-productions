'use client';

import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDraining, setIsDraining] = useState(false);
  const [drainStart, setDrainStart] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isDraining) {
      // Trigger drain animation after a tiny delay to allow initial render
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsDraining(true);
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center relative">
      <audio ref={audioRef} src={audioSrc} />

      {/* Breathing rings - only visible when playing */}
      {isPlaying && (
        <>
          <div className="absolute w-16 h-16 rounded-full border-2 border-white animate-[breathe_4s_ease-in-out_infinite]"></div>
          <div className="absolute w-16 h-16 rounded-full border-2 border-white/90 animate-[breathe_4s_ease-in-out_infinite_0.5s]"></div>
          <div className="absolute w-16 h-16 rounded-full border-2 border-white/80 animate-[breathe_4s_ease-in-out_infinite_1s]"></div>
        </>
      )}

      <button
        onClick={togglePlay}
        className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden transition-all duration-300 ease-out group z-10"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {/* Fill animation from bottom (for hover and playing) */}
        {!isDraining && (
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-full transition-all duration-500 ease-out ${isPlaying ? 'h-full' : 'h-0 group-hover:h-full'}`}></div>
        )}

        {/* Drain animation from top (for stopping) */}
        {isDraining && (
          <div className={`absolute top-0 left-0 right-0 bg-white rounded-full transition-all duration-500 ease-out ${drainStart ? 'h-0' : 'h-full'}`}></div>
        )}

        {/* Icon */}
        {isPlaying ? (
          <svg className="w-6 h-6 text-black transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white group-hover:text-black ml-1 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
