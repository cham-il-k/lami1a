import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelections} from './../../store/selectors/selection';
import SelectionItem from '../SelectionItem/Selection-Item';
import { SelectionMenuContainer } from './selection.styled';
import { fetchSelectionsStart } from './../../store/actions/selection'

const Selection = ({ selections, fetchSelections }) => {
   
  console.log({selections})
  const menus = selections.map((selection) => {
    console.log({selection})
    const {id , ...otherProps} = selection['collection'];
        return <SelectionItem key={id} {...otherProps}></SelectionItem>
    })
    
  return (
      <SelectionMenuContainer>
        { menus }
      </SelectionMenuContainer>
    )  
    
}
const mapStateToProps = createStructuredSelector({
  selections: selectSelections 
})
const mapDispatchToProps = (dispatch) => ({
  fetchSelections:() => dispatch(fetchSelectionsStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Selection);
