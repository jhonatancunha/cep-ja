import {  createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    height: 100vh;
    width: 100vw;
    background-color: #18181A;
    background-repeat: no-repeat;

    /* ONLY DESKTOP */
    @media (min-width: 800px){
      background-image: url(${props => props.EllipseDesktop});
      background-position: right;
    }
    /* ONLY MOBILE */
    @media (max-width: 799px){
      background-image: url(${props => props.EllipseMobile});
      background-position: bottom;
    }
  }
  
`