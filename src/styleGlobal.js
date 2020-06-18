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
    overflow: hidden;

    /* ONLY DESKTOP */
    @media (min-width: 810px){
      background-image: url(${props => props.EllipseDesktop});
      background-position: right;
      background-size: contain;
    }
    /* ONLY MOBILE */
    @media (max-width: 809px){
      background-image: url(${props => props.EllipseMobile});
      background-position: bottom;
      background-size: 100% 45%;
    }

    /* ARRUMANDO QUANDO TECLADO ABRIR */
    @media (max-height: 385px){
      background-image: none;
    }
  }
  
`