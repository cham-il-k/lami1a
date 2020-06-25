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
  return <SelectionItemContainer
            onClick={() => history.push(`shop/${routeName}`)
            }
             >
            <BackgroundImageContainer
              className='background-image'
              imageUrl={imageUrlrep}
            />
            <ContentContainer className='content'>
              <ContentTitle>{title.toUpperCase()}</ContentTitle>
              <ContentSubtitle > DISCOVER </ContentSubtitle>
            </ContentContainer>
          </SelectionItemContainer>
};

export default withRouter(SelectionItem);
