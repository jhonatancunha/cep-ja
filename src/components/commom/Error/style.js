import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 40px;
  left: ${props => props.status ? '0' : '-300vw'};
  transition: all .2s ease-in-out;
`

export const WrapperInformation = styled.div`
  background: #F2F1F1;
  padding: 10px;
  border-radius: 0px 3px 3px 0px;
`

export const Description = styled.p`
  color: #18181A;
  font-weight: 600;
`

export const Exit = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1em;
  color: #18181A;
  opacity: 0.4;

  @media (hover:hover){
    transition: opacity .2s ease-in-out;
    :hover{
      opacity: 1;
    }
  }

  @media (max-width: 450px){
    font-size: 1.5em;
    right: 10px;
  }
`

export const WrapperIcon = styled.div`
  background: ${props => props.backgroundColor};
  padding: 10px;
  border-radius: 3px 0px 0px 3px;
  display: flex;
  align-items: center;
}
`

export const Title = styled.h3`
  color: ${props => props.titleColor};
  text-shadow: 1px 0 2px #18181a,0px -2px 0px #18181a,-2px 0px 0px #18181a,0 2px 0 #18181a,2px 0 0 #18181a;
  margin-bottom: 5px;
`
