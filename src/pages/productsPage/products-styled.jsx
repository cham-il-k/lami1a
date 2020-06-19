import styled from 'styled-components';

export const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsTitle = styled.h2`
  font-size: 2rem;
  margin: 0 auto 30px;
`;

export const ProductsItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
