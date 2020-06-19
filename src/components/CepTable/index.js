import React from 'react';
import { connect } from 'react-redux' 

// STYLES
import { Wrapper, Paragraph, SpanCEP, SpanLoading } from './style'
import { ButtonRed, LoadDIV, Span } from '../Content/style'

import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'
import Loading from '../commom/Loading'


const CepTable =  ({
  data,
  handleOpenMap
}) => (
  <>
  {console.log(data)}
  {console.log(data.address.map((item) => item))}
    { data.address.map((city) => 
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

        {/* {!data.mapisReady &&
          <LoadDIV>
            <SpanLoading>Carregando mapa</SpanLoading><Loading />
          </LoadDIV>
        } */}

          <ButtonRed >
            VER NO MAPA
            <ArrowRight />
          </ButtonRed>

        {/* {!data.isMapOpen && data.mapisReady && 
          <ButtonRed onClick={handleOpenMap} >
            VER NO MAPA
            <ArrowRight />
          </ButtonRed>
        } */}
        </Wrapper>
    )
  }
  </>
)


const mapStateToProps = (state) => ({
  data: state.address
})

export default connect(mapStateToProps)(CepTable);