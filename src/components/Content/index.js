import React from 'react';
import Map from '../Maps'

// COMPONENTS
import InputFindCep from '../InputFindCep'
import CepTable from '../CepTable'

const Search = ({
  erro,
  handleSubmit,
  latitude,
  longitude,
  altitude,
  isLoading,
  map
}) => (
  <div>
    <InputFindCep handleSubmit={handleSubmit} isLoading={isLoading}  />

    {isLoading && <div>Carregando...</div>}
    
    {/* <CepTable /> */}

    {erro && <div>CEP não encontrado.</div>}
    
    {/* {map && 
     <Map latitude={Number(latitude)} longitude={Number(longitude)} altitude={Number(altitude)}/>
    } */}
    
  </div>
);

export default Search;

