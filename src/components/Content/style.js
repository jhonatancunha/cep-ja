import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* DESKTOP */
    @media (max-width: 809px){
      width: 80vw;
      max-height: calc(100vh - 410px);
      overflow-y: scroll;
      margin-top: 20px;
    }

    @media (max-width: 550px){
      max-height: 55vh;
    }
`

export const ButtonRed = styled.button`
cursor: pointer;    
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 4px;
  
  margin-top: 5px;
  padding: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: #F2F1F1;
  background: #D42627;

  position: ${props => props.isMapOpen ? 'absolute' : ''};
  top: ${props => props.isMapOpen ? '50px' : '0'};
  left: ${props => props.isMapOpen ? '50px' : '0'};
  width: ${props => props.isMapOpen ? '55px' : 'calc(100%)'};
  height: 50px;

  svg{
    height: 20px;
  }
  
  /* MOBILE */
  @media (max-width: 809px){
    width: ${props => props.isMapOpen ? '55px' : '100%'};
  }

  /* DESKTOP */
  @media (min-width: 810px){
    transition: all .2s ease-in-out;

    @media (hover: hover){
      :hover{
        background: #F2F1F1;
        color: #D42627;
        border: 2px solid #D42627;
      }

      :hover svg path{
        fill: #D42627;
      }
    }
  }
`

export const ButtonBack = styled(ButtonRed)`
  /* MOBILE */
  @media (max-width: 809px){
    width: ${props => props.isMapOpen ? '55px' : '80vw'};
    margin: 0 auto;
  }
`

export const LoadDIV = styled.div`
  display:flex;
  justify-content: center;
  margin: 20px;
`

export const Span = styled.span`
  color: #F2F1F1;
  font-size: 1.1em;
  font-weight: bolder;
`
export const LoadDivMap = styled.div`
  background: #18181AF0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`