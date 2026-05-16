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
      <div ref={containerRef} className="max-w-6xl mx-auto text-center">
        <div className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-neutral-900">
            <span>You have </span>
            <span 
              className={`inline-flex items-center justify-center align-middle mx-2 px-5 py-2 bg-seerakku-yellow/90 backdrop-blur-sm rounded-full text-base md:text-xl font-bold text-white -rotate-2 hover:rotate-0 transition-transform cursor-default shadow-md border border-seerakku-yellow ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: '0ms' }}
            >
                <Camera className="w-5 h-5 mr-2" />
                4,000+
            </span>
            <span> photos on your phone, buried under screenshots and blurry food photos. We didn't build another photo app.  </span>
            <br/>
            <span >We built </span>
            <span 
              className={`inline-flex align-middle mx-2 align-bottom ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=200&h=200&auto=format&fit=crop" 
                    alt="Happy family memory" 
                    className="w-16 h-12 md:w-28 md:h-20 rounded-lg object-cover border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
            </span>
            <span> photobooks your family will actually cry over. The Pixelgram Book is a premium, lay-flat hardcover that looks like an art book you'd find in a store. But you made it. From your phone. </span>
            <span className="shiny-text text-seerakku-yellow font-bold decoration-clone">
                In just fifteen minutes.
            </span>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="flex items-center justify-center mt-24 md:mt-32 gap-6">
         <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-neutral-300"></div>
         <div className="p-4 border border-neutral-200 rounded-full bg-white shadow-sm animate-pulse-slow">
            <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
         </div>
         <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-neutral-300"></div>
      </div>
    </div>
  );
};
