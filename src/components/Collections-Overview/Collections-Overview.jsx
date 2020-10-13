import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import CollectionPreview from '../Collection-Preview/Collection-Preview';
import { selectSelections, selectIsLoading } from './../../store/selectors/selection';
//import WithSpinner from './../With-Spinner/With-Spinner'
import { CollectionsOverviewContainer } from './collections.overview.styled';

const CollectionsOverview = ({ selections, isLoading }) => {
  
  return(
    
    <CollectionsOverviewContainer>
        { selections.map((selection,index) => {
          // console.log({selection})
          const  {id, ...otherCollectionProps} = selection['collection'];
           return (<CollectionPreview   key={index}  id={id} {...otherCollectionProps}/>
        )
      })} 
      </CollectionsOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  selections: selectSelections,
  isLoading:selectIsLoading
 })
const CollectionsOverviewContain = compose(
  connect(mapStateToProps),
  withRouter,
)(CollectionsOverview)

export default CollectionsOverviewContain;
