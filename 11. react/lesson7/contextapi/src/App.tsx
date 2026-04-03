// App.tsx

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Layout from "./LAyout";
// import './App.css'

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${"Container"} ${theme === 'light' ? 'LightMode' : "DarkMode"}`}>
          <Layout />
      </div>
      
    </ThemeContext.Provider>
  );
};

export default App;