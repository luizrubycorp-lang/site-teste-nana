'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function ContactButtons() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Instagram Button */}
      <motion.a
        href="https://instagram.com/esteticanaturale"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-white p-3 rounded-full shadow-lg text-brand-deepblue hover:text-brand-aqua transition-colors"
      >
        <Instagram size={24} />
      </motion.a>

      {/* WhatsApp Button */}
      <div className="relative flex items-center">
        <AnimatePresence>
          {showBadge && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-3 bg-brand-aqua text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-md"
            >
              Agende sua Consulta
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-brand-aqua rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.a
          href="https://wa.me/5543999687799"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-brand-aqua p-4 rounded-full shadow-xl text-white hover:brightness-110 transition-all"
        >
          <MessageCircle size={28} fill="currentColor" />
        </motion.a>
      </div>
    </div>
  );
}
