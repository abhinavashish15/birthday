'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageSlideshowProps {
  images: string[];
  folder: string;
  selectedImage: number;
  onClose: () => void;
  onSelectImage: (index: number) => void;
  themeColor?: string;
}

export default function ImageSlideshow({
  images,
  folder,
  selectedImage,
  onClose,
  onSelectImage,
  themeColor = 'pink',
}: ImageSlideshowProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Slideshow effect
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      onSelectImage((selectedImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [isPlaying, selectedImage, images.length, onSelectImage]);

  const colorClasses = {
    pink: {
      button: 'bg-pink-500/90 hover:bg-pink-600',
      ring: 'ring-pink-400',
      indicator: 'bg-pink-500',
    },
    purple: {
      button: 'bg-purple-500/90 hover:bg-purple-600',
      ring: 'ring-purple-400',
      indicator: 'bg-purple-500',
    },
    blue: {
      button: 'bg-blue-500/90 hover:bg-blue-600',
      ring: 'ring-blue-400',
      indicator: 'bg-blue-500',
    },
    orange: {
      button: 'bg-orange-500/90 hover:bg-orange-600',
      ring: 'ring-orange-400',
      indicator: 'bg-orange-500',
    },
    indigo: {
      button: 'bg-indigo-500/90 hover:bg-indigo-600',
      ring: 'ring-indigo-400',
      indicator: 'bg-indigo-500',
    },
    green: {
      button: 'bg-green-500/90 hover:bg-green-600',
      ring: 'ring-green-400',
      indicator: 'bg-green-500',
    },
    amber: {
      button: 'bg-amber-500/90 hover:bg-amber-600',
      ring: 'ring-amber-400',
      indicator: 'bg-amber-500',
    },
  };

  const colors = colorClasses[themeColor as keyof typeof colorClasses] || colorClasses.pink;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          setIsPlaying(false);
        }
      }}
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.98) 100%)',
      }}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: `radial-gradient(circle, ${
              themeColor === 'pink' ? '#ec4899' :
              themeColor === 'purple' ? '#a855f7' :
              themeColor === 'blue' ? '#3b82f6' :
              themeColor === 'orange' ? '#f97316' :
              themeColor === 'indigo' ? '#6366f1' :
              themeColor === 'green' ? '#10b981' :
              themeColor === 'amber' ? '#f59e0b' : '#ec4899'
            } 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Header with controls */}
      <div className="absolute top-3 md:top-6 left-0 right-0 flex items-center justify-between px-3 md:px-8 z-50">
        <motion.div
          className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl px-3 md:px-6 py-2 md:py-3 rounded-full shadow-2xl border border-white/20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg md:text-2xl">📸</span>
          <span className="text-white font-bold text-sm md:text-lg">
            {selectedImage + 1} / {images.length}
          </span>
        </motion.div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Slideshow toggle */}
          {images.length > 1 && (
            <motion.button
              className={`${colors.button} backdrop-blur-xl px-3 md:px-8 py-2 md:py-4 rounded-full text-white font-bold text-sm md:text-lg flex items-center gap-1.5 md:gap-3 shadow-2xl border-2 border-white/30`}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
              animate={isPlaying ? {
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 40px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)',
                ],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="text-lg md:text-2xl"
                animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {isPlaying ? '⏸' : '▶'}
              </motion.span>
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play Slideshow'}</span>
              <span className="sm:hidden">{isPlaying ? 'Pause' : 'Play'}</span>
            </motion.button>
          )}

          {/* Close button */}
          <motion.button
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-500/90 to-pink-500/90 backdrop-blur-xl flex items-center justify-center text-white text-2xl md:text-3xl shadow-2xl border-2 border-white/30"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              onClose();
              setIsPlaying(false);
            }}
          >
            ×
          </motion.button>
        </div>
      </div>

      {/* Main Image with beautiful frame */}
      <motion.div
        className="relative w-full max-w-6xl h-[50vh] md:h-[60vh] mb-6 md:mb-8"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        key={selectedImage}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Decorative frame with gradient border */}
        <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-br ${
          themeColor === 'pink' ? 'from-pink-400 via-rose-400 to-red-400' :
          themeColor === 'purple' ? 'from-purple-400 via-pink-400 to-purple-400' :
          themeColor === 'blue' ? 'from-blue-400 via-cyan-400 to-blue-400' :
          themeColor === 'orange' ? 'from-orange-400 via-yellow-400 to-orange-400' :
          themeColor === 'indigo' ? 'from-indigo-400 via-purple-400 to-indigo-400' :
          themeColor === 'green' ? 'from-green-400 via-teal-400 to-green-400' :
          themeColor === 'amber' ? 'from-amber-400 via-orange-400 to-amber-400' :
          'from-pink-400 via-rose-400 to-red-400'
        } rounded-3xl opacity-30 blur-2xl`} />
        
        {/* Main frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl border-2 border-white/20 overflow-hidden">
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/20">
            <Image
              src={`/memories/${folder}/${images[selectedImage]}`}
              alt={`Photo ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 md:top-2 md:left-2 w-4 h-4 md:w-8 md:h-8 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
          <div className="absolute top-1 right-1 md:top-2 md:right-2 w-4 h-4 md:w-8 md:h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
          <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 w-4 h-4 md:w-8 md:h-8 border-b-2 border-l-2 border-white/40 rounded-bl-lg" />
          <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-4 h-4 md:w-8 md:h-8 border-b-2 border-r-2 border-white/40 rounded-br-lg" />
        </div>
      </motion.div>

      {/* Navigation arrows with beautiful styling */}
      {images.length > 1 && (
        <>
          <motion.button
            className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full ${colors.button} backdrop-blur-xl flex items-center justify-center text-white text-3xl md:text-5xl shadow-2xl border-2 border-white/30 group`}
            whileHover={{ scale: 1.15, x: -8 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectImage((selectedImage - 1 + images.length) % images.length);
            }}
          >
            <motion.span
              className="group-hover:-translate-x-1 transition-transform"
            >
              ‹
            </motion.span>
          </motion.button>
          <motion.button
            className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full ${colors.button} backdrop-blur-xl flex items-center justify-center text-white text-3xl md:text-5xl shadow-2xl border-2 border-white/30 group`}
            whileHover={{ scale: 1.15, x: 8 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectImage((selectedImage + 1) % images.length);
            }}
          >
            <motion.span
              className="group-hover:translate-x-1 transition-transform"
            >
              ›
            </motion.span>
          </motion.button>
        </>
      )}

      {/* Beautiful Preview Strip */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 max-w-6xl w-full px-3 md:px-6"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
      >
        {/* Glass morphism container */}
        <div className="relative bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] p-3 md:p-6 shadow-2xl border-2 border-white/20">
          {/* Decorative corner sparkles - hidden on mobile */}
          <motion.div
            className="hidden md:block absolute -top-3 -left-3 text-3xl"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="hidden md:block absolute -top-3 -right-3 text-3xl"
            animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            💫
          </motion.div>
          
          {/* Title */}
          <motion.div 
            className="text-center mb-2 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white font-bold text-sm md:text-lg flex items-center justify-center gap-1 md:gap-2">
              <span className="text-base md:text-xl">🖼️</span>
              <span>Photo Gallery</span>
              <span className="text-base md:text-xl">🖼️</span>
            </p>
          </motion.div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative flex-shrink-0 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectImage(idx);
                }}
              >
                {/* Polaroid frame with enhanced styling */}
                <div 
                  className={`bg-white p-2 pb-5 md:p-3 md:pb-8 shadow-2xl transition-all duration-300 ${
                    idx === selectedImage 
                      ? `ring-2 md:ring-4 ${colors.ring} rotate-0 scale-110` 
                      : 'rotate-1 group-hover:rotate-0 opacity-70 group-hover:opacity-100'
                  }`}
                  style={{ width: idx === selectedImage ? '90px' : '80px' }}
                >
                  {/* Image container */}
                  <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-gray-100">
                    <Image
                      src={`/memories/${folder}/${img}`}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    {idx !== selectedImage && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                        <span className="text-white text-xs font-bold">View</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Caption area */}
                  <div className="absolute bottom-1 md:bottom-2 left-0 right-0 text-center">
                    <span className="text-xs text-gray-700 font-bold">{idx + 1}</span>
                  </div>
                  
                  {/* Decorative tape - hidden on small screens */}
                  <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-yellow-100/80 opacity-70 shadow-sm" />
                </div>
                
                {/* Active indicator with animation */}
                {idx === selectedImage && (
                  <motion.div
                    className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 ${colors.indicator} rounded-full flex items-center justify-center shadow-xl border-2 border-white`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  >
                    <motion.span 
                      className="text-white text-xs md:text-sm font-bold"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      ✓
                    </motion.span>
                  </motion.div>
                )}
                
                {/* Glow effect for active */}
                {idx === selectedImage && (
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${colors.indicator} opacity-20 blur-xl`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Scroll hint */}
          {images.length > 5 && (
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">→</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

