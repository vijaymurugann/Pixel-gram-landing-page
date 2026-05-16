import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: "Wedding Album",
    logo: "", 
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Nithin M.",
    role: "",
    location: "Kochi, Kerala",
    quote: "Pixelgram made my wedding album perfectly in under 10 minutes! The print quality is stunning."
  },
  {
    id: 2,
    company: "Paris Trip",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    name: "Mamitha Baiju",
    role: "",
    location: "Pune, Maharashtra",
    quote: "The easiest gift I've ever made. My parents cried when they saw the Paris trip book."
  },
  {
    id: 3,
    company: "Anniversary Gift",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Kavitha",
    role: "",
    location: "Bengaluru, Karnataka",
    quote: "My wife cried when she saw it... the most beautiful gift I've received."
  },
  {
    id: 4,
    company: "Goa Trip",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Sharan",
    role: "",
    location: "Chennai, Tamil Nadu",
    quote: "Best 3k I've spent. Hands down."
  },
  {
    id: 5,
    company: "Baby's First Year",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Ananya R.",
    role: "",
    location: "Mumbai, Maharashtra",
    quote: "My husband had professional photobooks made, but this matched the quality perfectly!"
  },
  {
    id: 6,
    company: "Diwali Reunion",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Priya S.",
    role: "",
    location: "Delhi, NCR",
    quote: "I finally did something with the hundreds of photos sitting on my phone. The auto-layout feature arranged our entire family gathering in minutes."
  },
  {
    id: 7,
    company: "Farewell Gift",
    logo: "",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Rahul V.",
    role: "",
    location: "Hyderabad, Telangana",
    quote: "Ordered this for a colleague's farewell. It didn't feel generic at all, and the premium matte paper makes it look like an art book from a store."
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20 text-seerakku-black border-t border-gray-100 overflow-hidden">
      
      {/* Header Row Mobile */}
      <div className="flex md:hidden items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg shrink-0">
            05
          </div>
          <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
            TESTIMONIAL
          </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Column: Fixed Content */}
        <div className="w-full lg:w-1/3 flex flex-col shrink-0">
          <div>
            {/* Header Desktop */}
            <div className="hidden md:flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg shrink-0">
                05
              </div>
              <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
                TESTIMONIAL
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.1]">
              Loved by <br/>
              <span className="text-seerakku-yellow font-semibold">Memory Keepers</span>
            </h2>
          </div>
        </div>

        {/* Right Column: Slider + Navigation */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
           <div className="overflow-hidden relative">
               <div 
                 className="flex gap-6 transition-transform duration-500 ease-out"
                 style={{ transform: `translateX(-${activeIndex * (100 / (window.innerWidth >= 1024 ? 2.2 : 1.1))}%)` }} 
               >
                  {testimonials.map((item) => (
                    <div 
                      key={item.id} 
                      className="w-full md:w-[400px] shrink-0 bg-gray-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[420px]"
                    >
                       {/* Top Row: Logo & Avatar */}
                       <div className="flex justify-between items-start mb-8">
                          <div className="px-6 py-2 bg-white rounded-full border border-gray-100 font-bold text-gray-800 text-sm shadow-sm flex items-center justify-center h-12 w-fit">
                             <span>{item.company}</span>
                          </div>
                          <img 
                            src={item.avatar} 
                            alt={item.name} 
                            className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                          />
                       </div>

                       {/* Quote Section */}
                       <div className="flex-1">
                          <Quote className="w-8 h-8 text-seerakku-yellow fill-seerakku-yellow mb-4" />
                          <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-snug">
                            {item.quote}
                          </p>
                       </div>

                       {/* Bottom: Author Info */}
                       <div className="mt-8 pt-6 border-t border-gray-200/50">
                          <h4 className="text-lg font-bold text-neutral-900">{item.name}</h4>
                          <p className="text-gray-500 text-sm mt-1">{item.company}</p>
                          <p className="text-gray-400 text-xs mt-1">{item.location}</p>
                       </div>
                    </div>
                  ))}
               </div>
               
               {/* Visual Fade for overflow on the right */}
               <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none hidden lg:block" />
           </div>

           {/* Navigation Buttons */}
           <div className="flex justify-end gap-4 mt-2">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-seerakku-yellow hover:text-black transition-colors shadow-lg"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};