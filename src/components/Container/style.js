import styled from 'styled-components'

export const All = styled.div`
@media (min-width: 800px){
  display: flex;
  
  img{
    margin-left: 50px;
  }
}
`

export const Wrapper = styled.div`
  @media (min-width: 800px){
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 100vh;
    width: 50vw;

    .logoSvg{
      height: 250px;
    }
    
  }

`