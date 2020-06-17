import React from 'react';
import { connect } from 'react-redux' 


const CepTable =  ({
  erro,
  logradouro,
  cep,
  bairro,
  complemento,
  cidade,
  estado
}) => (
  <>
    { !erro && 
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
    </>
)


const mapStateToProps = (state) => ({
  ...state.address
})

export default connect(mapStateToProps)(CepTable);