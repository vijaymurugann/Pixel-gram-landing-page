import React from 'react';
import { 
  FileText, 
  History, 
  Truck, 
  Zap, 
  Smartphone, 
  Calendar, 
  BookOpen, 
  Gift 
} from 'lucide-react';

interface SpecItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: 'quality' | 'speed' | 'logistics';
}

const specsData: SpecItem[] = [
  {
    id: '01',
    icon: FileText,
    title: '320 GSM paper',
    description: 'Thick, premium pages that feel as good as they look. Designed to turn digital snaps into high-tactility art.',
    category: 'quality'
  },
  {
    id: '02',
    icon: BookOpen,
    title: 'Opens completely flat',
    description: 'Lay-flat binding means no photo ever disappears into the spine. Seamless panoramic landscape spreads.',
    category: 'quality'
  },
  {
    id: '03',
    icon: History,
    title: 'Prints that outlive you',
    description: 'Fade-resistant inks on archival-grade paper. Made to be passed down and treasured across generations.',
    category: 'quality'
  },
  {
    id: '04',
    icon: Gift,
    title: 'Gift-ready packaging',
    description: 'Every book arrives in a premium rigid box. Safe, durable, elegant protection. No wrapping needed.',
    category: 'quality'
  },
  {
    id: '05',
    icon: Smartphone,
    title: 'Made on your phone',
    description: 'No laptop, no complex layout software, no learning curve. Just your camera roll, a few taps, & you.',
    category: 'speed'
  },
  {
    id: '06',
    icon: Zap,
    title: 'Done in 5 minutes',
    description: 'Upload your photos. Our smart layout editor handles the rest. Beautifully arranged in seconds.',
    category: 'speed'
  },
  {
    id: '07',
    icon: Truck,
    title: 'Free shipping, always',
    description: 'Every order. Every book size. Delivered free to every single pin code within India.',
    category: 'logistics'
  },
  {
    id: '08',
    icon: Calendar,
    title: 'At your door in 7–12 days',
    description: 'Printed with utmost care, securely packed, and delivered safely straight to your doorstep.',
    category: 'logistics'
  }
];

export const Specs: React.FC = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20 text-neutral-900 border-t border-gray-100">
      
      {/* Badge Indicator */}
      <div className="flex items-center gap-4 mb-8">
        <div className="px-6 py-2 bg-neutral-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
          The Pixelgram Specs
        </div>
      </div>

      {/* Grid Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        <h2 className="lg:col-span-8 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
          Crafted for Quality, <br />
          Built for <span className="text-seerakku-yellow font-bold italic">Your Memories</span>
        </h2>
        <p className="lg:col-span-4 text-gray-500 text-lg leading-relaxed lg:pt-4">
          Every photo book uses fine-art museum materials and is made to outlive a lifetime, designed seamlessly directly from your phone.
        </p>
      </div>

      {/* Grid of Specification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {specsData.map((spec) => {
          const Icon = spec.icon;
          return (
            <div
              key={spec.id}
              className="relative rounded-[2.5rem] p-9 md:p-10 transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col gap-6 bg-[#f4f4f4] text-neutral-900 hover:bg-[#ebebeb] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
            >
              {/* Icon — anchored at top */}
              <div className="text-neutral-900">
                <Icon className="w-12 h-12 stroke-[1.2]" />
              </div>

              {/* Title + Description */}
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2 leading-tight">
                  {spec.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 font-normal">
                  {spec.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
