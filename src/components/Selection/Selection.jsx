import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSelections, selectProducts  } from './../../store/selectors/selection';
import SelectionItem from '../SelectionItem/Selection-Item';
import { SelectionMenuContainer } from './selection-styled';


class Selection extends Component {

  render() {
    const { selections } = this.props
    const menus = selections.map(selection =>{
          const {id , ...otherProps} = selection;
          
        return <SelectionItem key={id} {...otherProps}></SelectionItem>
    })
    return (
      <SelectionMenuContainer>
        { menus }
      </SelectionMenuContainer>
    )  
   }  
}
const mapStateToProps = createStructuredSelector({
  selections: selectSelections 
})
export default connect(mapStateToProps)(Selection);
