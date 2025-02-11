import { useDarkMode } from "./DarkmodeProvider.tsx";

export default function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useDarkMode();



    return (
        <button onClick={toggleDarkMode} className="float-right">Dark Mode
        </button>
    )


}