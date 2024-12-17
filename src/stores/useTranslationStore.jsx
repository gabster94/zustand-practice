import { create } from "zustand"

// The avaliable translations
export const translations = {
  en: {
    greeting: "Hello!",
    welcome: "Welcome!"
  },
  es: {
    greeting: "¡Hola!",
    welcome: "¡Bienvenido!"
  },
  fr: {
    greeting: "Bonjour!",
    welcome: "Bienvenue!"
  },
  de: {
    greeting: "Hallo!",
    welcome: "Willkommen!"
  },
  se: {
    greeting: "Hej!",
    welcome: "Välkommen!"
  }
};

export const useTranslationStore = create((set) => ({
  language: "en", //Default langugae

  // Function to set a new language/update the language
  setLanguage: (newLanguage) => set({ language: newLanguage })
}));
