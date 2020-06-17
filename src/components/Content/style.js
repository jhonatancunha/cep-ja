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
    width: ${props => props.isMapOpen ? '55px' : '300px'};
    position: ${props => props.isMapOpen ? 'absolute' : ''};
    top: ${props => props.isMapOpen ? '50px' : '0'};
    left: ${props => props.isMapOpen ? '50px' : '0'};
    
    svg{
      height: 20px;
    }
  }
`
