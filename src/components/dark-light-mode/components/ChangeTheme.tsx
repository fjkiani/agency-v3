import React, { useEffect } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const ChangeTheme = ({ toggleTheme, currentTheme }) => {
  useEffect(() => {
    // Toggle the "dark-theme" class on the body element based on the current theme
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [currentTheme]);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      onClick={toggleTheme}
      className="fixed top-[3%] right-[3%] z-50 text-[2rem]"
    >
      {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ChangeTheme;
