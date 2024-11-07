import React, { useEffect } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const ChangeTheme = ({ toggleTheme, currentTheme }) => {
  useEffect(() => {
    // Toggle `dark` class on the `body` element
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      onClick={toggleTheme}
      className="fixed top-[3%] right-[20%] z-50 text-[2rem]"
    >
      {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ChangeTheme;
