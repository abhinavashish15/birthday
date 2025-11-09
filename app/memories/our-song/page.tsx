'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function OurSongPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-green-200 via-teal-200 to-cyan-200 p-4 md:p-8 overflow-hidden">
      {/* Musical notes floating */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ 
                y: '110vh',
                x: `${Math.random() * 100}%`,
              }}
              animate={{
                y: -100,
                rotate: [0, 360],
                x: `${Math.random() * 100}%`,
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            >
              {['🎵', '🎶', '🎼', '🎹'][i % 4]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with vinyl record effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="relative inline-block mb-6"
            animate={{ 
              rotate: 360,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            {/* Vinyl record */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-black shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-500" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-5xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              🎵
            </motion.div>
          </motion.div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              background: 'linear-gradient(135deg, #10b981, #06b6d4, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Song
          </h1>
          <p className="text-2xl md:text-3xl text-teal-700 italic font-medium">
            Every time I hear it, I think of you
          </p>
        </motion.div>

        {/* Music Album Style Gallery */}
        {images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  type: 'spring',
                  stiffness: 200,
                }}
                className="group"
              >
                <motion.div
                  className="relative aspect-square cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 5, zIndex: 50 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Album cover effect */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-400 to-teal-500 p-3">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={`/memories/our-song/${img}`}
                        alt={`Our Song - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Vinyl shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                  </div>

                  {/* Track number */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {index + 1}
                  </motion.div>
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
            <div className="text-8xl mb-6">🎵</div>
            <h3 className="text-3xl font-bold text-teal-600 mb-4">No Photos Yet</h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your musical memories to:
            </p>
            <code className="text-lg text-teal-600 bg-teal-50 px-4 py-2 rounded-lg inline-block">
              public/memories/our-song/
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
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(20, 184, 166, 0.4)' }}
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
          folder="our-song"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="green"
        />
      )}
    </div>
  );
}

