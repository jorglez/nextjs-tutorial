"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setmode] = useState("dark");
  const toggle = () => {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
