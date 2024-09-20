import { createContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'auto',
  setTheme: () => {},
  systemTheme: 'light',
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('auto');
  const [systemTheme, setSystemTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemTheme = () => {
      setSystemTheme(darkMediaQuery.matches ? 'dark' : 'light');
    };

    updateSystemTheme();
    darkMediaQuery.addEventListener('change', updateSystemTheme);

    return () => darkMediaQuery.removeEventListener('change', updateSystemTheme);
  }, []);

  useEffect(() => {
    const appliedTheme = theme === 'auto' ? systemTheme : theme;

    if (appliedTheme === 'auto') {
      document.documentElement.removeAttribute('data-bs-theme');
    } else {
      document.documentElement.setAttribute('data-bs-theme', appliedTheme);
    }

    localStorage.setItem('theme', theme);
  }, [theme, systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
