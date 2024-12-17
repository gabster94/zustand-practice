import React from "react";
import { useTranslationStore } from "../stores/useTranslationStore"; // Import the store

export const LanguageSwitch = () => {
  // Step 1: Get the setLanguage function and current language from the store
  const { setLanguage, language } = useTranslationStore();

  return (
    <section className="dark">
      <h2>3. Zustand Translation</h2>
      <p>Make the buttons change the language used in the useTranslationStore</p>

      {/* Buttons to change the language */}
      <button onClick={() => setLanguage("es")}>Change to Spanish</button>
      <button onClick={() => setLanguage("en")}>Change to English</button>
      <button onClick={() => setLanguage("de")}>Change to German</button>
      <button onClick={() => setLanguage("se")}>Change to Swedish</button>
      <button onClick={() => setLanguage("fr")}>Change to French</button>

      {/* Display the current language */}
      <p>Current Language: {language.toUpperCase()}</p>
    </section>
  );
};
