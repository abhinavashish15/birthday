'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];

export default function FirstMeetingPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4 md:p-8 overflow-hidden">
      {/* Floating sparkles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ 
                y: -50, 
                x: `${Math.random() * 100}%`,
                opacity: 0 
              }}
              animate={{
                y: '110vh',
                opacity: [0, 1, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-7xl mb-4"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-pink-600"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            The First Meeting
          </h1>
          <p className="text-2xl md:text-3xl text-rose-700 italic">
            When our eyes first met, I knew something special was beginning
          </p>
        </motion.div>

        {/* Polaroid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: [0, 3, -3, 2, -2, 0][index % 6]
              }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
            >
              <motion.div
                className="relative bg-white p-4 pb-16 shadow-2xl cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 50,
                  y: -10,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                style={{
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Polaroid photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={`/memories/first-meeting/${img}`}
                    alt={`First Meeting - Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Polaroid caption */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <p className="text-gray-700 text-lg" style={{ fontFamily: 'Courier New' }}>
                    Memory #{index + 1}
                  </p>
                </motion.div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-8 bg-yellow-50/70 rotate-1 shadow-md" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add memory prompt */}
        {images.length === 0 && (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-8xl mb-6">🌟</div>
            <h3 className="text-3xl font-bold text-pink-600 mb-4">No Photos Yet</h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your special memories to:
            </p>
            <code className="text-lg text-pink-600 bg-pink-50 px-4 py-2 rounded-lg inline-block">
              public/memories/first-meeting/
            </code>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/memories">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(236, 72, 153, 0.4)' }}
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
          folder="first-meeting"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="pink"
        />
      )}
    </div>
  );
}

