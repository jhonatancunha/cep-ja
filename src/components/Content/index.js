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
  map
}) => (
  <Wrapper>
    {!searchedZidCode && <InputFindCep handleSubmit={handleSubmit} isLoading={isLoading}  />}

    {isLoading && <div>Carregando...</div>}
    
    {searchedZidCode && <ButtonRed onClick={goInitialPage}>
      <ArrowLeft />
      BUSCAR OUTRO CEP
    </ButtonRed>}
    {searchedZidCode && <CepTable />}

    {erro && <div>CEP não encontrado.</div>}
    
    {searchedZidCode && <ButtonRed>
      VER NO MAPA
      <ArrowRight />
    </ButtonRed>}
    
    {/* {map &&
     <Map latitude={Number(latitude)} longitude={Number(longitude)} altitude={Number(altitude)}/>
    } */}
    
  </Wrapper>
);

export default Search;

