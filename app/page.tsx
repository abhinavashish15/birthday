'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Create and setup audio element
    // You can replace 'birthday-music.mp3' with your own music file in the public folder
    const audio = new Audio('/birthday-music.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    setAudioElement(audio);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const handleLetsGo = () => {
    setShowWelcome(false);
    setTimeout(() => setShowContent(true), 300);
    
    // Play music when user clicks
    if (audioElement && !isPlaying) {
      audioElement.play().catch(err => console.log('Audio play failed:', err));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
        setIsPlaying(false);
      } else {
        audioElement.play().catch(err => console.log('Audio play failed:', err));
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-300/50 via-transparent to-pink-300/50" />
      
      {/* Music Control Button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center cursor-pointer"
        style={{
          boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)',
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 15px 40px rgba(236, 72, 153, 0.6)',
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <motion.div
          animate={{
            rotate: isPlaying ? 360 : 0,
          }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: 'linear',
          }}
          className="text-2xl md:text-3xl"
        >
          {isPlaying ? '🎵' : '🔇'}
        </motion.div>
        
        {/* Pulse effect when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full bg-pink-400/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.button>
      
      {/* Glowing orbs in background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-400/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Animated floating elements - Roses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(15)].map((_, i) => {
          const roses = [
            { emoji: '🌹', color: 'rgba(220, 38, 38, 0.8)', shadow: 'rgba(220, 38, 38, 0.6)' }, // Red rose
            { emoji: '🌹', color: 'rgba(236, 72, 153, 0.8)', shadow: 'rgba(236, 72, 153, 0.6)' }, // Pink rose
            { emoji: '🌹', color: 'rgba(251, 207, 232, 0.9)', shadow: 'rgba(251, 207, 232, 0.6)' }, // Light pink rose
            { emoji: '🌹', color: 'rgba(254, 240, 138, 0.9)', shadow: 'rgba(254, 240, 138, 0.6)' }, // Yellow rose
            { emoji: '🌹', color: 'rgba(255, 255, 255, 0.9)', shadow: 'rgba(255, 255, 255, 0.6)' }, // White rose
          ];
          const rose = roses[i % roses.length];
          return (
            <motion.div
              key={`rose-${i}`}
              className="absolute text-3xl md:text-4xl"
              style={{
                filter: `drop-shadow(0 0 12px ${rose.shadow}) drop-shadow(0 4px 8px ${rose.shadow})`,
              }}
              initial={{ 
                y: Math.random() * 500 + 1000, 
                x: Math.random() * (windowWidth || 1000), 
                opacity: 0,
                scale: 0.3,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: -150,
                x: [null, Math.random() * (windowWidth || 1000)],
                opacity: [0, 0.9, 0.9, 0],
                rotate: [null, 360 + Math.random() * 360],
                scale: [0.3, 1.2, 1.2, 0.3],
              }}
              transition={{
                duration: Math.random() * 12 + 15,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 10,
              }}
            >
              {rose.emoji}
            </motion.div>
          );
        })}
      </div>

      {/* Animated floating elements - Tulips */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(15)].map((_, i) => {
          const tulips = [
            { emoji: '🌷', color: 'rgba(236, 72, 153, 0.8)', shadow: 'rgba(236, 72, 153, 0.6)' }, // Pink tulip
            { emoji: '🌷', color: 'rgba(239, 68, 68, 0.8)', shadow: 'rgba(239, 68, 68, 0.6)' }, // Red tulip
            { emoji: '🌷', color: 'rgba(168, 85, 247, 0.8)', shadow: 'rgba(168, 85, 247, 0.6)' }, // Purple tulip
            { emoji: '🌷', color: 'rgba(234, 179, 8, 0.8)', shadow: 'rgba(234, 179, 8, 0.6)' }, // Yellow tulip
            { emoji: '🌷', color: 'rgba(251, 146, 60, 0.8)', shadow: 'rgba(251, 146, 60, 0.6)' }, // Orange tulip
          ];
          const tulip = tulips[i % tulips.length];
          return (
            <motion.div
              key={`tulip-${i}`}
              className="absolute text-3xl md:text-4xl"
              style={{
                filter: `drop-shadow(0 0 12px ${tulip.shadow}) drop-shadow(0 4px 8px ${tulip.shadow})`,
              }}
              initial={{ 
                y: Math.random() * 500 + 1200, 
                x: Math.random() * (windowWidth || 1000), 
                opacity: 0,
                scale: 0.4,
                rotate: Math.random() * -180,
              }}
              animate={{
                y: -120,
                x: [null, Math.random() * (windowWidth || 1000)],
                opacity: [0, 0.85, 0.85, 0],
                rotate: [null, -(360 + Math.random() * 180)],
                scale: [0.4, 1.1, 1.1, 0.4],
              }}
              transition={{
                duration: Math.random() * 10 + 14,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 8,
              }}
            >
              {tulip.emoji}
            </motion.div>
          );
        })}
      </div>

      {/* Additional decorative flowers and hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(20)].map((_, i) => {
          const decorations = ['💕', '💖', '✨', '🌸', '🦋', '🌺', '💝', '💗', '🎊', '⭐'];
          const decoration = decorations[i % decorations.length];
  return (
            <motion.div
              key={`decoration-${i}`}
              className="absolute text-2xl md:text-3xl"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))',
              }}
              initial={{ 
                y: Math.random() * 800 + 1000, 
                x: Math.random() * (windowWidth || 1000), 
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                y: -100,
                x: Math.random() * (windowWidth || 1000),
                opacity: [0, 0.7, 0.7, 0],
                rotate: [0, 360],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 12,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 8,
              }}
            >
              {decoration}
            </motion.div>
          );
        })}
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative z-10 text-center max-w-2xl"
          >
            {/* Main welcome card */}
            <motion.div
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.5), 0 0 0 1px rgba(236, 72, 153, 0.1)',
              }}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 opacity-20 blur-xl animate-pulse-slow" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-300/20 to-transparent rounded-tl-full" />
              
              <div className="relative z-10">
                {/* Decorative hearts at top */}
        <motion.div
                  className="flex justify-center gap-4 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                  <motion.span 
                    className="text-5xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.5))' }}
                  >
                    💖
                  </motion.span>
                  <motion.span 
                    className="text-5xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(234, 179, 8, 0.5))' }}
                  >
                    ✨
                  </motion.span>
                  <motion.span 
                    className="text-5xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [5, -5, 5],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.5))' }}
                  >
                    💖
                  </motion.span>
        </motion.div>

              {/* Birthday title */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 relative"
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #eab308 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(236, 72, 153, 0.3)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #ec4899, #f97316, #eab308, #ec4899)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Happy Birthday,
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-2 relative"
                style={{
                  fontFamily: 'var(--font-dancing)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #f472b6, #8b5cf6)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 4px 10px rgba(139, 92, 246, 0.4))',
                  }}
                >
                  My Love!
                </motion.span>
              </motion.h2>

            <motion.div
                className="text-6xl mb-6"
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: [0, 10, -10, 10, 0], scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                🎉🎂
              </motion.div>

              {/* Message */}
              <motion.p
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
                Hey Beautiful! Ready for your special surprise?
                <br />
              </motion.p>

              {/* Let's Go button */}
              <motion.button
                onClick={handleLetsGo}
                className="group relative px-12 py-5 text-white text-xl md:text-2xl font-bold rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #f472b6, #fb7185)',
                  boxShadow: '0 10px 40px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  boxShadow: [
                    '0 10px 40px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
                    '0 10px 50px rgba(236, 72, 153, 0.8), 0 0 30px rgba(236, 72, 153, 0.6)',
                    '0 10px 40px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
                  ]
                }}
                transition={{ 
                  delay: 1.2, 
                  type: 'spring', 
                  stiffness: 200,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: '0 20px 60px rgba(236, 72, 153, 0.9), 0 0 40px rgba(236, 72, 153, 0.7)',
                }}
                  whileTap={{ scale: 0.95 }}
                >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'linear-gradient(135deg, #ec4899, #f472b6, #fb7185)',
                      'linear-gradient(135deg, #f472b6, #fb7185, #ec4899)',
                      'linear-gradient(135deg, #fb7185, #ec4899, #f472b6)',
                      'linear-gradient(135deg, #ec4899, #f472b6, #fb7185)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Go! 
                  <motion.span
                    animate={{
                      rotate: [0, 20, -20, 20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.button>

              {/* Decorative sparkles */}
              <motion.div
                className="flex justify-center gap-3 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, -20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  💫
                </motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  ⭐
                </motion.span>
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center w-full max-w-6xl px-4"
          >
            {/* Title after clicking Let's Go */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="mb-16 relative"
            >
              {/* Decorative elements around title */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <div className="flex gap-4 text-4xl">
                  <motion.span
                    animate={{ rotate: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⭐
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, -20, 0], y: [0, -15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    💖
                  </motion.span>
                  <motion.span
                    animate={{ rotate: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  >
                    ⭐
                  </motion.span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-8xl font-bold mb-6 relative"
                style={{
                  filter: 'drop-shadow(0 10px 40px rgba(255, 255, 255, 0.5))',
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #ffffff, #fef3c7, #fde047, #fef3c7, #ffffff)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 80px rgba(253, 224, 71, 0.5)',
                  }}
                >
                  Choose Your
                </motion.span>
                <br />
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #fde047, #f59e0b, #fbbf24, #fde047)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'var(--font-dancing)',
                  }}
                >
                  Adventure!
                </motion.span>
                <motion.span
                  className="inline-block ml-3 md:ml-4"
                  animate={{
                    rotate: [0, 20, -20, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))',
                  }}
                >
                  🎁
                </motion.span>
              </motion.h1>
              
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-1 w-16 md:w-24 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.p 
                  className="text-xl md:text-3xl text-white/95 font-semibold px-4"
                  style={{
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Each one is made with love, just for you
                </motion.p>
                <motion.div
                  className="h-1 w-16 md:w-24 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>

              <motion.div
                className="flex justify-center gap-3 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {['✨', '💫', '⭐', '💖', '✨'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl md:text-3xl"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Cards grid */}
            {showContent && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { 
                    href: '/letter', 
                    emoji: '💌', 
                    title: 'Love Letter', 
                    desc: 'Words from my heart to yours', 
                    color: 'from-purple-400 to-pink-400', 
                    shadow: 'rgba(168, 85, 247, 0.4)',
                    bgGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
                    borderGlow: '#a855f7'
                  },
                  { 
                    href: '/memories', 
                    emoji: '📸', 
                    title: 'Memory Lane', 
                    desc: 'Our precious moments together', 
                    color: 'from-pink-400 to-rose-400', 
                    shadow: 'rgba(236, 72, 153, 0.4)',
                    bgGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(251, 113, 133, 0.1))',
                    borderGlow: '#ec4899'
                  },
                  { 
                    href: '/cake', 
                    emoji: '🎂', 
                    title: 'Birthday Cake', 
                    desc: 'Make a wish & blow the candles!', 
                    color: 'from-yellow-400 to-orange-400', 
                    shadow: 'rgba(251, 146, 60, 0.4)',
                    bgGradient: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1), rgba(251, 146, 60, 0.1))',
                    borderGlow: '#fbbf24'
                  },
                  { 
                    href: '/wishes', 
                    emoji: '🎁', 
                    title: 'Birthday Wishes', 
                    desc: 'All my dreams for you', 
                    color: 'from-indigo-400 to-purple-400', 
                    shadow: 'rgba(129, 140, 248, 0.4)',
                    bgGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                    borderGlow: '#818cf8'
                  },
                ].map((item, i) => (
                  <Link href={item.href} key={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 100 }}
                      className="group relative"
                    >
                      <motion.div
                        className="relative bg-white/98 backdrop-blur-xl rounded-3xl p-10 md:p-12 cursor-pointer overflow-hidden border-2 border-white/50"
                        style={{
                          boxShadow: `0 25px 50px ${item.shadow}, 0 0 0 1px ${item.borderGlow}20`,
                          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))`,
                        }}
                        whileHover={{ 
                          y: -20, 
                          scale: 1.05,
                          boxShadow: `0 40px 80px ${item.shadow}, 0 0 40px ${item.shadow}`,
                          borderColor: `${item.borderGlow}80`,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Glowing border on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: item.bgGradient,
                            boxShadow: `inset 0 0 20px ${item.shadow}`,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Animated gradient overlay */}
                        <motion.div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${item.shadow}, transparent 70%)`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.15, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Enhanced shimmer effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(110deg, transparent 40%, ${item.borderGlow}40 50%, transparent 60%)`,
                          }}
                          animate={{
                            x: ['-200%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        
                        {/* Floating particles on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {[...Array(8)].map((_, idx) => (
                            <motion.div
                              key={idx}
                              className="absolute w-1 h-1 rounded-full"
                              style={{
                                background: item.borderGlow,
                                left: `${10 + idx * 12}%`,
                                top: '50%',
                              }}
                              animate={{
                                y: [0, -60, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.15,
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Elegant corner decorations */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-5 rounded-bl-full`} />
                        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${item.color} opacity-5 rounded-tr-full`} />
                        
                        {/* Corner accent lines */}
                        <motion.div
                          className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-0 group-hover:opacity-40"
                          style={{ borderColor: item.borderGlow }}
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-0 group-hover:opacity-40"
                          style={{ borderColor: item.borderGlow }}
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div
                          className="text-7xl md:text-8xl mb-4 relative z-10"
                          style={{
                            filter: `drop-shadow(0 8px 16px ${item.shadow})`,
                          }}
                          whileHover={{ 
                            rotate: 15, 
                            scale: 1.2,
                            y: -10,
                          }}
                          transition={{ 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 300,
                            damping: 15
                          }}
                        >
                          {item.emoji}
                        </motion.div>
                        
                        <motion.h2 
                          className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.span 
                            className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                            style={{
                              filter: `drop-shadow(0 2px 4px ${item.shadow})`,
                            }}
                          >
                            {item.title}
                          </motion.span>
                        </motion.h2>
                        
                        <p className="text-gray-600 text-lg md:text-xl relative z-10 leading-relaxed font-medium">
                          {item.desc}
                        </p>

                        {/* Click indicator */}
                        <motion.div
                          className="mt-6 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 relative z-10"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm font-semibold" style={{ color: item.borderGlow }}>
                            Click to explore
                          </span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>

                        {/* Multiple sparkles on hover */}
                        <motion.div
                          className="absolute top-6 right-6 text-3xl opacity-0 group-hover:opacity-100"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                          }}
                          style={{
                            filter: `drop-shadow(0 0 8px ${item.shadow})`,
                          }}
                        >
                          ✨
                </motion.div>

                <motion.div
                          className="absolute bottom-6 left-6 text-2xl opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.4, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            filter: `drop-shadow(0 0 6px ${item.shadow})`,
                          }}
                        >
                          💫
                </motion.div>

                <motion.div
                          className="absolute top-1/2 left-6 text-xl opacity-0 group-hover:opacity-100"
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        >
                          ⭐
                </motion.div>

                <motion.div
                          className="absolute top-1/2 right-6 text-xl opacity-0 group-hover:opacity-100"
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                          }}
                        >
                          💖
                        </motion.div>
                      </motion.div>
                </motion.div>
              </Link>
                ))}
              </motion.div>
            )}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

