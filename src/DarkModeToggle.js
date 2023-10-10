import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./styles/DarkModeToggle.css";

const DarkModeToggle = ({ mode, onClick }) => {
  return (
    <div className={`dark-mode-toggle ${mode}`}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
      </button>
    </div>
  );
};

export default DarkModeToggle;
