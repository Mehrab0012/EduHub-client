import { Moon, Sun } from "lucide-react"; // optional icon package
import { useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl transition-all bg-gray-200  dark:bg-gray-800 hover:scale-105"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5  text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggleButton;