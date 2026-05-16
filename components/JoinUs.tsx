import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const JoinUs: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Background Image - Team/Community Theme */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
          alt="Join Pixelgram Community"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Top Left Badge */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20 flex items-center gap-4">
         <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg shrink-0">
            07
          </div>
          <div className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-900 shadow-sm">
            Join us
          </div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl flex flex-col items-center text-center">
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-10 max-w-4xl">
          Join the team today and start {' '}
          <span className="inline-flex items-center justify-center align-middle mx-1 relative">
             <div className="w-16 h-10 md:w-20 md:h-12 bg-seerakku-yellow rounded-full flex items-center justify-center rotate-[-6deg]">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
             </div>
          </span>
          {' '} your journey toward excellence!
        </h2>

        {/* Subtext and Link */}
        <div className="max-w-xl text-gray-500 text-sm md:text-lg leading-relaxed font-light">
           <a href="#" className="inline-flex items-center text-black font-semibold underline decoration-1 underline-offset-4 hover:text-seerakku-green hover:decoration-seerakku-green transition-all mr-1.5">
             Join our team <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
           </a>
           to grow your skills, connect with a supportive community, and achieve your goals. Start your journey to excellence today!
        </div>

        {/* Floating Image Decoration (Bottom Right) */}
        <div className="hidden lg:block absolute -bottom-12 -right-12 w-64 h-48 bg-white p-2 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
               alt="Team Activity" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
           </div>
        </div>

      </div>

    </div>
  );
};
