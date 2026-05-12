'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform background opacity and blur based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(27, 94, 32, 0)', '1px solid rgba(27, 94, 32, 0.1)']
  );

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Mission', href: '#mission' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      style={{ 
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-[#1B5E20] flex items-center justify-center shadow-lg shadow-green-900/20">
              <span className="text-white font-serif text-xl">H</span>
            </div>
            <span className="text-2xl font-serif tracking-[0.1em] text-[#1B5E20] font-medium">Hiranmayi</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-10 lg:flex items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-[11px] font-bold tracking-[0.2em] uppercase text-[#1B5E20]/70 transition-all hover:text-[#1B5E20] group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1B5E20] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button removed as requested */}

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#1B5E20]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 flex flex-col gap-6 border-t border-[#1B5E20]/10 pt-6 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B5E20] hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
