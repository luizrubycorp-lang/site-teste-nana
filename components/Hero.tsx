'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/naturale-foto-17.jpg"
          alt="Clínica Naturale"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Aqua Overlay */}
        <div className="absolute inset-0 bg-brand-aqua/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-2">
            <h1 className="text-white font-serif text-5xl md:text-8xl font-bold tracking-[0.15em] leading-tight">
              NATURALE
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/90 text-sm md:text-lg uppercase tracking-[0.5em] font-light">
              Estética e Skincare
            </span>
            <div className="w-12 h-[1px] bg-white/50 my-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
