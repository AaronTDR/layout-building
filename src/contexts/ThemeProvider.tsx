import { useState, createContext, ReactNode, useEffect } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleTheme = () => {
    // setIsDarkMode(!isDarkMode);
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Set the body background color based on the selected theme
  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = isDarkMode
      ? "var(--background-primary-dark-mode)"
      : "var(--background-primary-light-mode)";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
