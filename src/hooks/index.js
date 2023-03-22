import { useState } from "react";
import { arabicTheme, englishTheme } from "styles";

export default function useTheme() {
  const [theme, setTheme] = useState(englishTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { changeTheme, theme };
}
