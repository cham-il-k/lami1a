import styled from 'styled-components';
import {textBlack, textBlue, green1, green2, green4, blanc,maxWidth } from '../variables'

export const SelectionItemContainer = styled.div`
	height: 25rem;
	width:25rem;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border: 1px solid ${green1};
	overflow: hidden;
	border-radius:1rem;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.5;
			color:${textBlack}
		}
		&:first-child {
		}
		  	margin-right: .5rem;
		}
		&:last-child {
		  margin-left: .5rem;
		}
	@media screen and (max-width:992px) {
        padding: 0 auto;
        margin:2rem auto ;
		width:20rem;
	}
  	@media screen and (max-width:617px) {
        padding: 0 auto;
        margin:2rem auto ;
		width:20rem;
        flex-direction:column
  	}
`;
export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center, center;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
`;

export const ContentContainer = styled.div`
  height: 20rem;
  width: 20rem;
  padding: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${ green1 };
  border-radius:5px;
  background-color: ${blanc};
  opacity: 0.8;
  position: absolute;
	&:hover {
		color:${textBlue}
	}
	@media screen and (max-width:992px) {
        padding: 0 auto;
        margin:2rem auto ;
		    width:10rem;
		    height:10rem;
	}
  @media screen and (max-width:768px) {
        padding: 0 auto;
        margin:2rem auto ;
		width:7rem;
	
	}/* 	transform:rotate(-45deg);		
*/
`;
export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size:2rem;
 color: #4a4a4a;
 @media screen and (max-width:992px) {
	font-weight: normal;
  	margin-bottom: 6px;
  	font-size:1.5rem;
	}
@media screen and (max-width:768px) {
	font-weight: normal;
  	font-size:1.2rem;
 
  	}
`;
export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 1.5rem;
  color:${green4};
  @media screen and (max-width:992px) {
	font-size: 1.3rem;
 
	}
  	@media screen and (max-width:768px) {
		font-size: 1.1rem;
 
  	}
`

