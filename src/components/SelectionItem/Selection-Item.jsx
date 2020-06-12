import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  SelectionItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './selection-item-styled';

const SelectionItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   
  const imageUrlrep = `./assets${imageUrl}`
  const link = (!!linkUrl) ? linkUrl:'/' 
  return <SelectionItemContainer
            size={size}
            onClick={() => history.push(`shop${link}`)
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
