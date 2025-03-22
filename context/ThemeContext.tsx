import Colors, { ThemeType } from '@/constants/Colors';
import React, { createContext, useContext } from 'react';


const ThemeContext = createContext<ThemeType>(Colors);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={Colors}>{children}</ThemeContext.Provider>;
};
