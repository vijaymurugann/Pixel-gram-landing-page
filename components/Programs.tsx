import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Programs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.program-card');

      // Set initial state: clipped to top-left corner
      gsap.set(cards, { 
        clipPath: 'inset(0 100% 100% 0 round 2.5rem)',
        autoAlpha: 1 // ensure it's visible to the renderer so clipPath works
      });

      // Animate all cards simultaneously
      gsap.to(cards, {
        clipPath: 'inset(0 0% 0% 0 round 2.5rem)',
        duration: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: gridRef.current, // Trigger based on the grid container
          start: 'top 75%', // Start animation when top of grid hits 75% of viewport
          toggleActions: 'play none none reverse',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="programs" ref={containerRef} className="bg-white py-20 px-6 md:px-12 lg:px-20 text-seerakku-black border-t border-gray-100">
       {/* Section Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg">
            04
          </div>
          <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
            HOW IT WORKS
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-right md:max-w-xl">
          Three Steps to a <span className="text-seerakku-yellow font-serif italic">Finished Book</span>
        </h2>
      </div>

      {/* Main Layout: 2 Columns */}
      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px]">
        
        {/* Left Column: Step 1 (Tall Card) */}
        <div className="program-card relative group overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl h-[500px] lg:h-full invisible">
           <img 
             src="/step1_upload.png" 
             alt="Select Your Moments"
             className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
           
           <div className="absolute top-8 left-8 flex gap-3 flex-wrap">
             <span className="px-4 py-1.5 rounded-full border border-white/30 text-white backdrop-blur-md text-sm font-medium">Step 01</span>
             <span className="px-4 py-1.5 rounded-full border border-white/30 text-white backdrop-blur-md text-sm font-medium">Upload</span>
           </div>

           <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
             <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">Select Your Moments</h3>
                <p className="text-gray-300 max-w-md text-sm md:text-base line-clamp-3 md:line-clamp-none">
                  Upload your favorite photos straight from your phone or laptop. No design skills or complicated transfers needed.
                </p>
             </div>
             <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-seerakku-yellow transition-colors shadow-lg shrink-0 ml-4">
               <ArrowUpRight className="w-6 h-6 text-black" />
             </button>
           </div>
        </div>

        {/* Right Column: Flex container for splitting space */}
        <div className="flex flex-col gap-6 h-full">
          
          {/* Top Row: Step 2 & Step 3 (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            
            {/* Step 2 */}
            <div className="program-card relative overflow-hidden rounded-[2.5rem] bg-gray-900 group h-64 sm:h-auto invisible">
                <img 
                   src="/step2_layout.png" 
                   alt="Smart Auto-Layout" 
                   className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-medium backdrop-blur-sm">
                    Step 2
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">Smart Auto-Layout</h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-snug">Let our smart editor auto-arrange your moments into a perfect layout in seconds.</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="program-card relative overflow-hidden rounded-[2.5rem] bg-gray-900 group h-64 sm:h-auto invisible">
                <img 
                  src="/step3_delivery.png" 
                  alt="Delivered to Your Doorstep"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle dark gradient for text readability only at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full border border-white/40 text-white text-xs font-medium backdrop-blur-sm">
                    Step 3
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">Delivered to Your Doorstep</h3>
                    <p className="text-gray-300 text-xs md:text-sm">Place your order and receive your premium photobook safely packaged in a rigid keepsake box.</p>
                </div>
            </div>

          </div>

          {/* Bottom Row: Description and Navigation */}
          <div className="bg-white p-2 flex flex-col sm:flex-row justify-between items-end gap-6 mt-auto">
             <p className="text-gray-500 text-lg leading-relaxed max-w-md">
               We've removed the friction so you know exactly what to expect. Go from camera roll to coffee table with zero stress and complete confidence.
             </p>
             <div className="flex shrink-0">
                <button className="px-8 py-4 rounded-full bg-black text-white font-semibold flex items-center justify-center hover:bg-seerakku-yellow hover:text-black transition-colors shadow-lg group text-sm uppercase tracking-wide">
                  Start Your Book
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};