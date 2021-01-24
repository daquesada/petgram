import React from 'react';
import { Button as OnSubmitButton } from './styles';

export const Button = ({children, disabled=false, onClick})=>{
    return(
        <OnSubmitButton disabled={disabled} onClick={onClick}>
            {children}
        </OnSubmitButton>
    )
}