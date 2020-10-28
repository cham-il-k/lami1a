import React from 'react';
import { withRouter } from 'react-router-dom';
import {isEmpty} from './../../util/validators'
import  FormInput from './../FormInput/FormInput' 

import {SelectContainer
} from './select-item-styled';


export const SelectionTag = ({selects,handleChangeSelection}) => {
 if(!isEmpty(selects)){
   return (
    <SelectContainer>
      <select name='selections' defaultValue={selects[0]} onChange={(e) => handleChangeSelection(e.target.value)} label='selections'>
        {selects.map( (select,i) => (
          <option key= {i} value= {select['selection'] }>{select['selection']}</option>
      ))}
      </select>
    </SelectContainer>)
 }else {
   return (
   <FormInput
    type='text'
    name='selections'
    value={selects?selects[0]:''}
    onChange={handleChangeSelection}
    label='Selections'
    required
  />)
}
}


export const CollectionTag = ({collects, handleChangeCollection}) => {
  console.log({collects})
  if(!isEmpty(collects)){
    return (
     <SelectContainer>
       <select name='collections' defaultValue={collects?collects[0]:''} label='collections'>
         {collects.map( collection => (
           <option key={collection} value= {collection }>{collection}</option>
       ))}
       </select>
     </SelectContainer>)
  }else {
    return (
    <FormInput
     type='text'
     name='collections'
     value={collects?collects[0]:''}
     onChange={handleChangeCollection}
     label='Collection'
     required
   />)
 }}
