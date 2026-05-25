import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'reffinances-dark-mode';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storedValue = localStorage.getItem(STORAGE_KEY);
    const initialDarkMode = storedValue !== null ? storedValue === 'true' : mediaQuery.matches;

    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);

    const handleChange = (event) => {
      const nextDarkMode = event.matches;
      setDarkMode(nextDarkMode);
      document.documentElement.classList.toggle('dark', nextDarkMode);
      localStorage.setItem(STORAGE_KEY, nextDarkMode.toString());
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem(STORAGE_KEY, next.toString());
      return next;
    });
  }, []);

  return [darkMode, toggleDarkMode];
};
