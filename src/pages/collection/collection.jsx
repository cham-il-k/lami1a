import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

//import { selectSelectionForShopCollection } from '../../store/selectors/selection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const CollectionPage = ({ sel ,match, history }) => {
  var collection; 
  sel.forEach(selection => {
    console.log(`collection Page ${selection}`)
    collection = <>
          <CollectionTitle>{selection['title']}</CollectionTitle>
                  <CollectionItemsContainer>
                    {Object.values(selection['collections']).map(collection => (
                      <CollectionItem key={collection['id']} collection={collection} />
                    ))}
                  </CollectionItemsContainer>
            </>
              })

  return (
    <CollectionPageContainer>
      {collection}
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
//  sel: selectSelectionForShopCollection(ownProps.match.params.selectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
