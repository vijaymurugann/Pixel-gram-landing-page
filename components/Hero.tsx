import React from 'react';
import { ArrowUpRight, Mouse } from 'lucide-react';
import { CommunityAvatars } from './CommunityAvatars';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative w-full flex-1 flex items-end px-6 md:px-12 pb-12 md:pb-20 min-h-screen">
      
      {/* Background Image - Lush Nature/Agroforestry Theme */}
      <div className="absolute inset-0 z-0">
        <img 
          // Using a high-quality, vibrant forest image that aligns with "Nature Learning Forests"
          // Image: A sunlit forest path, symbolizing the journey of restoration
          src="/hero-1.png"
          alt="Pixelgram Premium Photobooks"
          className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
        />
        {/* Complex gradient overlay to ensure text pops while keeping the image vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-end justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Testimonial/Community Bubbles - Added fade-in animation */}
          <div className="mb-8 animate-fade-in-up">
            <CommunityAvatars />
          </div>

          {/* Headline - Typography scaling for impact */}
          <h1 className="text-5xl font-bold text-white tracking-tight leading-[0.95] mb-8 shadow-sm">
            Your memories deserve <br />
            more than a screen.
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed border-l-4 border-seerakku-yellow pl-4">
            We didn't build another photo app.
            <br />
            <br />
            We built photo books that can withstand time. Turn your phone's camera roll into a premium hardcover in minutes, no designer needed.
          </p>

          {/* CTA Button */}
          <button 
            onClick={onCtaClick}
            className="group flex items-center gap-4 pl-6 pr-2 py-2 bg-seerakku-yellow hover:bg-seerakku-yellow/90 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(0,0,0,0.35)] hover:shadow-[0_0_60px_-10px_rgba(0,0,0,0.45)] border border-white/20"
          >
            <span className="text-white text-md font-bold tracking-wide">Create your book now.</span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
               <ArrowUpRight className="w-5 h-5 text-seerakku-yellow" />
            </div>
          </button>
        </div>

        {/* Right Content - Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-4 text-white/80">
           <div className="flex flex-col items-center gap-2">
              <Mouse className="w-6 h-6 text-white" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">Scroll Down</span>
           </div>
        </div>
      </div>
    </div>
  );
};
