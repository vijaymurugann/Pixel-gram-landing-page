import React from 'react';
import { Truck, Gift, Sparkles } from 'lucide-react';

interface Offer {
  text: string;
  badge?: string;
  icon: React.ComponentType<any>;
}

const offers: Offer[] = [
  {
    text: "Free shipping on all orders",
    badge: "FREE",
    icon: Truck
  },
  {
    text: "Buy 3 Get 1 Free",
    badge: "LIMITED OFFER",
    icon: Gift
  },
  {
    text: "Starts from ₹2,999",
    badge: "INTRO PRICE",
    icon: Sparkles
  }
];

export const AnnouncementBanner: React.FC = () => {
  const renderOffers = () => (
    <div className="flex items-center gap-16">
      {offers.map((offer, idx) => {
        const Icon = offer.icon;
        return (
          <div
            key={idx}
            className="flex items-center gap-3 text-sm text-white font-semibold group cursor-pointer hover:text-pink-100 transition-colors duration-200"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 border border-white/40 text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-200 shadow-sm">
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-wide">{offer.text}</span>
            {offer.badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider bg-white text-[#c91f8d] shadow-[0_2px_6px_rgba(0,0,0,0.15)] uppercase">
                {offer.badge}
              </span>
            )}
            {/* Visual Separator */}
            <span className="ml-8 text-white/50 font-light">•</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 h-[40px] bg-gradient-to-r from-[#c91f8d] via-[#d6389c] to-[#dd4fa9] border-b border-white/10 z-[60] flex items-center overflow-hidden select-none shadow-[0_2px_15px_rgba(201,31,141,0.25)]">
      <div className="relative w-full overflow-hidden marquee-mask flex items-center">
        <div className="animate-marquee-left flex items-center gap-16 whitespace-nowrap">
          {renderOffers()}
          {renderOffers()}
        </div>
      </div>
    </div>
  );
};
