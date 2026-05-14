'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useLenis } from 'lenis/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const lenis = useLenis();
  
  const navItems = [
    { 
      number: "01", 
      label: "HOME", 
      href: "#hero",
      image: "/mission-view-1.png",
      subtitle: 'COHESIVE LANDSCAPE INTEGRATION',
      quote: "“Architecture should not compete with nature, it should celebrate it.”"
    },
    { 
      number: "02", 
      label: "MISSION", 
      href: "#mission",
      image: "/mission-view-2.png",
      subtitle: 'ECOLOGICAL PRESERVATION',
      quote: "“Preserving local biodiversity while crafting exceptional spaces.”"
    },
    { 
      number: "03", 
      label: "PROJECTS", 
      href: "#projects",
      image: "/portfolio-1.jpg",
      subtitle: 'CRAFTED RESIDENCES',
      quote: "“Where elegant human craftsmanship meets untamed natural beauty.”"
    },
    { 
      number: "04", 
      label: "SERVICES", 
      href: "#services",
      image: "/portfolio-2.jpg",
      subtitle: 'SUSTAINABLE ARCHITECTURE',
      quote: "“Designing carbon-neutral structures that harmonize with their environments.”"
    },
    { 
      number: "05", 
      label: "CONTACT", 
      href: "#contact",
      image: "/portfolio-3.jpg",
      subtitle: 'BEGIN YOUR JOURNEY',
      quote: "“Let us design your private sanctuary in absolute harmony with the earth.”"
    }
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
          backgroundColor: 'rgba(11, 27, 18, 0.65)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderBottom: '1px solid rgba(209, 162, 108, 0.15)'
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-3 md:py-3.5">
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
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="hidden sm:inline-block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EAE5D9]/70 hover:text-[#d1a26c] transition-colors font-sans"
              >
                PROJECTS
              </a>
            </div>

            {/* CENTER: Official Brand Logo Image */}
            <div className="flex items-center">
              <a 
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, '#hero')}
                className="flex items-center group focus:outline-none"
              >
                <img 
                  src="/Hir_Logo-768x140-removebg-preview.png" 
                  alt="HIRANMAYI" 
                  className="h-8 md:h-10 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
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
                    className="group relative flex items-baseline gap-4 md:gap-6 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
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



            </motion.div>

            {/* RIGHT SIDE PANEL: Panoramic Rendering Image Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative hidden h-full w-[50%] overflow-hidden lg:block border-l border-[#D1A26C]/10 bg-[#0B1B12]"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={hoveredIndex}
                  initial={{ y: '100%', opacity: 0.9 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0.9 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 h-full w-full overflow-hidden"
                >
                  {/* Background Architectural View */}
                  <div 
                    style={{ backgroundImage: `url('${navItems[hoveredIndex].image}')` }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  />
                  {/* Deep Emerald Forest Overlay for Premium Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#0b1b12]/20 via-[#0b1b12]/80 to-[#0b1b12]" />
                  
                  {/* Aesthetic Text Overlay on Image Side */}
                  <div className="absolute bottom-14 left-12 right-12 z-10 flex flex-col gap-2">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-[#d1a26c] uppercase font-sans">
                      {navItems[hoveredIndex].subtitle}
                    </span>
                    <span className="font-serif text-2xl font-light leading-relaxed text-[#EAE5D9] max-w-sm">
                      {navItems[hoveredIndex].quote}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
