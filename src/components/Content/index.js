import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'
import Loading from '../commom/Loading'

// STYLES
import { Wrapper, ButtonRed, LoadDIV, Span, LoadDivMap } from './style'

// ICONS
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

const Search = ({
  city,
  erro,
  handleSubmit,
  handlepopulateCity,
  latitude,
  longitude,
  isLoading,
  searchedZidCode,
  handleOpenMap,
  isMapOpen,
  handleGoBack,
  mapisLoading
}) => (
  <Wrapper>
    
    {!searchedZidCode && 
      <InputFindCep 
        city={city} 
        handlepopulateCity={handlepopulateCity} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading}  
      />
    }

    {isLoading && 
    <LoadDIV>
      <Span>Carregando</Span><Loading />
    </LoadDIV>
    }
    
    {searchedZidCode && !isMapOpen && 
      <CepTable handleOpenMap={handleOpenMap} />
    }

    {mapisLoading &&
      <LoadDivMap>
        <Span>Carregando mapa</Span><Loading />
      </LoadDivMap>
    }

    {erro && 
      <div>CEP não encontrado.</div>
    }
    
    {isMapOpen  &&
    <>
    <ButtonRed onClick={handleGoBack} isMapOpen={isMapOpen} >
      <ArrowLeft />
    </ButtonRed>
     <Map isMapOpen={isMapOpen} latitude={Number(latitude)} longitude={Number(longitude)} />
    </>
    }
  </Wrapper>
);

export default Search;

