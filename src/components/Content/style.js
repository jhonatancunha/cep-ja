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
    width: 300px;
    margin-top: 5px;
    border-radius: 4px;

    svg{
      height: 20px;
    }
  }
`