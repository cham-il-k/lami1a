import React from 'react';
import { RadioParent, RadioLabel, RadioContainer } from './radioButton.styled';

const RadioButton = ({ role, handleChange, children, ...props }) => {
  console.log({role})
  return(
    <RadioParent id='radio' >
        <RadioContainer >
          <RadioLabel>
            <input name="role" type="radio" value="fam"   checked={role === 'fam'} onChange={(e) => handleChange(e.target.value)} />
            <label htmlFor='fam'>Family</label>
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="role" value="org" checked={role === 'org'} onChange={(e) => handleChange(e.target.value)}/>
            <label htmlFor='org'>org</label>
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="role" value="user"  checked={role === 'user'}onChange={(e) => handleChange(e.target.value)}/>
            <label htmlFor="user"> user</label>
          </RadioLabel>
        </RadioContainer>
        </RadioParent>
        ) 
  
}

export default RadioButton;
