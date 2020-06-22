import React from 'react';
import { connect } from 'react-redux' 

// STYLES
import { Wrapper, Paragraph, SpanCEP } from './style'
import { ButtonRed } from '../Content/style'

import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'

const CepTable =  ({
  data,
  handleOpenMap
}) => (
  <>
  {console.log(data)}
    { data.address.map((city, index) => 
      <Wrapper key={city.cep}>
        <Paragraph>
        <SpanCEP>CEP:</SpanCEP>
            {city.cep}
        </Paragraph>
        <Paragraph>
          <SpanCEP>LOGRADOURO:</SpanCEP>
          {city.logradouro}
        </Paragraph>
        <Paragraph>
          <SpanCEP>COMPLEMENTO:</SpanCEP>
          {city.complemento}
        </Paragraph>
        <Paragraph>
          <SpanCEP>BAIRRO:</SpanCEP>
          {city.bairro}
        </Paragraph>
        <Paragraph>
          <SpanCEP>CIDADE:</SpanCEP>
          {city.localidade}
        </Paragraph>
        <Paragraph>
          <SpanCEP>ESTADO:</SpanCEP>
          {city.uf}
        </Paragraph>
        <Paragraph>
          <SpanCEP>DDD:</SpanCEP>
          {city.ddd}
        </Paragraph>
        <Paragraph>
          <SpanCEP>IBGE:</SpanCEP>
          {city.ibge}
        </Paragraph> 

        <ButtonRed value={city.cep} onClick={handleOpenMap([city.logradouro, city.uf, city.localidade])}>
          VER NO MAPA
          <ArrowRight />
        </ButtonRed>
      </Wrapper>
    )
  }
  </>
)

const mapStateToProps = (state) => ({
  data: state.address
})

export default connect(mapStateToProps)(CepTable);