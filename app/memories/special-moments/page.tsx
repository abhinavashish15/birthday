'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function SpecialMomentsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 p-4 md:p-8 overflow-hidden">
      {/* Magical sparkles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            >
              <span className="text-3xl">✨</span>
            </motion.div>
          ))}
          {/* Floating hearts */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-4xl opacity-40"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: '110vh',
              }}
              animate={{
                y: -100,
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <motion.div
            className="relative inline-block mb-6"
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.2, 1.2, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-9xl">✨</div>
            {/* Orbiting hearts */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div
                  style={{
                    transform: 'translate(-50%, -50%) translateY(-60px)',
                  }}
                >
                  💝
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              background: 'linear-gradient(135deg, #ec4899, #a855f7, #6366f1, #ec4899)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
                background: 'linear-gradient(135deg, #ec4899, #a855f7, #6366f1, #ec4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Every Moment
            </motion.span>
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 italic font-medium">
            Each second with you is a memory I treasure
          </p>
        </motion.div>

        {/* Magical Masonry Style Gallery */}
        {images.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="break-inside-avoid mb-6 group"
              >
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.03, zIndex: 50 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Magical glowing border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                      <Image
                        src={`/memories/special-moments/${img}`}
                        alt={`Special Moment - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Rainbow shimmer */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-purple-400/20 to-indigo-400/20"
                        animate={{
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Corner sparkles */}
                    <motion.div
                      className="absolute top-2 left-2 text-2xl"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      className="absolute bottom-2 right-2 text-2xl"
                      animate={{ 
                        rotate: [360, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      💫
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            <div className="relative z-10">
              <div className="text-8xl mb-6">✨</div>
              <h3 className="text-3xl font-bold text-purple-600 mb-4">No Photos Yet</h3>
              <p className="text-xl text-gray-700 mb-4">
                Add your special memories to:
              </p>
              <code className="text-lg text-purple-600 bg-purple-50 px-4 py-2 rounded-lg inline-block">
                public/memories/special-moments/
              </code>
            </div>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/memories">
            <motion.button
              className="relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-xl font-bold rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  ←
                </motion.span>
                Back to Memory Lane
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Slideshow Modal */}
      {selectedImage !== null && (
        <ImageSlideshow
          images={images}
          folder="special-moments"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="purple"
        />
      )}
    </div>
  );
}

