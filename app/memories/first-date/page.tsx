/** @format */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImageSlideshow from "../components/ImageSlideshow";

const images: string[] = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
];

export default function FirstDatePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 p-4 md:p-8 overflow-hidden">
      {/* Floating hearts */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{
                y: "110vh",
                x: `${Math.random() * 100}%`,
              }}
              animate={{
                y: -100,
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with heart border */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute -inset-8 border-4 border-pink-400 rounded-full opacity-50" />
            <div className="text-8xl mb-4">💕</div>
          </motion.div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-dancing)",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our First Date
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 italic font-medium">
            That magical moment when I realized I wanted every day to be with
            you
          </p>
        </motion.div>

        {/* Scrapbook Style Gallery */}
        {images.length > 0 ? (
          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
                    visible: { opacity: 1, scale: 1, rotate: 0 },
                  }}
                  className="group relative"
                >
                  <motion.div
                    className="relative bg-white p-3 rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
                    whileHover={{
                      scale: 1.03,
                      rotate: index % 2 === 0 ? 2 : -2,
                      zIndex: 50,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    {/* Decorative corner hearts */}
                    <div className="absolute top-2 left-2 text-2xl z-10">
                      💖
                    </div>
                    <div className="absolute bottom-2 right-2 text-2xl z-10">
                      💖
                    </div>

                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={`/memories/first-date/${img}`}
                        alt={`First Date - Photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Decorative washi tape */}
                    <div className="absolute top-0 left-1/4 w-24 h-6 bg-pink-300/40 -rotate-12" />
                    <div className="absolute bottom-0 right-1/4 w-24 h-6 bg-purple-300/40 rotate-12" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-8xl mb-6">💕</div>
            <h3 className="text-3xl font-bold text-purple-600 mb-4">
              No Photos Yet
            </h3>
            <p className="text-xl text-gray-700 mb-4">
              Add your cherished memories to:
            </p>
            <code className="text-lg text-purple-600 bg-purple-50 px-4 py-2 rounded-lg inline-block">
              public/memories/first-date/
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
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
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
          folder="first-date"
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSelectImage={setSelectedImage}
          themeColor="purple"
        />
      )}
    </div>
  );
}
