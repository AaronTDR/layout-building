import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(
    "🚀 ~ file: ThemeProvider.tsx:7 ~ ThemeProvider ~ isDarkMode:",
    isDarkMode
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set the body background color based on the selected theme
  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = isDarkMode
      ? "var(--background-color-primary-dark)"
      : "var(--background-color-primary-light)";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
