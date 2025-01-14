import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
} 