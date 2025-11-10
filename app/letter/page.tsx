'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LetterPage() {
  const [showLetter, setShowLetter] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(() => setShowLetter(true), 1200);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const letterContent = [
    "My Dearest Love,",
    "",
    "On this special day, I want you to know just how much you mean to me. You are the sunshine that brightens my darkest days, the laughter that fills my heart with joy, and the love that makes every moment worth living.",
    "",
    "Every day with you is a gift I treasure. Your smile lights up my world in ways I never knew possible. Your kindness, your warmth, your beautiful soul - they all make me fall in love with you over and over again.",
    "",
    "Thank you for being you. Thank you for sharing your life with me, for every laugh we've shared and every quiet moment we've cherished together.",
    "",
    "Today, on your birthday, I want to remind you that you are loved beyond measure. You deserve all the happiness in the world, and I promise to spend every day trying to give you just that.",
    "",
    "Here's to another year of making beautiful memories together, of growing closer, of laughing until our stomachs hurt, and of loving each other more with each passing day.",
    "",
    "Happy Birthday, my love. You make my world complete.",
    "",
    "Forever yours,",
    "With all my love ❤️ and I love you so much!",
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100" />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-300/40 via-transparent to-rose-200/40" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-float-slower" />
      
      {/* Floating rose petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(20)].map((_, i) => {
          const roses = ['🌹', '🥀', '🌺', '💐', '🏵️'];
          const rose = roses[i % roses.length];
          return (
            <motion.div
              key={`rose-${i}`}
              className="absolute text-3xl md:text-4xl"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(225, 29, 72, 0.4))',
              }}
              initial={{ 
                y: -100, 
                x: Math.random() * windowWidth, 
                rotate: 0,
                opacity: 0.6,
              }}
              animate={{
                y: windowHeight + 100,
                x: Math.random() * windowWidth,
                rotate: 360,
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: Math.random() * 10 + 12,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 8,
              }}
            >
              {rose}
            </motion.div>
          );
        })}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(15)].map((_, i) => {
          const hearts = ['💕', '💖', '💗', '💓', '💝'];
          const heart = hearts[i % hearts.length];
          return (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-2xl md:text-3xl"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.4))',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            >
              {heart}
            </motion.div>
          );
        })}
      </div>

      {/* Sparkles - Only render on client */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-rose-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px 2px rgba(244, 63, 94, 0.6)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Title Section */}
        <motion.div
          className="mb-12 text-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative hearts around title */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, -20, 0], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.5))' }}
            >
              💝
            </motion.span>
            <motion.span
              className="text-5xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.5))' }}
            >
              💌
            </motion.span>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              style={{ filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.5))' }}
            >
              💝
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-9xl font-bold mb-4 relative"
            style={{
              fontFamily: 'var(--font-aphrodite)',
              filter: 'drop-shadow(0 10px 30px rgba(244, 63, 94, 0.4))',
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
                background: 'linear-gradient(90deg, #be123c, #f43f5e, #fb7185, #f43f5e, #be123c)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Letter Just For You
            </motion.span>
          </motion.h1>

          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {['✨', '💖', '✨'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Letter Card */}
        <motion.div
          className="relative bg-white/98 backdrop-blur-xl rounded-3xl p-12 md:p-20 overflow-visible border border-rose-100"
          initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring' }}
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.98), rgba(255,252,250,0.98))',
            boxShadow: '0 40px 80px rgba(244, 63, 94, 0.25), 0 20px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* Premium paper texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] rounded-3xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 3px)',
            }}
          />
          
          {/* Subtle vignette effect */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(244, 63, 94, 0.03) 100%)',
            }}
          />
          
          {/* Inner glow border */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow: 'inset 0 0 60px rgba(244, 63, 94, 0.05)',
            }}
          />

          {/* Elegant corner flourishes */}
          <motion.div
            className="absolute top-8 left-8 text-rose-300/70 text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.5">
              <path d="M 0 0 Q 0 20, 20 20 Q 0 20, 0 40 Q 20 40, 20 20 Q 20 0, 0 0 Z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute top-8 right-8 text-rose-300/70 text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.5">
              <path d="M 40 0 Q 40 20, 20 20 Q 40 20, 40 40 Q 20 40, 20 20 Q 20 0, 40 0 Z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 text-rose-300/70 text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.7, type: 'spring', stiffness: 200 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.5">
              <path d="M 0 40 Q 0 20, 20 20 Q 0 20, 0 0 Q 20 0, 20 20 Q 20 40, 0 40 Z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-rose-300/70 text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.5">
              <path d="M 40 40 Q 40 20, 20 20 Q 40 20, 40 0 Q 20 0, 20 20 Q 20 40, 40 40 Z" />
            </svg>
          </motion.div>
          
          {/* Decorative divider line at top */}
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, type: 'spring' }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200" />
            <div className="w-2 h-2 rounded-full bg-rose-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200" />
          </motion.div>

          {/* Wax seal decoration */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ y: -150, rotate: -30, scale: 0 }}
            animate={{ y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring', bounce: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-8xl md:text-9xl" style={{ filter: 'drop-shadow(0 10px 20px rgba(244, 63, 94, 0.5))' }}>
                💌
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-rose-400/20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

          <div className="mt-12 space-y-6 relative z-10 max-w-3xl mx-auto">
            {showLetter && letterContent.map((line, index) => {
              const isGreeting = index === 0;
              const isSignature = index === letterContent.length - 2 || index === letterContent.length - 1;
              const isSpecial = isGreeting || isSignature;
              const isEmpty = line === '';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ 
                    delay: 1.2 + index * 0.08,
                    type: 'spring',
                    stiffness: 100
                  }}
                >
                  {isGreeting ? (
                    // Opening greeting with extra styling
                    <motion.p
                      className="font-[var(--font-aphrodite)] text-5xl md:text-7xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 4px 15px rgba(244, 63, 94, 0.3)',
                        filter: 'drop-shadow(0 2px 4px rgba(244, 63, 94, 0.2))',
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {line}
                      <motion.span
                        className="inline-block ml-2 text-4xl"
                        animate={{
                          rotate: [0, 20, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        💕
                      </motion.span>
                    </motion.p>
                  ) : isSignature ? (
                    // Signature lines with beautiful calligraphy
                    <motion.div
                      className="text-right mt-8 relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 1.2 + index * 0.08,
                        type: 'spring',
                        stiffness: 100
                      }}
                    >
                      {/* Decorative line before signature */}
                      {index === letterContent.length - 2 && (
                        <motion.div
                          className="flex items-center justify-end gap-3 mb-4"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          transition={{ delay: 1.5, duration: 0.8 }}
                        >
                          <div className="h-px w-24 bg-gradient-to-l from-rose-400 to-transparent" />
                          <motion.span
                            className="text-rose-400 text-2xl"
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          >
                            ✿
                          </motion.span>
                        </motion.div>
                      )}
                      
                      <motion.div
                        className="font-[var(--font-aphrodite)] text-5xl md:text-7xl font-bold inline-block relative"
                        style={{
                          letterSpacing: '0.02em',
                        }}
                        whileHover={{
                          scale: 1.05,
                        }}
                      >
                        <motion.span
                          style={{
                            background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 3px 8px rgba(244, 63, 94, 0.4))',
                          }}
                          animate={{
                            filter: [
                              'drop-shadow(0 3px 8px rgba(244, 63, 94, 0.4))',
                              'drop-shadow(0 4px 12px rgba(244, 63, 94, 0.5))',
                              'drop-shadow(0 3px 8px rgba(244, 63, 94, 0.4))',
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {line}
                        </motion.span>
                        
                        {/* Decorative underline */}
                        <motion.div
                          className="absolute -bottom-2 right-0 h-1 bg-gradient-to-l from-rose-400 via-pink-400 to-transparent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
                        />
                        
                        {/* Heart on last line */}
                        {index === letterContent.length - 1 && (
                          <motion.span
                            className="inline-block ml-3 text-4xl md:text-5xl"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 2,
                              type: 'spring',
                              stiffness: 200
                            }}
                            style={{
                              filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.5))',
                            }}
                          >
                            <motion.span
                              animate={{
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              ❤️
                            </motion.span>
                          </motion.span>
                        )}
                      </motion.div>
                    </motion.div>
                  ) : isEmpty ? (
                    <div className="h-6" />
                  ) : (
                    // Regular paragraph text with enhanced styling
                    <motion.div
                      className="relative"
                      whileHover={{
                        scale: 1.005,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p
                        className="text-xl md:text-2xl leading-loose text-gray-700 font-normal relative z-10 px-2"
                        style={{
                          textAlign: 'justify',
                          letterSpacing: '0.015em',
                          lineHeight: '2',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
                          textIndent: '2.5rem',
                          fontFamily: 'Georgia, "Times New Roman", serif',
                        }}
                      >
                        {/* Decorative quotation mark for first paragraph */}
                        {index === 2 && (
                          <span 
                            className="absolute -left-6 -top-4 text-7xl text-rose-200 font-serif opacity-50"
                            style={{
                              fontFamily: 'Georgia, serif',
                            }}
                          >
                            "
                          </span>
                        )}
                        
                        {/* First letter drop cap styling */}
                        <span 
                          className="float-left text-7xl md:text-8xl font-[var(--font-aphrodite)] font-bold mr-3 mt-1 leading-none"
                          style={{
                            background: 'linear-gradient(135deg, #be123c, #f43f5e, #fb7185)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 3px 6px rgba(244, 63, 94, 0.4))',
                            marginTop: '0.15em',
                          }}
                        >
                          {line.charAt(0)}
                        </span>
                        
                        {/* Rest of the text with subtle emphasis on key words */}
                        <span 
                          dangerouslySetInnerHTML={{
                            __html: line.slice(1)
                              .replace(/\byou\b/gi, '<span style="color: #be123c; font-weight: 500;">you</span>')
                              .replace(/\blove\b/gi, '<span style="color: #be123c; font-weight: 500;">love</span>')
                              .replace(/\bheart\b/gi, '<span style="color: #be123c; font-weight: 500;">heart</span>')
                              .replace(/\bhappy\b/gi, '<span style="color: #be123c; font-weight: 500;">happy</span>')
                              .replace(/\bbirthday\b/gi, '<span style="color: #f59e0b; font-weight: 500;">birthday</span>')
                          }}
                        />
                      </motion.p>
                      
                      {/* Subtle line decoration */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-0 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-0"
                        whileHover={{
                          width: '100%',
                          opacity: 0.5,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Divider with hearts */}
          <motion.div
            className="flex items-center justify-center gap-3 my-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: letterContent.length * 0.08 + 1.5, type: 'spring' }}
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-rose-300" />
            {['💕', '💖', '💕'].map((heart, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{ filter: 'drop-shadow(0 2px 6px rgba(244, 63, 94, 0.4))' }}
              >
                {heart}
              </motion.span>
            ))}
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-rose-300" />
          </motion.div>

          {/* Heart decoration row */}
          <motion.div
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: letterContent.length * 0.08 + 1.8 }}
          >
            {['❤️', '💕', '💖', '💗', '💝', '💓'].map((heart, i) => (
              <motion.span
                key={i}
                className="text-4xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                style={{ filter: 'drop-shadow(0 4px 10px rgba(244, 63, 94, 0.4))' }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>

          {/* Floating kiss marks */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`kiss-${i}`}
              className="absolute text-rose-300/40 text-2xl pointer-events-none"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                delay: 2 + i * 0.3,
                duration: 4,
                repeat: Infinity,
              }}
            >
              💋
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <Link href="/">
            <motion.button
              className="relative px-10 py-5 text-white text-lg md:text-xl font-bold rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f43f5e, #fb7185, #fda4af)',
                boxShadow: '0 10px 30px rgba(244, 63, 94, 0.5)',
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 15px 40px rgba(244, 63, 94, 0.7)',
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
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.span>
                Back to Home
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💝
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


