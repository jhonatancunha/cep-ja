import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
`


export const Button = styled.button`
  background: #D42627;
  border: 0;
  padding: 5px;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;

  svg{
    height: 28px;
  }

  @media (hover: hover){
    transition: all .2s ease-in-out;
    :hover{
      opacity: 80%;
    }
  }
`

export const Input = styled.input`
  background: #F2F1F1;
  width: 440px;
  padding: 15px;
  font-size: 1rem;
  color: #18181A;
  border-radius: 0px 4px 4px 0px;
  border: 0;
`