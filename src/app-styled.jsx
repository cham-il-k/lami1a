import styled from 'styled-components'
import {blue1, maxWidth} from './components/variables'

export const AppContainer =  styled.div`
  color: ${blue1};
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