'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSlideshow from '../components/ImageSlideshow';

const images: string[] = []; // Add your image filenames here

export default function SillyMomentsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 p-4 md:p-8 overflow-hidden">
      {/* Bouncing emojis */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {['😂', '🤪', '😝', '😆', '🤣', '😋'][i % 6]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}
        >
          <motion.div
            className="text-8xl mb-4"
            animate={{ 
              rotate: [0, -15, 15, -15, 0],
              scale: [1, 1.2, 1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎭
          </motion.div>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-dancing)',
              background: 'linear-gradient(135deg, #f59e0b, #ec4899, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Silly Moments
          </h1>
          <p className="text-2xl md:text-3xl text-orange-700 italic font-medium">
            All the times we laughed until our stomachs hurt
          </p>
        </motion.div>

        {/* Comic Strip Style Gallery */}
        {images.length > 0 ? (
          <div className="space-y-6 mb-12">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotate: index % 2 === 0 ? -10 : 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div
                  className="relative max-w-2xl cursor-pointer group"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Comic book border */}
                  <div className="relative bg-white p-2 rounded-2xl shadow-2xl border-4 border-black">
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={`/memories/silly-moments/${img}`}
                        alt={`Silly Moment - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                      />
                    </div>

                    {/* Speech bubble */}
                    <div className={`absolute ${index % 2 === 0 ? '-right-20' : '-left-20'} top-8 bg-white border-4 border-black rounded-full px-6 py-3 font-bold text-black shadow-xl`}>
                      HA HA!
                    </div>

                    {/* Comic dots */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 rounded-full border-4 border-black" />
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-pink-400 rounded-full border-4 border-black" />
                  </div>

                  {/* Caption */}
                  <motion.div 
                    className={`mt-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <p className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Memory #{index + 1}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl border-4 border-black"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
          >
            <div className="text-8xl mb-6">🎭</div>
            <h3 className="text-3xl font-bold text-orange-600 mb-4">No Photos Yet</h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your hilarious memories to:
            </p>
            <code className="text-lg text-orange-600 bg-orange-50 px-4 py-2 rounded-lg inline-block">
              public/memories/silly-moments/
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
              className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl font-bold rounded-full shadow-2xl border-4 border-black"
              whileHover={{ scale: 1.1, rotate: 5 }}
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
          folder="silly-moments"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="orange"
        />
      )}
    </div>
  );
}

