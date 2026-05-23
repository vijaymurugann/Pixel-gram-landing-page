import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const QuoteReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const quoteText = "Pixelgram gives your favourite memories a place beyond screens, beautifully preserved in premium photo books that can withstand time.";
  const words = quoteText.split(" ");

  useEffect(() => {
    if (wordsRef.current.length === 0) return;

    // Check for reduced motion preference
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isReducedMotion) {
      // Instantly make the text fully visible and clean
      gsap.set(wordsRef.current, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scale: 1
      });
      gsap.set(glowRef.current, {
        opacity: 0.3 // subtle static brand color glow for light theme
      });
      return;
    }

    // Clean up any existing ScrollTriggers on this container
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === containerRef.current) t.kill();
    });

    const ctx = gsap.context(() => {
      // 1. Radial brand glow scaling down and fading out as scroll progresses
      gsap.fromTo(glowRef.current,
        {
          opacity: 1,
          scale: 1.1,
        },
        {
          opacity: 0,
          scale: 0.8,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // 2. Butter-smooth word blur-reveal with subtle translation and scaling
      gsap.fromTo(wordsRef.current,
        {
          opacity: 0.1,
          filter: 'blur(12px)',
          y: 35,
          scale: 0.94,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2, // Adds a premium smooth lag factor to the scroll tracking
            pin: true, // Pins the section so text reveals in viewport
            pinSpacing: true,
            anticipatePin: 1,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reset the array on each render to prevent duplicate refs
  wordsRef.current = [];

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-white select-none z-20"
    >
      {/* Glowing Brand Accent Backdrop - Pale brand gradient fading to smooth white */}
      <div 
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transform-gpu"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(201, 31, 141, 0.08) 0%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 1) 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top subtle boundary glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-seerakku-yellow/5 to-transparent" />

      {/* Premium Typography Content wrapper */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 
          ref={textRef} 
          className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-normal tracking-tight text-seerakku-black flex flex-wrap justify-center"
        >
          {words.map((word, idx) => (
            <span
              key={idx}
              ref={(el) => { if (el) wordsRef.current[idx] = el; }}
              className="inline-block mr-[0.28em] py-2 whitespace-nowrap transform-gpu"
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

    </div>
  );
};
