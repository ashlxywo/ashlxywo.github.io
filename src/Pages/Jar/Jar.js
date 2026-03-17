import React, { useState, useEffect } from "react";
import "./Jar.css";

function Jar() {
  const [count, setCount] = useState(0);
  const [isDropping, setIsDropping] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  // Load count and dark mode preference from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("jarCount");
    if (savedCount) setCount(parseInt(savedCount));

    const savedDark = localStorage.getItem("jarDarkMode");
    if (savedDark) setDarkMode(savedDark === "true");
  }, []);

  // Save count
  useEffect(() => {
    localStorage.setItem("jarCount", count);
  }, [count]);

  // Save dark mode
  useEffect(() => {
    localStorage.setItem("jarDarkMode", darkMode);
  }, [darkMode]);

  const handleDrop = () => {
    if (isDropping) return;
    setIsDropping(true);
    setTimeout(() => {
      setCount(prev => prev + 1);
      setIsDropping(false);
    }, 600);
  };

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem("jarCount");
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
	<div className={`jar-page ${darkMode ? "dark-mode" : ""}`}>
		<h1>Zach PMO Jar</h1>

		<div className="jar-controls">
		<button className="drop-button" onClick={handleDrop}>
			Add To Jar
		</button>
		<button className="reset-button" onClick={handleReset}>
			Reset
		</button>
		<button className="dark-button" onClick={toggleDarkMode}>
			{darkMode ? "Light Mode" : "Dark Mode"}
		</button>
	</div>

<p className="count-text">Total: {count}</p>

      <div className="jar-container">
        <img src="./images/jar.png" alt="jar" className="jar-img" />
        {isDropping && (
          <img src="./images/zach.jpg" alt="drop" className="drop-item" />
        )}
      </div>
    </div>
  );
}

export default Jar;