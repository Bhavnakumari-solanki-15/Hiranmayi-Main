'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: 'Interior Elegance',
    description: 'Luxury residential design featuring minimalist aesthetics and golden accents',
    image: '/portfolio-1.jpg',
    tags: ['Design', 'Interior', 'Luxury'],
  },
  {
    id: 2,
    title: 'Architectural Vision',
    description: 'Contemporary commercial space showcasing geometric excellence',
    image: '/portfolio-2.jpg',
    tags: ['Architecture', 'Commercial', 'Modern'],
  },
  {
    id: 3,
    title: 'Premium Spaces',
    description: 'High-end design solution combining form and function seamlessly',
    image: '/portfolio-3.jpg',
    tags: ['Design', 'Premium', 'Innovation'],
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered heading animation
      gsap.fromTo(
        '.portfolio-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.portfolio-heading',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Staggered item animations on scroll
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );

        // Hover effect with GSAP
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -15,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
            duration: 0.4,
            overwrite: 'auto',
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            duration: 0.4,
            overwrite: 'auto',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen bg-background py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div className="portfolio-heading mb-20 text-center">
          <h2 className="mb-4 text-5xl font-light tracking-tight md:text-6xl">
            Our Collection
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-foreground/70">
            Discover our carefully curated selection of exceptional design solutions that blend aesthetics with
            functionality
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-12 bg-[#2E7D32] transition-all group-hover:w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-light text-[#2E7D32]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-light tracking-tight">{item.title}</h3>
                <p className="mb-6 text-foreground/60 font-light leading-relaxed">{item.description}</p>

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 flex items-center gap-2 text-sm font-light text-[#2E7D32] hover:text-[#2E7D32]/80 transition-colors"
                >
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
