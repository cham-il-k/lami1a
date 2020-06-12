import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectCollectionForOverview } from '../../store/selectors/selection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const CollectionPage = ({ sel ,match, history }) => {
  var selection = 
        (<>
          <CollectionTitle>{sel['title']}</CollectionTitle>
                  <CollectionItemsContainer>
                    {
                    Object.values(sel['collections']).map(collection => (
                      <CollectionItem key={collection['id']} collection={collection} />
                    ))
                    }
            </CollectionItemsContainer>
            </>)        
    return (
    <CollectionPageContainer>
      {selection}
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
   sel: selectCollectionForOverview(ownProps.match.params.selectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
