import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;

   /* MOBILE */
  @media (max-width: 809px){
    width: 80vw;
  }
  
  @media (min-width: 623px){
    width: 80%;
  }

  section{
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
  
  
`


export const Button = styled.button`
  background: #D42627;
  border: 0;
  padding: 5px;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
  width: 80px;

  svg{
    height: 28px;
  }

  @media (hover: hover){
    transition: all .2s ease-in-out;
    :hover{
      filter: brightness(60%);
    }
  }
`

export const Input = styled.input`
  background: #F2F1F1;
  padding: 15px;
  font-size: 1rem;
  color: #18181A;
  border-radius: 0px 4px 4px 0px;
  border: 0;
  width: 100%;
`

export const Select = styled.select`
  display: flex;
  text-align: center;
  background: #F2F1F1;
  color: #18181A;
  border: 0;
  border-radius: 0px 4px 4px 0px;
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #D42627;
  border-radius: 4px 0px 0px 4px;
  width: 82px;

  span{
    color: #F2F1F1;
    font-weight: bold;
    padding: 5px;
  }
  `