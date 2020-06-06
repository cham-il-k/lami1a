import styled from 'styled-components'
import {bleuAzur, maxWidth, greenGrey, blanc} from './components/variables'

export const AppContainer =  styled.div`
  color: ${bleuAzur};
  padding:  auto;
  text-align: center;
  display: flex;
  margin: auto;
  position:relative;
  flex-direction: column;
  max-width:${maxWidth};
  flex: 1 0 auto;
  height:100vh;
  `