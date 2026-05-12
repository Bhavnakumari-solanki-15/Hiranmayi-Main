'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TrueFocus from './TrueFocus';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FloatingLeaves } from './floating-leaves';

export function Mission() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/mission-view-1.png',
    '/mission-view-2.png',
    '/about-hero.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="mission" className="relative overflow-hidden bg-white">
      <FloatingLeaves />
      {/* Top Mission Area (White Background) */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <TrueFocus 
                sentence="Our Mission."
                manualMode={false}
                blurAmount={5}
                borderColor="#1B5E20"
                animationDuration={0.5}
                pauseBetweenAnimations={2}
              />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1B5E20] leading-[1.1] font-medium overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  className="block"
                >
                  A Life Rooted in
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
                  className="block italic"
                >
                  Green Luxury
                </motion.span>
              </h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
              className="max-w-md text-lg text-stone-500 font-light leading-relaxed"
            >
              Our villa communities are thoughtfully designed for those who seek more than 
              just a home – they seek a lifestyle.
            </motion.p>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 1.1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="absolute -right-8 -top-8 -bottom-8 w-2/3 bg-[#E8F5E9]/50 -z-10 rounded-none" />
            
            <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden shadow-[0_50px_100px_-20px_rgba(27,67,50,0.25)] rounded-none">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.32, 0.72, 0, 1] 
                  }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={images[currentImageIndex]}
                    alt={`Hiranmayi View - ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Area (Dark Forest Background) - Full Width for Video */}
      <div className="bg-[#244F3D] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1B5E20]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px] relative">
          {/* Background Decorative Text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-serif text-white whitespace-nowrap z-0">
            DISCOVER
          </div>

          {/* Left Side: Cinematic Video (Flush with Left Edge) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full h-full min-h-[400px] lg:min-h-0 overflow-hidden group shadow-xl"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            >
              <source src="/Hiranmayi_villas_Nashik_nature_202605081406.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Right Side: Grand Format Cards (Side by Side) */}
          <div className="flex flex-col justify-center py-16 px-6 md:px-12 lg:px-16 bg-[#1B4332]/20 relative z-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Residential Developments */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="group flex flex-col justify-between p-10 bg-white/90 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white min-h-[300px]"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-[#1B5E20] font-bold">Residential Developments</h3>
                  <div className="space-y-1 text-stone-500 font-light leading-relaxed text-sm">
                    <p>Elegant villas crafted for comfort and calm,</p>
                    <p>In the heart of nature, away from the city.</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center py-2">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <DotLottieReact
                      src="https://lottie.host/5d335d24-a20a-4aef-917f-65e0675649ed/wloeWNQYn3.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </motion.div>

              {/* Investor */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="group flex flex-col justify-between p-10 bg-white/90 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white min-h-[300px]"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif text-[#1B5E20] font-bold">Investor</h3>
                  <div className="space-y-1 text-stone-500 font-light leading-relaxed text-sm">
                    <p>Nature-rich villas designed for returns,</p>
                    <p>A peaceful escape that appreciates.</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center py-2">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <DotLottieReact
                      src="https://lottie.host/f4d025fe-696e-457f-aae3-95a15a6225ae/HszqOAzUvD.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
