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
    background-image: url(/static/media/background-right.02f3df8f.svg);
    background-position: right;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  }
`