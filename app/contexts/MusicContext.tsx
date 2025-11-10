'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element once
    const audio = new Audio('/sajna.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    setAudioElement(audio);

    // Try to autoplay after a short delay
    const attemptAutoplay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          console.log('Music started automatically');
        })
        .catch(err => {
          console.log('Autoplay prevented, waiting for user interaction:', err);
        });
    };

    const timer = setTimeout(attemptAutoplay, 1000);

    // Play on first user interaction
    const playOnInteraction = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
        setIsPlaying(false);
      } else {
        audioElement.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Audio play failed:', err));
      }
    }
  };

  const playMusic = () => {
    if (audioElement && !isPlaying) {
      audioElement.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Audio play failed:', err));
    }
  };

  const pauseMusic = () => {
    if (audioElement && isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}

