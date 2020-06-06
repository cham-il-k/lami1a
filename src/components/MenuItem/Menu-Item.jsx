import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item-styled';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   
  const imageUrlrep = `..${imageUrl}`

  return <MenuItemContainer
            size={size}
            onClick={() => { history.push(`${match.path}shop/${title}`)
            }}
          >
            <BackgroundImageContainer
              className='background-image'
              imageUrl={imageUrlrep}
            />
            <ContentContainer className='content'>
              <ContentTitle>{title.toUpperCase()}</ContentTitle>
              <ContentSubtitle > DISCOVER </ContentSubtitle>
            </ContentContainer>
          </MenuItemContainer>
};

export default withRouter(MenuItem);
