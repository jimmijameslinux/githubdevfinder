import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";
import moon from "../assets/moon.png";
import sun from "../assets/brightness.png";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="header">
      <h1>devfinder</h1>
      <span onClick={toggleDarkMode} className="toggle-dark-mode">
        <p>{darkMode ? "Light" : "Dark"}</p>
        <img src={darkMode ? sun : moon} alt="Toggle Dark Mode" />
      </span>
    </div>
  );
};
