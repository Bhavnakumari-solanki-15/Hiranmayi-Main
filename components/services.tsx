'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Strategic Design',
    description: 'Thoughtfully crafted design solutions that align with your vision and values',
    icon: '✨',
  },
  {
    id: 2,
    title: 'Digital Innovation',
    description: 'Cutting-edge technology integrated seamlessly into beautiful experiences',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Creative Development',
    description: 'From concept to execution, we bring ideas to life with precision',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'Brand Experience',
    description: 'Comprehensive branding solutions that resonate with your audience',
    icon: '🎯',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.services-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.services-heading',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Card animations with stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50, rotationX: 20 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 20px 40px rgba(209, 162, 108, 0.2)',
            duration: 0.3,
            overwrite: 'auto',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            duration: 0.3,
            overwrite: 'auto',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative min-h-screen bg-[#E8F5E9]/50 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div className="services-heading mb-16 text-center">
          <h2 className="mb-4 text-5xl font-light tracking-tight md:text-6xl text-[#1B5E20]">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-[#1B5E20]/60">
            Comprehensive solutions tailored to elevate your brand and engage your audience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-xl"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 h-1 w-12 bg-[#4CAF50] transition-all group-hover:w-full" />

              {/* Icon */}
              <div className="mb-6 text-4xl">{service.icon}</div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-light text-[#1B5E20]">{service.title}</h3>
              <p className="font-light leading-relaxed text-[#1B5E20]/60">
                {service.description}
              </p>

              {/* Hover CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-2 text-sm font-light text-[#4CAF50]"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#4CAF50]/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#4CAF50]/5 blur-3xl" />
    </section>
  );
}
