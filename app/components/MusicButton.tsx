'use client';

import { motion } from 'framer-motion';
import { useMusic } from '@/app/contexts/MusicContext';

export default function MusicButton() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center cursor-pointer"
      style={{
        boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)',
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 15px 40px rgba(236, 72, 153, 0.6)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
    >
      <motion.div
        animate={{
          rotate: isPlaying ? 360 : 0,
        }}
        transition={{
          duration: 2,
          repeat: isPlaying ? Infinity : 0,
          ease: 'linear',
        }}
        className="text-2xl md:text-3xl"
      >
        {isPlaying ? '🎵' : '🔇'}
      </motion.div>
      
      {/* Pulse effect when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full bg-pink-400/30"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.button>
  );
}

