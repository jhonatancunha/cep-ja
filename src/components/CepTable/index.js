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
  cidade,
  estado
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
        {cidade.nome}
      </Paragraph>
      <Paragraph>
        <Span>ESTADO:</Span>
        {estado.sigla}
      </Paragraph>
      <Paragraph>
        <Span>DDD:</Span>
        {cidade.ddd}
      </Paragraph>
      <Paragraph>
        <Span>IBGE:</Span>
        {cidade.ibge}
      </Paragraph>
    </Wrapper>
    }
    </>
)


const mapStateToProps = (state) => ({
  ...state.address
})

export default connect(mapStateToProps)(CepTable);