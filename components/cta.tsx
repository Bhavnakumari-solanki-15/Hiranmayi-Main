'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="cta-content text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-5xl font-light tracking-tight md:text-6xl"
        >
          Ready to Transform Your Vision?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-xl font-light text-foreground/70"
        >
          Let&apos;s collaborate to create something extraordinary. Reach out to discuss your project and discover how
          we can bring your ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-accent px-12 py-4 text-lg font-light text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            Start a Project
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#d1a26c' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-foreground px-12 py-4 text-lg font-light transition-colors hover:bg-foreground/5"
          >
            Schedule a Call
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center gap-8"
        >
          {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -5 }}
              className="text-sm font-light text-foreground/60 transition-colors hover:text-accent"
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
