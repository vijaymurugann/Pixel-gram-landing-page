import React from 'react';
import { ArrowUp, Mail, Globe, MapPin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'Inspiration', 'Features', 'FAQs'];

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-gray-900 relative overflow-hidden">
      
      {/* Decorative Background Elements (Subtle Circles) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 mx-auto">
        
        {/* Top Section: Logo, Headline, Image Card */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
          
          <div className="max-w-3xl flex-1">
            {/* Logo Pill */}
            <div className="bg-white text-black px-8 py-3 rounded-full inline-flex items-center gap-3 mb-16 font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               <span>Pixelgram.</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Some memories deserve <br className="hidden md:block" />
              <span className="text-gray-400">more than a screen.</span>
            </h2>
          </div>

          {/* Right Image Card - Floating Yellow Card */}
          <div className="relative shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
             <div className="w-72 h-72 bg-seerakku-yellow rounded-[2.5rem] p-8 flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500 relative z-10 shadow-2xl">
                {/* Pixelgram Brand Logo */}
                <img 
                  src="/logo.svg" 
                  alt="Pixelgram Brand Logo" 
                  className="w-full h-full object-cover rounded-[1.5rem] shadow-sm"
                />
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-16" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-24 text-lg font-light text-gray-400">
           
           {/* Website Slot */}
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-white mb-1">
                 <Globe className="w-5 h-5" />
                 <span className="font-medium text-sm uppercase tracking-wider text-gray-500">Website</span>
              </div>
              <a href="https://pixelgram.in" target="_blank" rel="noreferrer" className="hover:text-seerakku-yellow transition-colors text-xl">
                pixelgram.in
              </a>
           </div>

           {/* Email & Social Slot */}
           <div className="flex flex-col gap-2 md:items-center md:text-center">
               <div className="flex items-center gap-3 text-white mb-1">
                 <Mail className="w-5 h-5" />
                 <span className="font-medium text-sm uppercase tracking-wider text-gray-500">Email &amp; Social</span>
              </div>
              <div className="flex flex-col md:items-center">
                <a href="mailto:admin@pixelgram.in" className="hover:text-seerakku-yellow transition-colors text-xl block">
                    admin@pixelgram.in
                </a>
                <a href="https://instagram.com/pixelgram.in" target="_blank" rel="noreferrer" className="hover:text-seerakku-yellow transition-colors text-base block mt-1 flex items-center gap-1.5">
                    <Instagram className="w-4 h-4 inline" /> @pixelgram.in
                </a>
              </div>
           </div>

           {/* Address Slot */}
           <div className="flex flex-col gap-2 md:items-end md:text-right">
              <div className="flex items-center gap-3 text-white mb-1">
                 <MapPin className="w-5 h-5" />
                 <span className="font-medium text-sm uppercase tracking-wider text-gray-500">Address</span>
              </div>
              <div className="flex flex-col md:items-end">
                <p className="text-xl leading-snug">
                  252, Trichy Main Road,<br />
                  S.Vellalapalayam (PO),<br />
                  Karur - 639004, Tamil Nadu
                </p>
              </div>
           </div>

        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
           
           {/* Copyright */}
           <p className="text-gray-600 text-sm font-medium">
             &copy; 2026 Pixelgram. All Rights Reserved.
           </p>

           {/* Nav Pills */}
           <div className="flex flex-wrap justify-center gap-2">
              {['Home', 'Inspiration', 'Features', 'FAQs'].map((item) => (
                <button 
                    key={item} 
                    className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                >
                  {item}
                </button>
              ))}
           </div>

           {/* Scroll Top Button */}
           <button 
             onClick={scrollToTop}
             className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-seerakku-yellow hover:scale-110 transition-all duration-300 shadow-lg"
           >
             <ArrowUp className="w-5 h-5" />
           </button>
        </div>

      </div>
    </footer>
  );
};