import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import CollectionPreview from '../Collection-Preview/Collection-Preview';
import { selectSelections } from './../../store/selectors/selection';
import WithSpinner from './../With-Spinner/With-Spinner'
import { CollectionsOverviewContainer } from './collections.overview.styled';

const CollectionsOverview = ({ selections }) => {
 console.log(`collection Overview`) 
  return(
      <CollectionsOverviewContainer>
        { selections.map( (collection,index) => {
          const  {id, ...otherCollectionProps} = collection;
           return <CollectionPreview  key={index} id={id} isLoading={true}  {...otherCollectionProps}  />
          }
        )} 
      </CollectionsOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  selections: selectSelections
})

const CollectionsOverviewContain = compose(
  connect(mapStateToProps),
  withRouter,
  WithSpinner
)(CollectionsOverview)

export default (CollectionsOverviewContain);
