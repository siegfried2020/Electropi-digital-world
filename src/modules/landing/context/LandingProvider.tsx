"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

type LandingContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  isMobile: boolean;
  isDesktop: boolean;
};

const LandingContext = createContext<LandingContextValue | null>(null);

const THEME_STORAGE_KEY = "aivex-theme";

export function LandingProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isMobile = width < 860;

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      menuOpen,
      toggleMenu,
      closeMenu,
      isMobile,
      isDesktop: !isMobile,
    }),
    [theme, toggleTheme, menuOpen, toggleMenu, closeMenu, isMobile]
  );

  return (
    <LandingContext.Provider value={value}>{children}</LandingContext.Provider>
  );
}

export function useLanding() {
  const context = useContext(LandingContext);
  if (!context) {
    throw new Error("useLanding must be used within LandingProvider");
  }
  return context;
}
