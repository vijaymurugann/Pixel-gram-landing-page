import React, { useState } from 'react';
import { Plus, Minus, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: "Wedding Album",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Nithin M.",
    location: "Kochi, Kerala",
    quote: "Pixelgram made my wedding album perfectly in under 10 minutes! The print quality is stunning."
  },
  {
    id: 2,
    company: "Paris Trip",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    name: "Mamitha Baiju",
    location: "Pune, Maharashtra",
    quote: "The easiest gift I've ever made. My parents cried when they saw the Paris trip book."
  },
  {
    id: 3,
    company: "Anniversary Gift",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Kavitha",
    location: "Bengaluru, Karnataka",
    quote: "My wife cried when she saw it... the most beautiful gift I've received."
  },
  {
    id: 4,
    company: "Goa Trip",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Sharan",
    location: "Chennai, Tamil Nadu",
    quote: "Best 3k I've spent. Hands down."
  },
  {
    id: 5,
    company: "Baby's First Year",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Ananya R.",
    location: "Mumbai, Maharashtra",
    quote: "My husband had professional photobooks made, but this matched the quality perfectly!"
  },
  {
    id: 6,
    company: "Diwali Reunion",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Priya S.",
    location: "Delhi, NCR",
    quote: "I finally did something with the hundreds of photos sitting on my phone. The auto-layout feature arranged our gather."
  },
  {
    id: 7,
    company: "Farewell Gift",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Rahul V.",
    location: "Hyderabad, Telangana",
    quote: "Ordered this for a colleague's farewell. The premium matte paper makes it look like an art book."
  }
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 7-12 business days to arrive safely at your doorstep."
  },
  {
    question: "Are there any hidden fees at checkout?",
    answer: "No surprises here. Our books are straightforwardly priced at ₹2,999 or ₹3,499, and all prices are completely GST inclusive."
  },
  {
    question: "Is there a 100% Satisfaction Guarantee?",
    answer: "Absolutely. If anything goes wrong, just let us know and we’ll reprint your order, free of charge."
  },
  {
    question: "Do you offer fast shipping options?",
    answer: "Yes, choose from a range of express and tracked options, with delivery to 50 countries."
  },
  {
    question: "Is there a return policy?",
    answer: "Yes. If your book arrives with a printing or manufacturing defect, we will replace it at our own cost."
  },
  {
    question: "What image formats are supported?",
    answer: "Our smart editor supports all standard formats, including JPG, PNG, and HEIC (the standard iPhone camera format)."
  },
  {
    question: "What kind of paper do you use?",
    answer: "We print exclusively on premium soft matte paper, giving your photos a high-end, art-store quality finish without any glaring reflections."
  }
];

const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => {
  return (
    <div className="w-[230px] md:w-[250px] shrink-0 bg-gray-50 rounded-[1.75rem] p-5 md:p-6 flex flex-col justify-between min-h-[220px] md:min-h-[230px] shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Top Row: Company & Avatar */}
      <div className="flex justify-between items-start mb-4">
        <div className="px-3 py-1 bg-white rounded-full border border-gray-100 font-bold text-gray-800 text-[10px] md:text-xs shadow-sm flex items-center justify-center h-8 w-fit shrink-0">
          <span>{item.company}</span>
        </div>
        <img 
          src={item.avatar} 
          alt={item.name} 
          className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
        />
      </div>

      {/* Quote Section */}
      <div className="flex-1 flex flex-col justify-start">
        <Quote className="w-4 h-4 text-seerakku-yellow fill-seerakku-yellow mb-2 shrink-0" />
        <p className="text-xs md:text-sm font-medium text-neutral-800 leading-snug">
          {item.quote}
        </p>
      </div>

      {/* Bottom: Author Info */}
      <div className="mt-4 pt-3 border-t border-gray-200/50 flex flex-col justify-end">
        <h4 className="text-xs font-bold text-neutral-900">{item.name}</h4>
        <div className="flex items-center justify-between text-gray-400 text-[9px] md:text-[10px] mt-0.5">
          <span>{item.company}</span>
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsAndFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Partition testimonials for two distinct scrolling rows
  const row1 = [testimonials[0], testimonials[2], testimonials[4], testimonials[6]];
  const row2 = [testimonials[1], testimonials[3], testimonials[5]];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20 text-seerakku-black border-t border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
        
        {/* Left Column: Testimonials (Auto-scrolling) */}
        <div className="w-full lg:w-1/2 flex flex-col overflow-hidden shrink-0">
          {/* Badge & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-base shadow-lg shrink-0">
              05
            </div>
            <div className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-600">
              TESTIMONIALS
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.15]">
            Loved by <br />
            <span className="text-seerakku-yellow font-semibold">Memory Keepers</span>
          </h2>

          {/* Marquee Rows with custom gradient edge masking */}
          <div className="marquee-mask flex flex-col gap-6 py-4 overflow-hidden relative w-full">
            {/* Row 1: Left to Right / Rightwards Scroll */}
            <div className="overflow-hidden w-full relative">
              <div className="animate-marquee-right flex gap-4">
                {[...row1, ...row1].map((item, idx) => (
                  <TestimonialCard key={`row1-${item.id}-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left / Leftwards Scroll */}
            <div className="overflow-hidden w-full relative">
              <div className="animate-marquee-left flex gap-4">
                {[...row2, ...row2, ...row2].map((item, idx) => (
                  <TestimonialCard key={`row2-${item.id}-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="w-full lg:flex-1 flex flex-col">
          {/* Badge & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-base shadow-lg shrink-0">
              06
            </div>
            <div className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-600">
              FAQ
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.15]">
            Common <br />
            <span className="text-seerakku-yellow font-semibold">Questions</span>
          </h2>

          {/* Accordion container */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-[1.75rem] overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'bg-gray-50 shadow-md' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-4 md:px-8 md:py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-base md:text-lg font-medium text-neutral-900 pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    openIndex === index ? 'bg-seerakku-yellow text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
