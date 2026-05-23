import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavTheme } from '../context/NavContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { navTheme } = useNavTheme();
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'How it works', href: '#programs' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine sticky state style
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = navTheme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-transparent py-4 px-6 md:px-12 pointer-events-none'
          : 'bg-transparent py-6 px-6 md:py-8 md:px-12 pointer-events-none'
      }`}
    >
      {/* Logo */}
      <div className="pointer-events-auto bg-white px-4 py-3 rounded-full shadow-lg transition-transform cursor-pointer">
        <img src="/logo.png" alt="Pixelgram Logo" className="h-6 md:h-7 w-auto" />
      </div>

      {/* Centered Nav Links - Hidden on small mobile */}
      <div className="hidden md:flex items-center gap-2 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`px-6 py-3 rounded-full border backdrop-blur-md transition-all text-sm font-medium ${
              isDark 
                ? 'border-white/30 text-white bg-black/10 hover:bg-white/20 hover:border-white' 
                : 'border-black/10 text-black bg-white/10 hover:bg-black/5 hover:border-black'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <button className={`hidden sm:flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-lg group hover:scale-[1.02] ${
             isDark ? 'bg-white hover:bg-neutral-50' : 'bg-black text-white hover:bg-gray-800'
        }`}>
          <span className={isDark ? "bg-gradient-to-r from-[#c91f8d] to-[#dd4fa9] bg-clip-text text-transparent font-bold" : ""}>
            Create your photobook
          </span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              isDark ? 'bg-gradient-to-br from-[#c91f8d] to-[#dd4fa9] group-hover:rotate-45 duration-300' : 'bg-white group-hover:bg-gray-100 group-hover:rotate-45 duration-300'
          }`}>
            <ArrowUpRight className={`w-3 h-3 ${
               isDark ? 'text-white' : 'text-black'
            }`} />
          </div>
        </button>
      </div>
    </nav>
  );
};
