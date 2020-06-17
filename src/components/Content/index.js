import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'

// STYLES
import { Wrapper, ButtonRed } from './style'

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

    {isLoading && <div>Carregando...</div>}
    
    {searchedZidCode && !isMapOpen && <ButtonRed onClick={goInitialPage}>
      <ArrowLeft />
        BUSCAR OUTRO CEP
      </ButtonRed>
    }
    {searchedZidCode && !isMapOpen && <CepTable />}

    {erro && <div>CEP não encontrado.</div>}
    
    {searchedZidCode && !isMapOpen && mapisReady && 
      <ButtonRed onClick={handleOpenMap} >
        VER NO MAPA
        <ArrowRight />
      </ButtonRed>
    }
    
    {console.log(mapisReady)}
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

