'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Memory {
  id: number;
  emoji: string;
  title: string;
  description: string;
  color: string;
  folder: string;
  route: string;
}

const memories: Memory[] = [
  {
    id: 1,
    emoji: '🌟',
    title: 'The First Meeting',
    description: 'When our eyes first met, I knew something special was beginning',
    color: 'from-pink-400 to-rose-500',
    folder: 'first-meeting',
    route: '/memories/first-meeting',
  },
  {
    id: 2,
    emoji: '💕',
    title: 'First Date',
    description: 'That magical moment when I realized I wanted every day to be with you',
    color: 'from-purple-400 to-pink-500',
    folder: 'first-date',
    route: '/memories/first-date',
  },
  // {
  //   id: 3,
  //   emoji: '🌈',
  //   title: 'Adventures Together',
  //   description: 'Every journey with you is an adventure I cherish',
  //   color: 'from-blue-400 to-purple-500',
  //   folder: 'adventures',
  //   route: '/memories/adventures',
  // },
  // {
  //   id: 4,
  //   emoji: '🎭',
  //   title: 'Silly Moments',
  //   description: 'All the times we laughed until our stomachs hurt',
  //   color: 'from-yellow-400 to-orange-500',
  //   folder: 'silly-moments',
  //   route: '/memories/silly-moments',
  // },
  {
    id: 5,
    emoji: '🌙',
    title: 'Late Night Talks',
    description: 'Those deep conversations that lasted until sunrise',
    color: 'from-indigo-400 to-blue-500',
    folder: 'late-night',
    route: '/memories/late-night',
  },
  {
    id: 6,
    emoji: '🎵',
    title: 'Our Song',
    description: 'Every time I hear it, I think of you',
    color: 'from-green-400 to-teal-500',
    folder: 'our-song',
    route: '/memories/our-song',
  },
  // {
  //   id: 7,
  //   emoji: '☕',
  //   title: 'Cozy Mornings',
  //   description: 'Coffee tastes better when I\'m with you',
  //   color: 'from-amber-400 to-orange-500',
  //   folder: 'cozy-mornings',
  //   route: '/memories/cozy-mornings',
  // },
  // {
  //   id: 8,
  //   emoji: '✨',
  //   title: 'Every Moment',
  //   description: 'Each second with you is a memory I treasure',
  //   color: 'from-pink-400 to-purple-500',
  //   folder: 'special-moments',
  //   route: '/memories/special-moments',
  // },
];

export default function MemoriesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-rose-200 via-pink-200 to-purple-300 p-4 md:p-8 overflow-hidden">
      {/* Animated background hearts */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              initial={{ y: -100, x: `${Math.random() * 100}%` }}
              animate={{
                y: '110vh',
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            >
              {['💕', '💖', '💗', '💝'][i % 4]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-dancing)',
              filter: 'drop-shadow(0 10px 30px rgba(236, 72, 153, 0.4))',
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
                background: 'linear-gradient(90deg, #ffffff, #fde68a, #fbbf24, #ffffff)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Memory Lane
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-white/95 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Every moment with you is precious 
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="group relative"
            >
              <Link href={memory.route}>
                <motion.div
                  className={`relative bg-gradient-to-br ${memory.color} rounded-3xl p-8 shadow-2xl cursor-pointer overflow-hidden`}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  }}
                >

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <motion.div 
                  className="text-7xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {memory.emoji}
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
                  {memory.title}
                </h3>
                
                <p className="text-white/95 text-lg leading-relaxed relative z-10 mb-4">
                  {memory.description}
                </p>

                {/* View Gallery indicator */}
                <motion.div
                  className="flex items-center gap-2 text-white/90 font-medium relative z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                >
                  <span>View Gallery</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link href="/">
            <motion.button
              className="relative px-10 py-5 bg-white text-purple-600 text-lg md:text-xl font-bold rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  ←
                </motion.span>
                Back to Home
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

