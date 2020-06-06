import React from 'react'
import {ButtonThemed} from './Button-themed'

// google, inverted, handleClick
export default function Button({ children, ...props}) {
    return (
        <ButtonThemed {...props}>
            {children}
        </ButtonThemed>
    )
}
