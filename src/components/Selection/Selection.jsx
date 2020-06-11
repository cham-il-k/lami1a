import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelections} from './../../store/selectors/selection';
import SelectionItem from '../SelectionItem/Selection-Item';
import { SelectionMenuContainer } from './selection-styled';
import { fetchSelections } from './../../store/actions/selection'
import {firestore, transformCollectionSnapshotToMap} from './../../util/db/db'


class Selection extends Component {

  unsubscribeFromSelections= null

componentDidMount() {
    const {fetchSelections} = this.props
    this.unsubscribeFromSelections = firestore.collection('selections')
    .get().then(async snapshot => {
    const selectionsMap =  await transformCollectionSnapshotToMap(snapshot)
    console.log(selectionsMap)  

    fetchSelections(selectionsMap)
    })
}

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
const mapDispatchToProps = (dispatch) => ({
  fetchSelections:(selectionsMap) => dispatch(fetchSelections(selectionsMap))
})


export default connect(mapStateToProps, mapDispatchToProps)(Selection);
