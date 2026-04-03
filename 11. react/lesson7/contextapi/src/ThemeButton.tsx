// ThemeButton.tsx

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeButton must be used within ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};

export default ThemeButton;