import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  color: #18181A;
  font-weight: bold;
  
  @media (min-width: 810px){
    bottom: 40px;
    right: 69px;
    bottom: 40px;
  }

  @media (max-width: 809px){
    bottom: 50px;
    justify-content: center;
    width: 100vw;
  }


  @media (max-width: 450px){
    bottom: 10px;
  }

  svg{
    margin: 0 10px 0 10px;
  }
`

export const Span = styled.span`
  margin-right: 5px;
  font-size: 1.8em;
`
