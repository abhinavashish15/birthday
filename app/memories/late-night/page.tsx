'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function LateNightPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4 md:p-8 overflow-hidden">
      {/* Twinkling stars */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            />
          ))}
          {/* Floating moons */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`moon-${i}`}
              className="absolute text-4xl opacity-20"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              🌙
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-8xl mb-4"
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🌙
          </motion.div>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-blue-200"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              textShadow: '0 0 20px rgba(147, 197, 253, 0.5)',
            }}
          >
            Late Night Talks
          </h1>
          <p className="text-2xl md:text-3xl text-indigo-200 italic font-medium">
            Those deep conversations that lasted until sunrise
          </p>
        </motion.div>

        {/* Dreamy Gallery */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <motion.div
                  className="relative cursor-pointer overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.03, zIndex: 50 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Glowing border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500" />
                  
                  <div className="relative bg-indigo-900 p-2 rounded-3xl">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={`/memories/late-night/${img}`}
                        alt={`Late Night - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Dreamy overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                    </div>
                  </div>

                  {/* Floating stars decoration */}
                  <motion.div
                    className="absolute top-4 right-4 text-3xl"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="bg-indigo-800/40 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl border border-blue-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-8xl mb-6">🌙</div>
            <h3 className="text-3xl font-bold text-blue-200 mb-4">No Photos Yet</h3>
            <p className="text-xl text-indigo-200 mb-4">
              Add your midnight memories to:
            </p>
            <code className="text-lg text-blue-300 bg-indigo-900/50 px-4 py-2 rounded-lg inline-block">
              public/memories/late-night/
            </code>
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
              className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
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
          folder="late-night"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="indigo"
        />
      )}
    </div>
  );
}

