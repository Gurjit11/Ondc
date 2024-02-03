import React, { createContext, useState } from "react";

// Create a new context for the theme
export const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggleTheme function to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
