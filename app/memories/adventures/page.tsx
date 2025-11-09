'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function AdventuresPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-200 via-cyan-200 to-purple-200 p-4 md:p-8 overflow-hidden">
      {/* Floating elements */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: 0,
              }}
              animate={{
                scale: [0, 1, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 5,
              }}
            >
              {['🌈', '⛰️', '🌊', '🎒'][i % 4]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="text-8xl mb-4"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌈
          </motion.div>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Adventures Together
          </h1>
          <p className="text-2xl md:text-3xl text-blue-700 italic font-medium">
            Every journey with you is an adventure I cherish
          </p>
        </motion.div>

        {/* Adventure Map Style Gallery */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 80 }}
                className="group relative"
              >
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    rotate: index % 2 === 0 ? -2 : 2,
                  }}
                >
                  {/* Adventure stamp */}
                  <div className="absolute top-4 right-4 z-10 w-16 h-16 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-white font-bold border-2 border-white shadow-lg">
                    #{index + 1}
                  </div>

                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={`/memories/adventures/${img}`}
                      alt={`Adventure - Photo ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Pin effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-lg" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-700 rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-8xl mb-6">🌈</div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">No Photos Yet</h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your adventure memories to:
            </p>
            <code className="text-lg text-blue-600 bg-blue-50 px-4 py-2 rounded-lg inline-block">
              public/memories/adventures/
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
              className="px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)' }}
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
          folder="adventures"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="blue"
        />
      )}
    </div>
  );
}

