import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    /* DESKTOP */
    @media (max-width: 809px){
      width: 80vw;
    }
`

export const ButtonRed = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #D42627;
  color: #F2F1F1;
  border: 0;
  margin-top: 5px;
  border-radius: 4px;
  padding: 10px;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;    

  position: ${props => props.isMapOpen ? 'absolute' : ''};
  top: ${props => props.isMapOpen ? '50px' : '0'};
  left: ${props => props.isMapOpen ? '50px' : '0'};
  width: ${props => props.isMapOpen ? '55px' : 'calc(100% + 110px)'};

  svg{
    height: 20px;
  }
  
  /* MOBILE */
  @media (max-width: 809px){
    width: ${props => props.isMapOpen ? '55px' : '100%'};
  }

  /* DESKTOP */
  @media (min-width: 810px){

    @media (hover: hover){
      transition: all .2s ease-in-out;
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

export const LoadDIV = styled.div`
  display:flex;
  justify-content: center;
  margin: 20px;
`

export const Span = styled.span`
  color: #F2F1F1;
  font-size: 1.1em;
  font-weight: bolder;

  @media (max-width: 809px){
    color: #18181A;
  }
`