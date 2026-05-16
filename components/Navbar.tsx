import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { useNavTheme } from '../context/NavContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { navTheme } = useNavTheme();
  
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#programs' }, // Changed from Programs to Projects for Nature theme
    { label: 'Impact', href: '#' },
    { label: 'Gallery', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine visibility direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true);  // Show when scrolling up or at top
      }

      // Determine sticky state style
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = navTheme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-transparent py-4 px-6 md:px-12 pointer-events-none'
          : 'bg-transparent py-6 px-6 md:py-8 md:px-12 pointer-events-none'
      }`}
    >
      {/* Logo */}
      <div className="pointer-events-auto bg-seerakku-yellow px-4 py-3 rounded-full flex items-center gap-2 shadow-lg  transition-transform cursor-pointer">
               <div className="p-[2px] rounded-full bg-white">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
         </div>
         <span className="text-black font-bold text-lg tracking-tight">Pixelgram.</span>
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
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg group ${
             isDark ? 'bg-white hover:bg-gray-100' : 'bg-black hover:bg-gray-800'
        }`}>
          <Search className={`w-5 h-5 transition-transform group-hover:scale-110 ${
             isDark ? 'text-black' : 'text-white'
          }`} />
        </button>
        
        <button className={`hidden sm:flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-lg group ${
             isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'
        }`}>
          <span>Donate Now</span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              isDark ? 'bg-black group-hover:bg-seerakku-yellow' : 'bg-white group-hover:bg-seerakku-yellow'
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