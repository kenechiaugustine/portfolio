import { createContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<[ThemeContextType] | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };
    darkMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const name: 'dark' | 'light' = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  const contextValue: [ThemeContextType] = [{ themeName, toggleTheme }];

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };