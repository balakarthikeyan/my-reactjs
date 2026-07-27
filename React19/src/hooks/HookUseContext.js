import { createContext, useContext, useState } from "react";

// Create context with default value
const ThemeContext = createContext("light");

const HookUseContext = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ThemeDisplay />
            </div>
        </ThemeContext.Provider>
    );
};

const ThemeDisplay = () => {
    const theme = useContext(ThemeContext);

    return <h2>Theme from Context: {theme}</h2>;
};

export default HookUseContext;