import React from 'react';
import { connect } from 'react-redux' 

// STYLES
import { Wrapper, Paragraph, Span } from './style'

const CepTable =  ({
  erro,
  logradouro,
  cep,
  bairro,
  complemento,
  uf,
  localidade,
  ibge,
  ddd
}) => (
  <>
    { !erro &&
    <Wrapper>
      <Paragraph>
        <Span>CEP:</Span>
        {cep}
      </Paragraph>
      <Paragraph>
        <Span>LOGRADOURO:</Span>
        {logradouro}
      </Paragraph>
      <Paragraph>
        <Span>COMPLEMENTO:</Span>
        {complemento}
      </Paragraph>
      <Paragraph>
        <Span>BAIRRO:</Span>
        {bairro}
      </Paragraph>
      <Paragraph>
        <Span>CIDADE:</Span>
        {localidade}
      </Paragraph>
      <Paragraph>
        <Span>ESTADO:</Span>
        {uf}
      </Paragraph>
      <Paragraph>
        <Span>DDD:</Span>
        {ddd}
      </Paragraph>
      <Paragraph>
        <Span>IBGE:</Span>
        {ibge}
      </Paragraph>
    </Wrapper>
    }
    </>
)


const mapStateToProps = (state) => ({
  ...state.address
})

export default connect(mapStateToProps)(CepTable);