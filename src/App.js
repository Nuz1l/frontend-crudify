import { useState, useEffect } from "react";
import "./assets/css/style.css";
import AppRouter from "./components/AppRouter";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`app-container ${theme}`}>
            <button onClick={toggleTheme} className="theme-toggle">
                <span>{theme === "light" ? "Тёмная тема" : "Светлая тема"}</span>
                {theme === "light" ? "" : ""}
            </button>
            <AppRouter />
        </div>
    );
}

export default App;
