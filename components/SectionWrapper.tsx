
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavTheme } from '../context/NavContext';

interface SectionWrapperProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, theme, className = '', id }) => {
  const { setNavTheme } = useNavTheme();
  
  // Use a specialized rootMargin to detect when this section is behind the navbar (top of screen)
  // We create a "sensing usage" at the top of the viewport.
  // bottom: -90% pushes the bottom of the intersection box up to the top 10%.
  // top: 0% or slightly negative to account for navbar height?
  // Actually, we want to know if this section is *currently* at the top.
  // So we watch for it entering the top strip.
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-5% 0px -95% 0px', 
  });

  useEffect(() => {
    if (inView) {
      setNavTheme(theme);
    }
  }, [inView, theme, setNavTheme]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
};
