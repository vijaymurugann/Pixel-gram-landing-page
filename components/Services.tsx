import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const inspirationList = [
  {
    id: '01',
    title: 'Baby Milestones & Year One',
    description: "Preserve your child's first steps and precious early moments in a physical space. Turn a folder of thousands of photos into an art-store quality book.",
    image: '/thumb_baby_book_1778930452188.png',
    buttonText: 'View Theme'
  },
  {
    id: '02',
    title: 'The Diwali Family Reunion',
    description: "The Diwali your whole family actually showed up. Give those rare, vibrant memories the spotlight they deserve instead of leaving them buried under screenshots.",
    image: '/thumb_diwali_book_1778930469356.png',
    buttonText: 'View Theme'
  },
  {
    id: '03',
    title: 'Weekend Getaways & Road Trips',
    description: "From Goa trips to Shimla weekends and Rajasthan road trips, turn your travel photos into a stunning, lay-flat hardcover travelogue.",
    image: '/thumb_travel_book_1778930485019.png',
    buttonText: 'View Theme'
  },
  {
    id: '04',
    title: 'Landmark Farewells',
    description: "The perfect gift for a colleague or a friend. It doesn't feel generic, showing that you actually thought about it.",
    image: '/thumb_farewell_book_1778930502205.png',
    buttonText: 'View Theme'
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('01');

  const handleToggle = (id: string) => {
    setActiveId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20 text-neutral-900 border-t border-gray-100">
      
      {/* Top Header Row for Mobile */}
      <div className="flex items-center gap-4 mb-12 md:mb-20">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg shrink-0">
            02
          </div>
          <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
            INSPIRATION
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Headlines & Main Image */}
        <div className="flex flex-col h-full">
           <div className="mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-neutral-900 leading-[1.1]">
                Creating Made <br/>
                <span className="italic text-seerakku-yellow font-bold">Effortless</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                We remove the fear that creating a photobook will be a frustrating, time-consuming chore. Our smart features reassure you that the process is fast, easy, and high-quality, with zero learning curve and no need for 100+ complicated tools.
              </p>
           </div>
           
           {/* Large Left Image */}
           <div className="relative w-full h-[400px] lg:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl group mt-auto">
              <img 
                src="/main_lifestyle_book_1778930434038.png" 
                alt="Effortless Creation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white max-w-xs hidden sm:block">
                 <p className="font-medium text-sm">Reduces your design time to minutes.</p>
              </div>
           </div>
        </div>

        {/* Right Column: Inspiration List (Accordion) */}
        <div className="flex flex-col">
           {inspirationList.map((item) => {
             const isActive = activeId === item.id;
             return (
               <div key={item.id} className={`border-b border-gray-100 transition-all duration-500 ease-in-out ${isActive ? 'pb-10 mb-8' : 'py-6'}`}>
                  
                  {/* Clickable Header */}
                  <div 
                    className={`flex items-start justify-between cursor-pointer group select-none`}
                    onClick={() => handleToggle(item.id)}
                  >
                     <div className="flex items-center gap-3 md:gap-6">
                        <span className={`font-medium text-lg transition-colors ${isActive ? 'text-gray-400 mt-1' : 'text-gray-300 group-hover:text-seerakku-yellow'}`}>
                           {item.id}.
                        </span>
                        <h3 className={`font-medium text-neutral-900 tracking-tight transition-all duration-300 ${isActive ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl font-light text-neutral-800 group-hover:translate-x-2'}`}>
                           {item.title}
                        </h3>
                     </div>
                     
                     {/* Arrow Icon for Collapsed State */}
                     {!isActive && (
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-seerakku-yellow transition-colors shrink-0">
                           <ArrowRight className="w-4 h-4 text-black group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                     )}
                  </div>

                  {/* Expanded Body */}
                  {isActive && (
                    <div className="flex flex-col sm:flex-row gap-6 mt-6 pl-0 md:pl-8 animate-fade-in-up">
                       <div className="flex-1">
                          <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                            {item.description}
                          </p>
                          <button className="px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold text-neutral-800 hover:bg-black hover:text-white transition-colors">
                            {item.buttonText}
                          </button>
                       </div>
                       <div className="w-full sm:w-48 h-32 sm:h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-300">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                       </div>
                    </div>
                  )}
               </div>
             );
           })}
           
           {/* Bottom Action Button */}
           <div className="pt-10 flex justify-end">
              <button className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full hover:bg-seerakku-yellow hover:text-white transition-colors group shadow-xl">
                 <span className="font-medium">Start Creating</span>
                 <div className="bg-white rounded-full p-1 group-hover:bg-white/90">
                     <ArrowUpRight className="w-3 h-3 text-black" />
                 </div>
              </button>
           </div>

        </div>
      </div>
      
      {/* Inline styles for simple animation */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
