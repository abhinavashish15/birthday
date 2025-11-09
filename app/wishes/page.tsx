'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const wishes = [
  {
    id: 1,
    icon: '🌟',
    wish: 'May your dreams shine brighter than the stars',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    icon: '💖',
    wish: 'May you always be surrounded by love and happiness',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 3,
    icon: '🌈',
    wish: 'May every day bring you new reasons to smile',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    icon: '✨',
    wish: 'May you sparkle and shine in everything you do',
    color: 'from-blue-400 to-purple-500',
  },
  {
    id: 5,
    icon: '🎯',
    wish: 'May you achieve all your goals and beyond',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 6,
    icon: '🌸',
    wish: 'May you bloom beautifully in every season of life',
    color: 'from-pink-300 to-purple-400',
  },
  {
    id: 7,
    icon: '🎨',
    wish: 'May you paint your life with vibrant colors',
    color: 'from-red-400 to-pink-500',
  },
  {
    id: 8,
    icon: '🦋',
    wish: 'May you transform and grow into your best self',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    id: 9,
    icon: '🌺',
    wish: 'May you always find beauty in the little things',
    color: 'from-orange-400 to-pink-500',
  },
  {
    id: 10,
    icon: '💫',
    wish: 'May your light continue to inspire everyone around you',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 11,
    icon: '🎵',
    wish: 'May your life be filled with beautiful melodies',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 12,
    icon: '🌙',
    wish: 'May you always have peaceful nights and hopeful mornings',
    color: 'from-indigo-500 to-purple-600',
  },
];

export default function WishesPage() {
  const [revealedWishes, setRevealedWishes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const revealWish = (id: number) => {
    if (!revealedWishes.includes(id)) {
      setRevealedWishes([...revealedWishes, id]);
    }
  };

  const revealAll = () => {
    setRevealedWishes(wishes.map((w) => w.id));
  };

  return (
    <div className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-400/50 via-purple-500/50 to-pink-400/50"
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
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`emoji-${i}`}
              className="absolute text-4xl md:text-5xl opacity-20"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {['🎁', '🎉', '🎈', '🎊', '✨'][i % 5]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Enhanced sparkles animation */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute text-2xl md:text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced title section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 font-[var(--font-dancing)] px-2"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(168,85,247,0.3)',
                '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(168,85,247,0.5)',
                '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(168,85,247,0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(135deg, #ffffff, #fde68a, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Birthday Wishes 🎁
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-6 font-semibold px-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #fce7f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Click on each gift to reveal a special wish! 🎉
          </motion.p>

          <motion.button
            onClick={revealAll}
            className="relative overflow-hidden bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/50"
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255,255,255,0.6)' }}
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
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              🎁 Reveal All Wishes
            </span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {wishes.map((wish, index) => {
            const isRevealed = revealedWishes.includes(wish.id);

            return (
              <motion.div
                key={wish.id}
                className="relative group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  type: 'spring',
                  bounce: 0.4,
                }}
              >
                {/* Gradient glow border */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${wish.color} rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />

                <motion.div
                  className="relative overflow-hidden rounded-3xl p-6 shadow-2xl cursor-pointer h-56 md:h-64 flex flex-col items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                  className={`relative overflow-hidden bg-gradient-to-br ${wish.color} rounded-3xl p-6 shadow-2xl cursor-pointer h-56 md:h-64 flex flex-col items-center justify-center border-2 border-white/30`}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: isRevealed ? 0 : 3,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => revealWish(wish.id)}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: isRevealed ? ['-200%', '200%'] : '-200%',
                    }}
                    transition={{
                      duration: 2,
                      repeat: isRevealed ? Infinity : 0,
                      ease: 'linear',
                    }}
                  />

                  {/* Sparkles for unrevealed gifts */}
                  {!isRevealed && mounted && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-xl"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 3) * 30}%`,
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
                    </>
                  )}

                  <AnimatePresence mode="wait">
                    {!isRevealed ? (
                      <motion.div
                        key="gift"
                        className="text-center relative z-10"
                        initial={{ scale: 1 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-7xl md:text-8xl mb-3"
                          animate={{
                            rotate: [-5, 5, -5],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          🎁
                        </motion.div>
                        <motion.p 
                          className="text-white font-bold text-lg drop-shadow-lg"
                          animate={{
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          Click to open!
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="wish"
                        className="text-center relative z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', bounce: 0.6, duration: 0.6 }}
                      >
                        <motion.div 
                          className="text-6xl md:text-7xl mb-4"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          {wish.icon}
                        </motion.div>
                        <p className="text-white font-bold text-base md:text-lg leading-relaxed drop-shadow-lg px-2">
                          {wish.wish}
                        </p>

                        {/* Floating hearts around revealed wish */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-2xl"
                            style={{
                              left: i % 2 === 0 ? '10%' : '90%',
                              top: i < 2 ? '10%' : '90%',
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 0.6, 0],
                              y: [0, -20, -40],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          >
                            💖
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {revealedWishes.length === wishes.length && (
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
            >
              {/* Gradient glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-3xl blur-xl opacity-60" />

              <div className="relative bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl text-center border-2 border-white/50 overflow-hidden">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
                  {/* Animated celebration emoji */}
                  <motion.div 
                    className="text-7xl md:text-8xl mb-6"
                    animate={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    🎊
                  </motion.div>

                  <motion.h2 
                    className="text-3xl md:text-5xl font-bold mb-6 font-[var(--font-dancing)]"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    You've opened all the wishes!
                  </motion.h2>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
                    Each of these wishes comes from my heart. You deserve all the happiness, love, and
                    success in the world. Thank you for being the amazing person you are. Here's to the
                    best year yet! 💖✨
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 text-4xl opacity-20">💝</div>
                  <div className="absolute top-8 right-8 text-4xl opacity-20">🎉</div>
                  <div className="absolute bottom-8 left-8 text-4xl opacity-20">✨</div>
                  <div className="absolute bottom-8 right-8 text-4xl opacity-20">🎈</div>
                </div>

                {/* Floating confetti */}
                {mounted && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: '50%',
                    }}
                    animate={{
                      y: [0, -100, -200],
                      rotate: [0, 360],
                      opacity: [1, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {['🎊', '🎉', '✨', '💖'][i % 4]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Link href="/">
            <motion.button
              className="relative overflow-hidden bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg shadow-2xl border-2 border-white/50"
              whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255,255,255,0.6)' }}
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
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
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

