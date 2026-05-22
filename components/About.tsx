import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-white text-seerakku-black py-20 px-6 md:px-12 lg:px-20 z-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-16 md:mb-24">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg">
            01
          </div>
          <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
            About Us
          </div>
        </div>
        <a href="#" className="flex items-center gap-2 group text-sm font-semibold hover:text-seerakku-green transition-colors">
            Learn more
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Main Typography Content */}
      <div ref={containerRef} className="max-w-6xl mx-auto text-center flex flex-col gap-12 md:gap-16">
        <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-neutral-900">
            <span>You have </span>
            <span 
              className={`inline-flex items-center justify-center align-middle mx-2 px-5 py-2 bg-seerakku-yellow/90 backdrop-blur-sm rounded-full text-base md:text-xl font-bold text-white -rotate-2 hover:rotate-0 transition-transform cursor-default shadow-md border border-seerakku-yellow ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: '0ms' }}
            >
                <Camera className="w-5 h-5 mr-2" />
                8,000+
            </span>
            <span> photos on your phone, buried between screenshots, forgotten clutter, &amp; everyday noise. Hidden in that endless scroll are the moments worth holding onto like birthdays, trips, quiet moments, &amp; people who matter most.</span>
        </p>

        <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-neutral-900">
            <span>Pixelgram gives your favourite memories a place beyond screens, beautifully preserved in premium photo books that can withstand time.</span>
        </p>
      </div>

    </div>
  );
};
