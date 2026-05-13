'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 257;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ index: 1 });
  const renderRequested = useRef(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const renderFrame = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const currentIndex = Math.floor(frameRef.current.index);
      
      let img = loadedImages[currentIndex];
      
      // Progressive fallback: if current frame is not loaded yet,
      // find and render the nearest loaded frame for zero-latency scrolling.
      if (!img || !img.complete) {
        for (let offset = 1; offset <= TOTAL_FRAMES; offset++) {
          const prev = currentIndex - offset;
          const next = currentIndex + offset;
          if (prev >= 1 && loadedImages[prev] && loadedImages[prev].complete) {
            img = loadedImages[prev];
            break;
          }
          if (next <= TOTAL_FRAMES && loadedImages[next] && loadedImages[next].complete) {
            img = loadedImages[next];
            break;
          }
        }
      }

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
          scrub: true,
          pin: true,
          onUpdate: () => requestRender(),
        },
      });
    };

    // 1. Load the first frame immediately to display the hero section instantly
    const firstImg = new Image();
    firstImg.src = '/frames-webp/ezgif-frame-001.webp';
    firstImg.onload = () => {
      loadedImages[1] = firstImg;
      imagesRef.current = loadedImages;
      setIsLoaded(true);
      
      // Initialize scroll animation and render first frame immediately
      initScrollAnimation();
      
      // 2. Preload remaining frames progressively in the background.
      // We delay this slightly to let the rest of the page load instantly first.
      if (typeof window !== 'undefined') {
        const startPreload = () => {
          setTimeout(preloadRemainingImages, 1000);
        };
        if (document.readyState === 'complete') {
          startPreload();
        } else {
          window.addEventListener('load', startPreload);
          return () => window.removeEventListener('load', startPreload);
        }
      }
    };

    const preloadRemainingImages = () => {
      let nextIndex = 2;

      const loadNext = () => {
        if (nextIndex > TOTAL_FRAMES) return;

        const i = nextIndex++;
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `/frames-webp/ezgif-frame-${frameNum}.webp`;

        img.onload = () => {
          loadedCount++;
          loadedImages[i] = img;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          
          // Render if the user has already scrolled to this frame
          if (Math.floor(frameRef.current.index) === i) {
            requestRender();
          }
          // Load next image in this queue slot
          loadNext();
        };

        img.onerror = () => {
          loadedCount++;
          loadNext();
        };
      };

      // Start 3 concurrent loader queues to load frames sequentially.
      // This leaves 3+ connection slots fully open for other user interactions/images.
      for (let q = 0; q < 3; q++) {
        loadNext();
      }

      imagesRef.current = loadedImages;
    };

    (window as any).resetHeroToStart = () => {
      frameRef.current.index = 1;
      requestRender();
    };

    window.addEventListener('resize', requestRender);
    return () => {
      window.removeEventListener('resize', requestRender);
      delete (window as any).resetHeroToStart;
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div id="hero" ref={containerRef} className="relative w-full overflow-hidden bg-white">
      {/* Sticky Canvas Container */}
      <div className="relative h-screen w-full">
        
        {/* Cinematic Canvas */}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
        />

        {/* Premium Minimalist Loader Overlay */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#0B1B12]"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Brand Logo with soft float/fade entry */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="px-6"
                >
                  <img 
                    src="/Hir_Logo-768x140-removebg-preview.png" 
                    alt="HIRANMAYI" 
                    className="h-10 md:h-14 w-auto object-contain brightness-100"
                  />
                </motion.div>
                
                {/* Premium Golden Loading Progress Line */}
                <div className="h-[2px] w-40 overflow-hidden rounded-full bg-[#D1A26C]/20 relative">
                  <motion.div 
                    className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#D1A26C] to-[#EAE5D9]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "linear", repeat: Infinity }}
                  />
                </div>
                
                {/* Understated dynamic message */}
                <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#EAE5D9]/50 animate-pulse">
                  Entering Sanctuary...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Vignette */}
        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-b from-white/10 via-transparent to-white/10" />
      </div>

      {/* Scroll indicator removed as requested */}
    </div>
  );
}
