import React, { useState } from 'react'

export function useLocalStorage(key, initalValue) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initalValue
        } catch (error) {
            return initalValue
        }
    })

    const setLocalStoorage = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setValue(value)
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setLocalStoorage]
}
