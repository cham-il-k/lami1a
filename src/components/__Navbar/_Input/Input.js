import React from 'react'
import {StyledInput} from './Input-styled'

// google, inverted, handleClick
export default function Input({ children, ...props}) {
    return (
        <StyledInput {...props}>
            {children}
        </StyledInput>
    )
}
