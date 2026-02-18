import React, { createContext, useContext, useMemo, useState } from 'react';
import { Locale, supportedLocales, translations } from './translations';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: (typeof translations)[Locale];
};

const STORAGE_KEY = 'pet_locale';

const isSupportedLocale = (value: string | null | undefined): value is Locale => {
  return Boolean(value && supportedLocales.includes(value as Locale));
};

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (isSupportedLocale(fromStorage)) {
    return fromStorage;
  }

  const fromNavigator = window.navigator.language?.slice(0, 2);
  if (isSupportedLocale(fromNavigator)) {
    return fromNavigator;
  }

  return 'en';
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    }
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: translations[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
