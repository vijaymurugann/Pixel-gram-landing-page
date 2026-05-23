import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Programs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      gsap.set(cardsRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reset the array on each render to prevent duplicate refs
  cardsRef.current = [];

  return (
    <div ref={containerRef} className="bg-white py-20 px-6 md:px-12 lg:px-20 text-seerakku-black border-t border-gray-100">
      {/* Section Badge */}
      <div className="flex items-center gap-4 mb-8">
        {/* <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg">
          04
        </div> */}
        <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
          Get Your Book Ready In minutes
        </div>
      </div>

      {/* Two-Column Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        <h2 className="lg:col-span-7 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-seerakku-black">
          Three Steps to a <span className="text-seerakku-yellow font-serif italic">Finished Book</span>
        </h2>
        <p className="lg:col-span-5 text-gray-500 text-lg md:text-xl leading-relaxed lg:pt-4">
          We've removed the friction so you know exactly what to expect. Go from camera roll to your door steps with zero stress and complete confidence.
        </p>
      </div>

      {/* 3-Column Equal-Sized Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

        {/* Step 1 */}
        <div
          ref={el => { if (el) cardsRef.current[0] = el; }}
          className="relative group overflow-hidden rounded-[1.6rem] bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl h-[500px]"
        >
          <img
            src="/step1_upload.png"
            alt="Select Your Moments"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Step 01
            </span>
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Upload
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Select Your Moments</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Upload your favorite photos straight from your phone or laptop. No design skills or complicated transfers needed.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div
          ref={el => { if (el) cardsRef.current[1] = el; }}
          className="relative group overflow-hidden rounded-[1.6rem] bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl h-[500px]"
        >
          <img
            src="/step2_layout.png"
            alt="Smart Auto-Layout"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Step 02
            </span>
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Edit
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Smart Auto-Layout</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Let our smart editor auto-arrange your moments into a perfect layout in seconds.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div
          ref={el => { if (el) cardsRef.current[2] = el; }}
          className="relative group overflow-hidden rounded-[1.6rem] bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl h-[500px]"
        >
          <img
            src="/step3_delivery.png"
            alt="Delivered to Your Doorstep"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Step 03
            </span>
            <span className="px-4 py-2 rounded-full border border-white/30 text-white bg-black/20 backdrop-blur-md transition-all text-xs font-medium uppercase tracking-wider hover:bg-white/20 hover:border-white shadow-sm cursor-default">
              Order
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Delivered to Your Doorstep</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Place your order and receive your premium photobook safely packaged in a rigid keepsake box.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
