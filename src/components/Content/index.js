import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'
import Loading from '../commom/Loading'
import {ReactComponent as Logo} from '../../assets/cepja.svg';

// STYLES
import { Wrapper, ButtonRed, LoadDIV, Span } from './style'

// ICONS
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

const Search = ({
  city,
  erro,
  handleSubmit,
  handlepopulateCity,
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
    
    {!searchedZidCode && <InputFindCep city={city} handlepopulateCity={handlepopulateCity} handleSubmit={handleSubmit} isLoading={isLoading}  />}

    {isLoading && 
    <LoadDIV>
      <Span>Carregando</Span><Loading />
    </LoadDIV>
    }
    
    {searchedZidCode && !isMapOpen && 
      <CepTable handleOpenMap={handleOpenMap} />
    }

    {erro && <div>CEP não encontrado.</div>}
    
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

