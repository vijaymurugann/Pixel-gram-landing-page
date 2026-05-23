import React from 'react';
import { ArrowUp, Mail, Globe, MapPin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'Inspiration', 'Features', 'FAQs'];

  return (
    <footer className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF9FC_50%,#FFF0F7_100%)] text-slate-800 pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-pink-100/30 relative overflow-hidden">
      
      {/* Decorative Background Elements (Subtle Circles) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-[#c91f8d]/3 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] border border-[#c91f8d]/3 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 mx-auto">
        
        {/* Top Section: Logo, Headline, Image Card */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
          
          <div className="max-w-3xl flex-1">
            {/* Logo */}
            <div className="inline-flex items-center mb-16">
               <img src="/logo.png" alt="Pixelgram Logo" className="h-12 md:h-14 w-auto" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-slate-900">
              Some memories deserve <br className="hidden md:block" />
              <span className="text-slate-500">more than a screen.</span>
            </h2>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200/60 mb-16" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 mb-24 text-lg font-light text-slate-600">
           
           {/* Website Slot */}
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-slate-900 mb-1">
                 <Globe className="w-5 h-5 text-[#c91f8d]" />
                 <span className="font-medium text-sm uppercase tracking-wider text-slate-500">Website</span>
              </div>
              <a href="https://pixelgram.in" target="_blank" rel="noreferrer" className="text-slate-800 hover:text-seerakku-yellow transition-colors text-xl font-medium">
                pixelgram.in
              </a>
           </div>

           {/* Email & Social Slot */}
           <div className="flex flex-col gap-2 md:items-center md:text-center">
               <div className="flex items-center gap-3 text-slate-900 mb-1">
                 <Mail className="w-5 h-5 text-[#c91f8d]" />
                 <span className="font-medium text-sm uppercase tracking-wider text-slate-500">Email &amp; Social</span>
              </div>
              <div className="flex flex-col md:items-center">
                <a href="mailto:admin@pixelgram.in" className="text-slate-800 hover:text-seerakku-yellow transition-colors text-xl font-medium block">
                    admin@pixelgram.in
                </a>
                <a href="https://instagram.com/pixelgram.in" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-seerakku-yellow transition-colors text-base block mt-1 flex items-center gap-1.5 font-medium">
                    <Instagram className="w-4 h-4 inline text-[#dd4fa9]" /> @pixelgram.in
                </a>
              </div>
           </div>

           {/* Address Slot */}
           <div className="flex flex-col gap-2 md:items-end md:text-right">
              <div className="flex items-center gap-3 text-slate-900 mb-1">
                 <MapPin className="w-5 h-5 text-[#c91f8d]" />
                 <span className="font-medium text-sm uppercase tracking-wider text-slate-500">Address</span>
              </div>
              <div className="flex flex-col md:items-end">
                <p className="text-xl leading-snug text-slate-700 font-normal">
                  252, Trichy Main Road,<br />
                  S.Vellalapalayam (PO),<br />
                  Karur - 639004, Tamil Nadu
                </p>
              </div>
           </div>

        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-200/60">
           
           {/* Copyright */}
           <p className="text-slate-500 text-sm font-medium">
             &copy; 2026 Pixelgram. All Rights Reserved.
           </p>

           {/* Nav Pills */}
           <div className="flex flex-wrap justify-center gap-2">
              {['Home', 'Inspiration', 'Features', 'FAQs'].map((item) => (
                <button 
                    key={item} 
                    className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-800 text-sm font-medium bg-white/40 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 backdrop-blur-sm shadow-sm"
                >
                  {item}
                </button>
              ))}
           </div>

           {/* Scroll Top Button */}
           <button 
             onClick={scrollToTop}
             className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-[#c91f8d] hover:scale-110 transition-all duration-300 shadow-lg"
           >
             <ArrowUp className="w-5 h-5" />
           </button>
        </div>

      </div>
    </footer>
  );
};
