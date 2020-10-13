import styled from 'styled-components';

export const SelectionMenuContainer = styled.div`
  height: 100%;
  width:100%;
  display: flex;
  justify-content: space-between;
  flex:0;
  flex-flow:wrap;
  margin-top:2rem;
  @media screen and (max-width:800px) {
        padding: 0 auto;
        margin:2rem auto ;
	  width:40rem;
	}
  @media screen and (max-width:600px) {
        padding: 0 auto;
        margin:1rem auto ;
	  width:20rem;
        flex-direction:column
  	}
   

  `;
