import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #212121;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;

  /* TELA PEQUENA */
  @media (max-height: 450px){
    font-size: 0.8em;
  }

`

export const Paragraph = styled.p`
  height: 40px;
  color: #F2F1F1;
  display: flex;
  align-items: center;

  @media (max-width: 600px){
    height: 30px;
  }

  /* TELA PEQUENA */
  @media (max-height: 450px){
    height:  20px;
  }
`

export const SpanCEP = styled.span`
  font-weight: bolder;
  margin-right: 10px;
`