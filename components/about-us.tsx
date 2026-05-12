'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Villas', value: 85 },
  { label: 'Investment', value: 70 },
  { label: 'Projects', value: 92 },
];

const galleryImages = [
  { src: '/portfolio-1.jpg', alt: 'Starry night at Hiranmayi' },
  { src: '/portfolio-2.jpg', alt: 'Waterfall near the property' },
  { src: '/portfolio-3.jpg', alt: 'Fireflies in the forest' },
];

export function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="about-us" ref={containerRef} className="bg-[#FAF9F6] relative overflow-hidden">
      {/* Page Header / Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: imageScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/about-hero.png"
            alt="Luxury Interior"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF9F6] z-10" />

        <div className="relative z-20 text-white text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-serif mb-6 tracking-tight leading-none">
              About <span className="italic">us</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-70">
              <span>Homepage</span>
              <div className="w-8 h-[1px] bg-white/30" />
              <span className="text-white">About us</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 lg:py-48 relative">
        {/* Subtle background text */}
        <div className="absolute top-0 right-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <span className="text-[20rem] font-serif leading-none">Hiranmayi</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 items-start relative z-10">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <h2 className="text-5xl md:text-7xl font-serif text-[#1B4332] leading-[1.1] mb-12">
                Your dream <br />
                <span className="italic font-light">our commitment</span>
              </h2>
              
              <div className="space-y-8 text-stone-500 text-xl leading-relaxed font-light max-w-2xl">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#1B4332] first-letter:mr-3 first-letter:float-left">
                  Our villa communities are thoughtfully designed for those who seek more than 
                  just a home – they seek a lifestyle. Surrounded by lush landscapes, mature 
                  trees, and open skies.
                </p>
                <p>
                  Every Hiranmayi villa offers privacy, peace, and a deep connection to the 
                  natural world. Here, mornings begin with birdsong, evenings end in calm, 
                  and every moment in between is a breath of fresh air.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats */}
          <div className="lg:col-span-5 space-y-16 lg:pt-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group cursor-default">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#1B4332]/60 group-hover:text-[#1B4332] transition-colors duration-500">
                    {stat.label}
                  </h3>
                  <span className="text-3xl font-serif text-[#1B4332] tabular-nums">
                    {stat.value}%
                  </span>
                </div>
                <div className="h-[1px] w-full bg-stone-200 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0 bg-[#1B4332]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Gallery Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-48">
        <div className="grid md:grid-cols-3 gap-12">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
              className={`relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(27,67,50,0.15)] group ${
                index === 1 ? 'md:translate-y-12' : ''
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

