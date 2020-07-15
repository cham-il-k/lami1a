import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  SelectionItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './selection-item-styled';

const SelectionItem = ({ title, imageUrl, size, history, routeName, linkUrl, match }) => {

  const imageUrlrep = `./assets${imageUrl}`
  return <SelectionItemContainer id="SelectionItemContainer" onClick={() => history.push(`shop/${routeName}`)}>
            <BackgroundImageContainer imageUrl={imageUrlrep} className="background-image" />
            <ContentContainer >
              <ContentTitle className="content">{title.toUpperCase()}</ContentTitle>
              <ContentSubtitle > DISCOVER </ContentSubtitle>
            </ContentContainer>
          </SelectionItemContainer>
};

export default withRouter(SelectionItem);
