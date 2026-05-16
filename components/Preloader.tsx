
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        onComplete();
      }
    });


    // Initial state
    gsap.set(logoRef.current, { scale: 0, opacity: 0, rotation: -180 });
    gsap.set(textRef.current, { y: 50, opacity: 0 });
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left' });

    // Animate Logo In
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    });

    // Animate Text In
    tl.to(textRef.current, {

      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    // Animate Progress Bar (simulated loading)
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "expo.inOut"
    }, "-=0.5");

    // Text moves up slightly
    tl.to(textRef.current, {
        y: -20,
        duration: 0.5,
        ease: "power2.inOut"
    }, "-=0.5");


    // Fade out and slide up entire container
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      delay: 0.2
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-seerakku-black text-white"
    >
      <div className="relative overflow-hidden p-4 flex flex-col items-center">
        <img ref={logoRef} src="/logo.svg" alt="Pixelgram Logo" className="w-32 h-32 mb-4 object-contain" />
        <h1 ref={textRef} className="text-4xl md:text-6xl font-bold font-sans tracking-tight">
          Pixelgram
        </h1>
      </div>
      
      <div className="w-64 h-1 bg-gray-800 mt-8 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-seerakku-yellow w-full"
        />
      </div>
    </div>
  );
};
