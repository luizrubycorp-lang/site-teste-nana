'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import ScheduleModal from './ScheduleModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-40 glass h-20 flex items-center px-6 md:px-12 justify-between"
          >
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-brand-deepblue">NATURALE</span>
              <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 opacity-70">Estética e Skincare</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
              <Link href="#procedimentos" className="hover:text-brand-aqua transition-colors">Procedimentos</Link>
              <Link href="#academy" className="hover:text-brand-aqua transition-colors">Academy</Link>
              <Link href="#produtos" className="hover:text-brand-aqua transition-colors">Produtos</Link>
              <Link href="#contato" className="hover:text-brand-aqua transition-colors">Contato</Link>
            </div>

            <button 
              onClick={() => setOpenSchedule(true)}
              className="bg-brand-deepblue text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-aqua transition-all"
            >
              Agendar
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ScheduleModal moved outside the transformed/fixed nav to avoid clipping */}
      <ScheduleModal open={openSchedule} onClose={() => setOpenSchedule(false)} />
    </>
  );
}
