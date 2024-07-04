import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="header">
      <h1>devfinder</h1>
      <span onClick={toggleDarkMode} className="toggle-dark-mode">
        <p>{darkMode ? "Light" : "Dark"} mode</p>
      </span>
    </div>
  );
};
