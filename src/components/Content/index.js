import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'
import Loading from '../commom/Loading'

// STYLES
import { Wrapper, ButtonRed, LoadDIV, Span } from './style'

// ICONS
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'
const Search = ({
  erro,
  handleSubmit,
  latitude,
  longitude,
  altitude,
  isLoading,
  searchedZidCode,
  goInitialPage,
  handleOpenMap,
  isMapOpen,
  handleGoBack,
  mapisReady
}) => (
  <Wrapper>
    {!searchedZidCode && <InputFindCep handleSubmit={handleSubmit} isLoading={isLoading}  />}

    {isLoading && 
    <LoadDIV>
      <Span>Carregando</Span><Loading />
    </LoadDIV>
    }
    

    {searchedZidCode && !isMapOpen && <ButtonRed onClick={goInitialPage}>
      <ArrowLeft />
        BUSCAR OUTRO CEP
      </ButtonRed>
    }
    {searchedZidCode && !isMapOpen && <CepTable />}

    {erro && <div>CEP não encontrado.</div>}
    
    {!mapisReady && searchedZidCode &&
    <LoadDIV>
      <Span>Carregando mapa</Span><Loading />
    </LoadDIV>
    }

    {searchedZidCode && !isMapOpen && mapisReady && 
      <ButtonRed onClick={handleOpenMap} >
        VER NO MAPA
        <ArrowRight />
      </ButtonRed>
    }
    
    {isMapOpen  &&
    <>
    <ButtonRed onClick={handleGoBack} isMapOpen={isMapOpen} >
      <ArrowLeft />
    </ButtonRed>
     <Map isMapOpen={isMapOpen} latitude={Number(latitude)} longitude={Number(longitude)} altitude={Number(altitude)}/>
    </>
    }
    
  </Wrapper>
);

export default Search;

