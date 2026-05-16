import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';
import { NavProvider } from './context/NavContext';
import { SectionWrapper } from './components/SectionWrapper';
import { Preloader } from './components/Preloader';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <NavProvider>
      <div className="min-h-screen w-full bg-seerakku-black relative">
          <Navbar />
          {/* Main Content Flow - Full Width */}
          <main className="w-full flex flex-col">
              <SectionWrapper theme="dark">
                <Hero onCtaClick={() => console.log("Start Impact Clicked")} />
              </SectionWrapper>
              
              <SectionWrapper theme="light">
                <About />
              </SectionWrapper>
              
              <SectionWrapper theme="light">
                <Programs />
              </SectionWrapper>
              
              <SectionWrapper theme="light">
                <Services />
              </SectionWrapper>
              
              <SectionWrapper theme="light">
                <Testimonials />
              </SectionWrapper>
              
              <SectionWrapper theme="light">
                <FAQ />
              </SectionWrapper>
{/*               
              <SectionWrapper theme="dark">
                <JoinUs />
              </SectionWrapper> */}
              
              <SectionWrapper theme="dark">
                <Footer />
              </SectionWrapper>
          </main>
      </div>
    </NavProvider>
  );
};

export default App;