import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'

// STYLES
import { Wrapper, GoBackHome } from './style'

// ICONS
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

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
    
    {searchedZidCode && <GoBackHome onClick={goInitialPage}>
      <ArrowLeft />
      BUSCAR OUTRO CEP
    </GoBackHome>}
    {searchedZidCode && <CepTable />}

    {erro && <div>CEP não encontrado.</div>}
    
    {/* {map && 
     <Map latitude={Number(latitude)} longitude={Number(longitude)} altitude={Number(altitude)}/>
    } */}
    
  </Wrapper>
);

export default Search;

