import React from 'react';

const Search = ({
  cep,
  logradouro,
  complemento,
  bairro,
  localidade,
  uf,
  erro,
  handleSubmit,
  isLoading
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
            <td>{localidade}</td>
            <td>{uf}</td>
          </tr>
        </tbody>
      </table>
    }

    {erro && <div>CEP não encontrado.</div>}
  </div>
);

export default Search;
