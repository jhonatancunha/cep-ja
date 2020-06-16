import React from 'react';
import Map from '../Maps'

const Search = ({
  cep,
  logradouro,
  complemento,
  bairro,
  estado,
  cidade,
  erro,
  handleSubmit,
  latitude,
  longitude,
  altitude,
  isLoading,
  map
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input 
        name="cep" 
        pattern="[0-9]{8}"
        title="É permitido somente números e exatamente 8 dígitos"
        />
      <button type="submit" disabled={isLoading}>
        Buscar 
      </button>
    </form>

    {isLoading && <div>Carregando...</div>}
    
    {!erro && 
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{cep}</td>
            <td>{logradouro + ' ' + complemento}</td>
            <td>{bairro}</td>
            <td>{cidade.nome}</td>
            <td>{estado.sigla}</td>
          </tr>
        </tbody>
      </table>
    }

    {erro && <div>CEP não encontrado.</div>}
    
    {map && 
     <Map latitude={Number(latitude)} longitude={Number(longitude)} altitude={Number(altitude)}/>
    }
    
      </div>
);

export default Search;
