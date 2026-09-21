import { useState, useEffect} from "react";

export function useTheme(initialState = false){

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('themeValue');
        
        return savedTheme !== null ? JSON.parse(savedTheme) : initialState
    });

    useEffect(() => {
        localStorage.setItem('themeValue', JSON.stringify(theme))

        if(theme){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[theme]);

    const toggleTheme = () => {
        setTheme((previous) => !previous)
    }

    return [theme,toggleTheme];
}

