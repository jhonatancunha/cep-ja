import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  position: fixed;
  align-items: center;
  color: #18181A;
  font-weight: bold;
  
  /* DESKTOP */
  @media (min-width: 810px){
    bottom: 40px;
    right: 69px;
  }

  /* MOBILE */
  @media (max-width: 809px){
    bottom: 20px;
    justify-content: center;
    width: 100vw;
  }

  /* MOBILE */
  @media (max-width: 450px){
    bottom: 10px;
  }

  svg{
    margin: 0 10px 0 10px;
  }

  @media (hover:hover){
    transition: all .2s ease-in-out;
    svg:hover{
      opacity: 80%;
    }
  }

  /*QUANDO MOBILE TECLADO ABRIR */
  @media (max-height: 590px){
    color: #F2F1F1;

    .git path{
      fill: #F2F1F1;
    }
  }

  @media (max-height: 385px){
    display: none;
  }
`

export const Span = styled.span`
  margin-right: 5px;
  font-size: 1.8em;
`
