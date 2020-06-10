import React from 'react';

const Search = ({
  cep,
  logradouro,
  complemento,
  bairro,
  localidade,
  uf,
  handleSubmit,
  isLoading
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input name="cep" />
      <button type="submit" disabled={isLoading}>
        Buscar 
      </button>
    </form>

    {isLoading && <div>Carregando...</div>}

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
  </div>
);

export default Search;
