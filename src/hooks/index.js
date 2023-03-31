import { useState } from "react";
import { arabicTheme, englishTheme } from "styles";

export default function useTheme() {
  const VALID_LANGUAGES = ["ar", "en"];
  const currentLang = localStorage.getItem("lang");
  let selectedTheme = englishTheme;
  if (!currentLang || !VALID_LANGUAGES.includes(currentLang))
    localStorage.setItem("lang", "en");
  if (currentLang && currentLang === "ar") selectedTheme = arabicTheme;

  const [theme, setTheme] = useState(selectedTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { changeTheme, theme };
}
