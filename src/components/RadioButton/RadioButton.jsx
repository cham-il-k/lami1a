import React, {useState, useEffect} from 'react';
import { RadioParent, RadioLabel, RadioContainer } from './radioButton.styled';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentRole } from './../../store/selectors/profil'
const RadioButton = ({ role, handleChange, children, ...props }) => {
  console.log({role})
  const [roleUser, setRole] = useState(role)
  useEffect(() => {
    console.log({roleUser})
    
  }, [roleUser])
  return(
    <RadioParent id='radio' >
        <RadioContainer >
          <RadioLabel>
            <input name="role" type="radio" value="fam"   checked={roleUser === 'fam'} onChange={(e) => setRole(e.target.value)} />
            <label htmlFor='fam'>Family</label>
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="role" value="org" checked={roleUser === 'org'} onChange={(e) => setRole(e.target.value)}/>
            <label htmlFor='org'>org</label>
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="role" value="user"  checked={roleUser === 'user' } onChange={(e) => setRole(e.target.value)}/>
            <label htmlFor="user"> user</label>
          </RadioLabel>
        </RadioContainer>
        </RadioParent>
        ) 
  
}

const mapStateToProps = createStructuredSelector ({
  role: selectCurrentRole
})
export default compose(connect(
  mapStateToProps
))(RadioButton);
