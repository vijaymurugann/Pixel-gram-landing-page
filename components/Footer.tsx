import React, { useEffect, useRef } from 'react';
import { ArrowUp, Globe, MapPin, Instagram, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const quoteText = "Pixelgram gives your favourite memories a place beyond screens, beautifully preserved in premium photo books that can withstand time.";
  const words = quoteText.split(" ");

  useEffect(() => {
    if (wordsRef.current.length === 0) return;

    // Check for reduced motion preference
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion) {
      gsap.set(wordsRef.current, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scale: 1
      });
      return;
    }

    // Clean up any existing ScrollTriggers on this container
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === containerRef.current) t.kill();
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(wordsRef.current,
        {
          opacity: 0.1,
          filter: 'blur(8px)',
          y: 15,
          scale: 0.96,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom-=400',
            end: 'bottom bottom-=50',
            scrub: 1,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reset the array on each render to prevent duplicate refs
  wordsRef.current = [];

  const navLinks = ['Home', 'Inspiration', 'Features', 'FAQs'];

  return (
    <footer ref={containerRef} className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF9FC_50%,#FFF0F7_100%)] text-slate-800 pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-pink-100/30 relative overflow-hidden">

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] text-slate-900 flex flex-wrap">
              {words.map((word, idx) => {
                const isSecondPart = idx > 8;
                return (
                  <span
                    key={idx}
                    ref={(el) => { if (el) wordsRef.current[idx] = el; }}
                    className={`inline-block mr-[0.25em] py-1 whitespace-nowrap transform-gpu ${isSecondPart ? 'text-slate-500' : 'text-slate-900'
                      }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200/60 mb-16" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-24 text-lg font-light text-slate-600">

          {/* Inspiration Slot */}
          <div className="flex flex-col gap-2 md:items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-semibold text-sm uppercase tracking-wider text-seerakku-yellow">INSPIRATION</span>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xl font-medium text-slate-800">
                {['Travel', 'Weddings', 'Engagements', "Father's Day", 'Birthdays', 'Anniversaries', 'Year in Review', "Valentine's Day", "Mother's Day"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="hover:text-seerakku-yellow hover:translate-x-1.5 transition-all duration-200 block"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-200/60">

          {/* Copyright */}
          <p className="text-slate-500 text-sm font-medium">
            &copy; 2026 Pixelgram. All Rights Reserved.
          </p>

          {/* Socials / Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a
              href="https://pixelgram.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-seerakku-yellow transition-colors text-base md:text-lg flex items-center gap-2 font-medium"
            >
              <Globe className="w-5 h-5 text-[#c91f8d]" />
              pixelgram.in
            </a>

            <a
              href="mailto:admin@pixelgram.in"
              className="text-slate-600 hover:text-seerakku-yellow transition-colors text-base md:text-lg flex items-center gap-2 font-medium"
            >
              <Mail className="w-5 h-5 text-[#c91f8d]" />
              admin@pixelgram.in
            </a>

            <a
              href="https://instagram.com/pixelgram.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-seerakku-yellow transition-colors text-base md:text-lg flex items-center gap-2 font-medium"
            >
              <Instagram className="w-5 h-5 text-[#dd4fa9]" />
              @pixelgram.hq
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=252,+Trichy+Main+Road,+S.Vellalapalayam+(PO),+Karur+-+639004,+Tamil+Nadu"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-seerakku-yellow transition-colors text-base md:text-lg flex items-center gap-2 font-medium"
            >
              <MapPin className="w-5 h-5 text-[#c91f8d]" />
              Pixelgram Address
            </a>
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
