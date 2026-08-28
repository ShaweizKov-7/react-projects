import { useLocalStorage } from "./useLocalStorage"
import './styles.css';



export function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('Theme', 'Light');

    function changeTheme(){
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    }

    return (
        <div className="container" data-theme={theme}>
            <h1>German Third Reich</h1>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}