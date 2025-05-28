import React, { createContext, useState, useContext } from "react";
import { en } from "../translations/en";
import { ar } from "../translations/ar";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = isArabic ? ar : en;

    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
