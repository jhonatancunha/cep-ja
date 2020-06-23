import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  position: fixed;
  align-items: center;
  color: #18181A;
  font-weight: bold;
  bottom: 10px;

  /* DESKTOP */
  @media (min-width: 861px){
    right: 20px;
  }

  /* MOBILE */
  @media (max-width: 860px){
   position: ${props => props.searchedZidCode && !props.isMapOpen ? 'relative' : 'fixed'};
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
