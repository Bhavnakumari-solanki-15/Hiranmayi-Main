'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 257;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ index: 1 });
  const renderRequested = useRef(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/frames/ezgif-frame-${frameNum}.png`;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
            setTimeout(initScrollAnimation, 100);
          }
        };
        loadedImages[i] = img;
      }
      imagesRef.current = loadedImages;
    };

    const renderFrame = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const img = imagesRef.current[Math.floor(frameRef.current.index)];

      if (canvas && context && img && img.complete) {
        const ratio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'medium';
        context.scale(ratio, ratio);

        const imgRatio = img.width / img.height;
        const canvasRatio = window.innerWidth / window.innerHeight;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = window.innerWidth;
          drawHeight = window.innerWidth / imgRatio;
          offsetX = 0;
          offsetY = (window.innerHeight - drawHeight) / 2;
        } else {
          drawWidth = window.innerHeight * imgRatio;
          drawHeight = window.innerHeight;
          offsetX = (window.innerWidth - drawWidth) / 2;
          offsetY = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
      renderRequested.current = false;
    };

    const requestRender = () => {
      if (!renderRequested.current) {
        renderRequested.current = true;
        requestAnimationFrame(renderFrame);
      }
    };

    const initScrollAnimation = () => {
      if (!containerRef.current || !canvasRef.current) return;

      renderFrame();

      // Main frame sequence animation
      gsap.to(frameRef.current, {
        index: TOTAL_FRAMES,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=600%',
          scrub: 1.2,
          pin: true,
          onUpdate: () => requestRender(),
        },
      });
    };

    preloadImages();

    window.addEventListener('resize', requestRender);
    return () => {
      window.removeEventListener('resize', requestRender);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white">
      {/* Sticky Canvas Container */}
      <div className="relative h-screen w-full">
        
        {/* Cinematic Canvas */}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
        />

        {/* Loading experience removed as requested */}

        {/* Subtle Vignette */}
        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-b from-white/10 via-transparent to-white/10" />
      </div>

      {/* Scroll indicator removed as requested */}
    </div>
  );
}
