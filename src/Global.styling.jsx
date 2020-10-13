import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin: 0;
  padding: 0; 
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    padding: 7px;
  }
}

body {
     box-sizing: border-box;
     font-family:sans-serif;
     font-weight:300;   
}
h1, h2 {
    margin-bottom:1rem;
}
`