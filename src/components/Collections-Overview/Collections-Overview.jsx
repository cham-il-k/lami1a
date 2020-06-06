import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom'
import CollectionPreview from '../Collection-Preview/Collection-Preview';
import { selectSelectionsForShopPreview } from './../../store/selectors/selection';

import { CollectionsOverviewContainer } from './collections-overview.styled';

const CollectionsOverview = ({ selections }) => {
  
  return(
      <CollectionsOverviewContainer>
        {
           
        selections.map( collection => {
          
          const  {id, ...otherCollectionProps} = collection;
         return     <CollectionPreview key={id} {...otherCollectionProps} />
        }
        )
      } 
      </CollectionsOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  selections: selectSelectionsForShopPreview
})

export default withRouter(connect(mapStateToProps)(CollectionsOverview));
