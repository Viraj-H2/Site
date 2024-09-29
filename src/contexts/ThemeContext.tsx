import { createContext, ReactNode, useEffect, useState, useRef } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: Theme;
  setSystemTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'auto',
  setTheme: () => {},
  systemTheme: 'light',
  setSystemTheme: () => {}
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('auto');
  const [systemTheme, setSystemTheme] = useState<Theme>('light');
  const isInitialRender = useRef(true);

  // Handle system theme detection and changes
  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemTheme = (matches: boolean) => {
      const newSystemTheme = matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
    };

    updateSystemTheme(darkMediaQuery.matches);

    const changeHandler = (event: MediaQueryListEvent) => updateSystemTheme(event.matches);
    darkMediaQuery.addEventListener('change', changeHandler);

    return () => darkMediaQuery.removeEventListener('change', changeHandler);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme && ['light', 'dark', 'auto'].includes(storedTheme)) {
      setTheme(storedTheme);
    } else {
      setTheme('auto');
    }
  }, []);

  // Apply theme
  useEffect(() => {
    // Skip applying theme on initial render if theme is 'auto'
    if (isInitialRender.current && theme === 'auto') {
      isInitialRender.current = false;
      return;
    }

    const appliedTheme = theme === 'auto' ? systemTheme : theme;

    document.documentElement.setAttribute('data-bs-theme', appliedTheme);
    
    if (theme !== 'auto') {
      localStorage.setItem('theme', theme);
    }

    isInitialRender.current = false;
    localStorage.setItem('theme', theme);
  }, [theme, systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme, setSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
