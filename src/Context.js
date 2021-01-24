import React, { useState } from 'react';

export const Context = React.createContext()

export const Provider = ({children})=>{
    const [isAuth, setIsAuth] = useState(()=>
        sessionStorage.getItem('token')
    )

    const value = {
        isAuth,
        activateAuth:(token)=>{
            setIsAuth(true)
            sessionStorage.setItem('token',token)
        },
        removeAuth:()=>{
            setIsAuth(false);
            sessionStorage.removeItem('token');
        }
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}