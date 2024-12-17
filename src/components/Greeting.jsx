import { useTranslationStore } from "../stores/useTranslationStore"
import { translations } from "../stores/useTranslationStore";

export const Greeting = () => {

  // Step 1: Access the current language and translations from the store
  const { language } = useTranslationStore();

  // Get the translations for the current language
  const currentTranslations = translations[language];

  return (
    <section className="light">
      <h2>2. Zustand Translation</h2>
      <p>Instead of hardcoded values, get the translations from the useTranslationStore</p>
      <p>{currentTranslations.greeting}</p>
      <p>{currentTranslations.welcome}</p>
      <p>Hello!</p>
      <p>Welcome!</p>
    </section>
  )
}
