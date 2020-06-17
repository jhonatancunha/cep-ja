import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 800px){ 
    display: flex;
    flex-direction: column;
  }
`

export const ButtonRed = styled.button`
  @media (min-width: 800px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    cursor: pointer;

    background: #D42627;
    border: 0;
    color: #F2F1F1;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
    border-radius: 4px;

    /* MAP OPENED */
    width: ${props => props.isMapOpen ? '55px' : 'calc(100% + 110px)'};
    position: ${props => props.isMapOpen ? 'absolute' : ''};
    top: ${props => props.isMapOpen ? '50px' : '0'};
    left: ${props => props.isMapOpen ? '50px' : '0'};
    
    svg{
      height: 20px;
    }

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
`