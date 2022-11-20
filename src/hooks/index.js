import { useState } from "react";
import { arabicTheme } from "styles";

export default function useTheme() {
  const [theme, setTheme] = useState(arabicTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { changeTheme, theme };
}
