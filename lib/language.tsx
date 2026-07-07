"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "el" | "en";

type LanguageContextValue = {
  primary: Lang;
  toggle: () => void;
  setPrimary: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  primary: "el",
  toggle: () => {},
  setPrimary: () => {},
});

const STORAGE_KEY = "mp-primary-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default: Greek is primary (big), English shown as the translation underneath.
  const [primary, setPrimaryState] = useState<Lang>("el");

  // Restore the visitor's saved preference after mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "el" || stored === "en") setPrimaryState(stored);
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  const persist = useCallback((l: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const setPrimary = useCallback(
    (l: Lang) => {
      setPrimaryState(l);
      persist(l);
    },
    [persist]
  );

  const toggle = useCallback(() => {
    setPrimaryState((p) => {
      const next: Lang = p === "el" ? "en" : "el";
      persist(next);
      return next;
    });
  }, [persist]);

  return (
    <LanguageContext.Provider value={{ primary, toggle, setPrimary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
