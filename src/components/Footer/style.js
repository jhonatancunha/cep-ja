import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  position: absolute;
  align-items: center;
  color: #18181A;
  font-weight: bold;
  
  @media (max-width: 799px){
    bottom: 30px;
    justify-content: center;
    width: 100vw;
  }

  @media (min-width: 800px){
    bottom: 40px;
    right: 69px;
    bottom: 40px;

  }
  svg{
    margin: 0 10px 0 10px;
  }
`

export const Span = styled.span`
  margin-right: 5px;
  font-size: 1.8em;
`
