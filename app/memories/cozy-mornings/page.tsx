'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function CozyMorningsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-4 md:p-8 overflow-hidden">
      {/* Rising steam/sun rays */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 bg-gradient-to-t from-amber-300/40 to-transparent"
              style={{
                left: `${i * 10 + 5}%`,
                height: '100%',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
          {/* Floating coffee cups */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`coffee-${i}`}
              className="absolute text-4xl opacity-30"
              initial={{ 
                y: '110vh',
                x: `${Math.random() * 100}%`,
              }}
              animate={{
                y: -100,
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            >
              ☕
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative inline-block mb-6"
          >
            {/* Coffee cup with steam */}
            <motion.div
              className="text-8xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ☕
            </motion.div>
            {/* Steam */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl"
              animate={{ 
                y: [-10, -30],
                opacity: [0.8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💨
            </motion.div>
          </motion.div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              background: 'linear-gradient(135deg, #f59e0b, #d97706, #92400e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Cozy Mornings
          </h1>
          <p className="text-2xl md:text-3xl text-amber-800 italic font-medium">
            Coffee tastes better when I'm with you
          </p>
        </motion.div>

        {/* Warm Breakfast Table Style Gallery */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                className="group"
              >
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Wooden frame effect */}
                  <div className="relative bg-gradient-to-br from-amber-700 to-amber-900 p-4 rounded-3xl shadow-2xl">
                    <div className="relative bg-gradient-to-br from-amber-600 to-orange-700 p-1 rounded-2xl">
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={`/memories/cozy-mornings/${img}`}
                          alt={`Cozy Morning - Photo ${index + 1}`}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        {/* Warm overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20" />
                      </div>
                    </div>

                    {/* Coffee stain decoration */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-16 h-16 bg-amber-800/40 rounded-full blur-sm"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                  </div>

                  {/* Hanging tag */}
                  <motion.div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-200 px-4 py-2 rounded-full shadow-lg"
                    initial={{ y: 0 }}
                    whileHover={{ y: 5 }}
                  >
                    <p className="text-sm font-bold text-amber-900">Morning #{index + 1}</p>
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
            <div className="text-8xl mb-6">☕</div>
            <h3 className="text-3xl font-bold text-amber-700 mb-4">No Photos Yet</h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your cozy memories to:
            </p>
            <code className="text-lg text-amber-700 bg-amber-50 px-4 py-2 rounded-lg inline-block">
              public/memories/cozy-mornings/
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
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(245, 158, 11, 0.4)' }}
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
          folder="cozy-mornings"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="amber"
        />
      )}
    </div>
  );
}

