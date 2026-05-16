import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    question: "Is there a return policy?",
    answer: "Yes. If your book arrives with a printing or manufacturing defect, we will replace it at our own cost."
  },
  {
    question: "Can I add a personalized message?",
    answer: "Absolutely. Every Pixelgram book includes a dedicated section for a personal message to make your gift extra special."
  },
  {
    question: "What image formats are supported?",
    answer: "Our smart editor supports all standard formats, including JPG, PNG, and HEIC (the standard iPhone camera format)."
  },
  {
    question: "What kind of paper do you use?",
    answer: "We print exclusively on premium soft matte paper, giving your photos a high-end, art-store quality finish without any glaring reflections."
  },
  {
    question: "Do you ship outside India?",
    answer: "Currently, we only ship across India."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20 text-seerakku-black border-t border-gray-100">
      
      {/* Header Row */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-seerakku-yellow font-bold text-lg shadow-lg shrink-0">
          06
        </div>
        <div className="px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-600">
          FAQ
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Column: Heading */}
        <div className="w-full lg:w-1/3 flex flex-col shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
            Common <br/>
            <span className="text-seerakku-yellow font-semibold">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50 shadow-md' : 'bg-white hover:bg-gray-50'}`}
            >
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-medium text-neutral-900 pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-seerakku-yellow text-black' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
