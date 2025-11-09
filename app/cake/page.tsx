'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CakePage() {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [allBlown, setAllBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blowCandle = (index: number) => {
    if (candlesLit[index]) {
      const newCandles = [...candlesLit];
      newCandles[index] = false;
      setCandlesLit(newCandles);

      if (newCandles.every((lit) => !lit)) {
        setTimeout(() => {
          setAllBlown(true);
          setShowWish(true);
        }, 500);
      }
    }
  };

  const relightCandles = () => {
    setCandlesLit([true, true, true, true, true]);
    setAllBlown(false);
    setShowWish(false);
  };

  return (
    <div className="min-h-screen relative p-3 md:p-8 flex items-center justify-center overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-pink-300/50 via-purple-300/50 to-yellow-200/50"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating background elements */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl md:text-6xl opacity-10"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {['🎂', '🎉', '🎈', '🎁', '✨'][i % 5]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Confetti effect when all candles are blown */}
      <AnimatePresence>
        {allBlown && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
                  y: typeof window !== 'undefined' ? window.innerHeight / 2 : 500,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  scale: [0, 1.5, 1, 0],
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: 3,
                  ease: 'easeOut',
                  delay: Math.random() * 0.5,
                }}
              >
                <div
                  className="w-3 h-3 md:w-4 md:h-4"
                  style={{
                    backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff69b4'][
                      Math.floor(Math.random() * 8)
                    ],
                    borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        {/* Enhanced Title with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-8 px-2 font-[var(--font-dancing)]"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,105,180,0.3)',
                '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,105,180,0.5)',
                '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,105,180,0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(135deg, #ffffff, #ffe4e1, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
            }}
          >
            Make a Wish! 🎂
          </motion.h1>
        </motion.div>

        {/* Beautiful glass card with gradient border */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Gradient glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border-2 border-white/50 overflow-hidden">
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

            {!allBlown ? (
              <div className="relative z-10">
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-8 px-2"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #f59e0b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Tap each candle to blow it out! 💨
                </motion.p>

              {/* Birthday Cake */}
              <div className="relative inline-block w-full">
                {/* Candles */}
                <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 mb-2 md:mb-4">
                  {candlesLit.map((lit, index) => (
                    <motion.div
                      key={index}
                      className="cursor-pointer touch-manipulation"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => blowCandle(index)}
                    >
                      {/* Candle */}
                      <div className="relative">
                        {/* Flame */}
                        <AnimatePresence>
                          {lit && (
                            <motion.div
                              className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2"
                              initial={{ scale: 1 }}
                              animate={{
                                scale: [1, 1.2, 1],
                                y: [0, -2, 0],
                              }}
                              exit={{ scale: 0, y: -20, opacity: 0 }}
                              transition={{
                                duration: 0.5,
                                repeat: lit ? Infinity : 0,
                              }}
                            >
                              <div className="text-2xl sm:text-3xl md:text-4xl">🔥</div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Candle stick */}
                        <div className={`w-3 h-12 sm:w-4 sm:h-14 md:h-16 rounded-t-full ${lit ? 'bg-pink-400' : 'bg-gray-400'}`}>
                          <div className="w-full h-1 md:h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Cake layers with beautiful gradients */}
                <motion.div
                  className="relative mx-auto max-w-full"
                  animate={{ 
                    rotate: allBlown ? [0, 5, -5, 0] : 0,
                    scale: allBlown ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Top layer - Pink */}
                  <motion.div 
                    className="h-12 sm:h-16 md:h-20 w-[200px] sm:w-64 md:w-80 rounded-t-2xl md:rounded-t-3xl mx-auto shadow-2xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ff6ec4, #ff85d8, #ff6ec4)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Decorative frosting drips */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-4 h-2 bg-white/60 rounded-b-full" />
                      ))}
                    </div>
                  </motion.div>

                  {/* Middle layer - Purple */}
                  <motion.div 
                    className="h-12 sm:h-16 md:h-20 w-[240px] sm:w-80 md:w-96 mx-auto shadow-2xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #c084fc, #a855f7)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    {/* Decorative frosting drips */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-4 h-2 bg-white/60 rounded-b-full" />
                      ))}
                    </div>
                  </motion.div>

                  {/* Bottom layer - Yellow/Gold */}
                  <motion.div 
                    className="h-14 sm:h-20 md:h-24 w-[280px] sm:w-96 md:w-[450px] max-w-[95vw] rounded-b-2xl md:rounded-b-3xl mx-auto shadow-2xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #fcd34d, #fbbf24)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Decorative frosting drips */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-around px-4">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-4 h-3 bg-white/60 rounded-b-full" />
                      ))}
                    </div>
                  </motion.div>

                  {/* Cake sparkles */}
                  {mounted && [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-xl"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              </div>
            ) : (
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}
            >
              {/* Animated celebration emoji */}
              <motion.div 
                className="text-6xl sm:text-7xl md:text-8xl mb-4 md:mb-6"
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                🎉
              </motion.div>

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-[var(--font-dancing)] px-2"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
              >
                Yay! All candles blown! 🎊
              </motion.h2>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 px-2"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your wish will come true! ✨
              </motion.p>

              <motion.button
                onClick={relightCandles}
                className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899, #f59e0b)',
                }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="relative z-10 text-white drop-shadow-lg">
                  🎂 Light Again
                </span>
              </motion.button>
            </motion.div>
          )}
          </div>
        </motion.div>

        <AnimatePresence>
          {showWish && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              {/* Gradient glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl mb-4 md:mb-8 border-2 border-white/50 overflow-hidden">
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

                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-[var(--font-dancing)]"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899, #f43f5e, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    My Wish For You 💝
                  </motion.h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    May this year bring you endless joy, love, and success. May all your dreams come true,
                    and may you always find reasons to smile. You deserve the world and so much more! 💖
                  </p>
                </div>

                {/* Decorative hearts */}
                <div className="absolute top-4 right-4 text-3xl opacity-30">💕</div>
                <div className="absolute bottom-4 left-4 text-3xl opacity-30">💕</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: 'spring' }}
        >
          <Link href="/">
            <motion.button
              className="relative overflow-hidden bg-white/90 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl border-2 border-white/50"
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span 
                className="relative z-10 font-bold"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ← Back to Home
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

