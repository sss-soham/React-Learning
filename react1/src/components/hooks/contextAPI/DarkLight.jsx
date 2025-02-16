import { createContext, use, useState } from "react";

// Creating the Theme Context
export const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    // Function to toggle the theme
    const handleToggleTheme = () => {
        return setTheme((prev) => (prev === "dark" ? "light" : "dark"));  // Fixed "dard" typo
    };

    // Passing value to Context.Provider
    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// DarkLight Component to Consume Context
export const DarkLight = () => {
    const { theme, handleToggleTheme } = use(ThemeContext);  // Replaced use() with useContext()

    return (
        <div className={`p-4 h-lvh flex flex-col justify-center items-center
        ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h1
            className={`my-4 text-xl ${theme === "light" ? "text-gray-800" : "text-white"}`}
            >Dark Light Mode</h1>
            <p
            className={`my-4 text-xl ${theme === "light" ? "text-gray-800" : "text-white"}`}
            >Current Mode: {theme}</p>
            <button onClick={handleToggleTheme}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4">
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );
};
