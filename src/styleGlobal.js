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
    background-color: #18181A;
    background-repeat: no-repeat;
    overflow-x: hidden;


    /* ONLY DESKTOP */
    @media (min-width: 810px){
      background-image: url(${props => props.EllipseDesktop});
      background-position: right;
      background-size: contain;
    }

    @media (max-width: 1105px){
      background-size: 40% 100%;
    }
    
    /* ONLY MOBILE */
    @media (max-width: 869px){
      background-image: url(${props => props.EllipseMobile});
      background-position: bottom;
      background-size: 100% 39%;
    }


    /* ARRUMANDO QUANDO TECLADO ABRIR */
    @media (max-height: 590px){
      background-image: none;
    }

    background-attachment: fixed;
  }

  #root{
    height: 100%;
    width: 100%;
  }
  
`