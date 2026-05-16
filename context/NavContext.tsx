
import React, { createContext, useContext, useState } from 'react';

type NavTheme = 'light' | 'dark';

interface NavContextType {
  navTheme: NavTheme;
  setNavTheme: (theme: NavTheme) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navTheme, setNavTheme] = useState<NavTheme>('dark'); // Default to dark (for Hero)

  return (
    <NavContext.Provider value={{ navTheme, setNavTheme }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavTheme = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavTheme must be used within a NavProvider');
  }
  return context;
};
