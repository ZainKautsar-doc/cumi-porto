import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'ID';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  const toggleLanguage = (selectedLang) => {
    if (selectedLang) {
      setLang(selectedLang);
    } else {
      setLang((prev) => (prev === 'ID' ? 'EN' : 'ID'));
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, isId: lang === 'ID' }}>
      {children}
    </LanguageContext.Provider>
  );
}
