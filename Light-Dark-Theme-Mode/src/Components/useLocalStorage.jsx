import { useEffect, useState } from "react";


export function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(() => {
        let storedValue = JSON.parse(localStorage.getItem(key));

        try {
        return storedValue !== null ? 
               storedValue : defaultValue;
        } catch(e){
            console.log(e);
            return defaultValue;
        }
    });

    
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);


        return [
            value, setValue
        ]
}