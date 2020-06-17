import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 800px){ 
    display: flex;
    flex-direction: column;
  }
`

export const GoBackHome = styled.button`
  @media (min-width: 800px){
    display: flex;
    height: 50px;
    align-items: center;
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
      margin-right: 20px;
    }
  }
`