'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useLenis } from 'lenis/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  
  // Transform header style based on scroll to ensure 100% readability at all times
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 27, 18, 0.75)', 'rgba(11, 27, 18, 0.96)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(12px)', 'blur(20px)']
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(209, 162, 108, 0.1)', '1px solid rgba(209, 162, 108, 0.2)']
  );

  const navItems = [
    { label: 'Home', href: '#hero', number: '01' },
    { label: 'Mission', href: '#mission', number: '02' },
    { label: 'Portfolio', href: '#portfolio', number: '03' },
    { label: 'Services', href: '#services', number: '04' },
    { label: 'Contact', href: '#contact', number: '05' },
  ];

  // Disable scroll when full screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (lenis) {
      if (targetId === '#hero') {
        // Scroll to the absolute top of the website (0) for perfect sync with GSAP
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        lenis.scrollTo(targetId, { duration: 1.2 });
      }
    } else {
      if (targetId === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <motion.header 
        style={{ 
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          borderBottom: headerBorder
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 md:py-6">
          <div className="flex items-center justify-between">
            
            {/* LEFT SIDE: Menu Button + Portfolio Direct Link */}
            <div className="flex items-center gap-6 md:gap-10">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="group flex items-center gap-3 text-[#EAE5D9] hover:text-[#d1a26c] transition-colors focus:outline-none"
              >
                {/* 2-Line Hamburger Menu Icon */}
                <div className="flex flex-col gap-1.5">
                  <span className="h-[1.5px] w-6 bg-[#EAE5D9] group-hover:bg-[#d1a26c] transition-all duration-300 group-hover:translate-x-1" />
                  <span className="h-[1.5px] w-4 bg-[#EAE5D9] group-hover:bg-[#d1a26c] transition-all duration-300 group-hover:w-6" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase font-sans">
                  MENU
                </span>
              </button>

              <a 
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                className="hidden sm:inline-block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EAE5D9]/70 hover:text-[#d1a26c] transition-colors font-sans"
              >
                PORTFOLIO
              </a>
            </div>

            {/* CENTER: Infinite Circular Arrows Monogram & Brand Title */}
            <div className="flex items-center gap-2.5">
              <a 
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, '#hero')}
                className="flex items-center gap-2.5 group focus:outline-none"
              >
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#D1A26C]/20 bg-[#0B1B12]/40 transition-transform duration-500 group-hover:rotate-180">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M16 12a4 4 0 0 0-4-4v2l-3-3 3-3v2a6 6 0 0 1 6 6z" 
                      stroke="#d1a26c" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M8 12a4 4 0 0 0 4 4v-2l3 3-3 3v-2a6 6 0 0 1-6-6z" 
                      stroke="#d1a26c" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-serif text-lg md:text-xl tracking-[0.18em] text-[#EAE5D9] group-hover:text-[#d1a26c] transition-colors font-semibold uppercase">
                  Hiranmayi
                </span>
              </a>
            </div>

            {/* RIGHT SIDE: Contact Us + Heart Favorites Trigger */}
            <div className="flex items-center gap-5 md:gap-7">
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EAE5D9] hover:text-[#d1a26c] transition-colors font-sans"
              >
                CONTACT US
              </a>

              {/* Heart Micro-interactive Favorites Icon */}
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="relative flex items-center justify-center p-1 focus:outline-none"
                aria-label="Add to favorites"
              >
                <motion.svg 
                  animate={isLiked ? { scale: [1, 1.3, 0.95, 1.1, 1] } : {}}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="h-[18px] w-[18px] md:h-5 md:w-5 cursor-pointer" 
                  viewBox="0 0 24 24" 
                  fill={isLiked ? '#d1a26c' : 'none'} 
                  stroke={isLiked ? '#d1a26c' : '#EAE5D9'} 
                  strokeWidth="1.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </motion.svg>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* FULL-SCREEN SPLIT MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[100] flex h-screen w-screen overflow-hidden bg-[#0B1B12]/95 backdrop-blur-md"
          >
            {/* LEFT SIDE PANEL: Links & Branding Badge */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative flex h-full w-full flex-col justify-between bg-gradient-to-b from-[#0B1B12] to-[#0e271a] p-8 md:p-14 lg:w-[50%]"
            >
              {/* Top Row: Close Menu Icon */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-3 text-[#EAE5D9]/70 hover:text-[#d1a26c] transition-colors focus:outline-none"
                >
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#D1A26C]/10 bg-white/5 transition-transform group-hover:rotate-90">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-sans">CLOSE</span>
                </button>
              </div>

              {/* Middle Row: Large List of Actual Sections */}
              <nav className="my-auto flex flex-col gap-4 md:gap-6 pt-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                    className="group relative flex items-baseline gap-4 md:gap-6 overflow-hidden"
                  >
                    {/* Golden Index Number */}
                    <span className="font-sans text-xs md:text-sm font-medium tracking-[0.2em] text-[#d1a26c]/50 group-hover:text-[#d1a26c] transition-colors">
                      {item.number}
                    </span>

                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EAE5D9] hover:text-[#d1a26c] transition-all duration-300 transform group-hover:translate-x-3"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Row: Premium Brand Heritage Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D1A26C]/10 pt-6"
              >
                <div className="flex items-center gap-3 text-[#EAE5D9]/60 text-[10px] md:text-xs tracking-[0.15em] font-sans">
                  <span>© {new Date().getFullYear()} HIRANMAYI DEVELOPMENTS</span>
                  <span className="hidden sm:inline-block">•</span>
                  <span className="hidden sm:inline-block">NATURE LIVING</span>
                </div>

                {/* Cookie / Heritage pill container */}
                <div className="flex items-center gap-2 rounded-full border border-[#D1A26C]/20 bg-[#0B1B12] px-4 py-2 text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-[#EAE5D9] shadow-inner shadow-green-950/20">
                  <span className="text-white/60">THIS SITE PRESERVES ARCHITECTURAL ECO-SYSTEMS</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-full bg-[#d1a26c] px-3 py-1 font-semibold text-[#0B1B12] hover:bg-[#eae5d9] transition-colors"
                  >
                    HIRANMAYI
                  </button>
                </div>
              </motion.div>

            </motion.div>

            {/* RIGHT SIDE PANEL: Panoramic Rendering Image Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative hidden h-full w-[50%] overflow-hidden lg:block border-l border-[#D1A26C]/10"
            >
              {/* Background Architectural View */}
              <motion.div 
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{ backgroundImage: `url('/mission-view-1.png')` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              />
              {/* Deep Emerald Forest Overlay for Premium Contrast */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#0b1b12]/20 via-[#0b1b12]/80 to-[#0b1b12]" />
              
              {/* Aesthetic Text Overlay on Image Side */}
              <div className="absolute bottom-14 left-12 right-12 z-10 flex flex-col gap-2">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#d1a26c] uppercase font-sans">
                  COHESIVE LANDSCAPE INTEGRATION
                </span>
                <span className="font-serif text-2xl font-light leading-relaxed text-[#EAE5D9] max-w-sm">
                  “Architecture should not compete with nature, it should celebrate it.”
                </span>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
