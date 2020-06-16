import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import adress from './index'

// ACTIONS
import { LOADING ,SUCESS } from './actions'

it('should action SUCESS update adress', () => {
  const before = deepfreeze({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    erro: false,
    isLoading: true
  });

  const action = deepfreeze({
    type: SUCESS,
    payload: {
      cep: '87208-094',
      logradouro: 'Rua Tijuco',
      complemento: 'de 286/287 ao fim',
      bairro: 'Zona 07',
      localidade: 'Cianorte',
      uf: 'PR',
      erro: false,
    }
  });

  const after = {
    cep: '87208-094',
    logradouro: 'Rua Tijuco',
    complemento: 'de 286/287 ao fim',
    bairro: 'Zona 07',
    localidade: 'Cianorte',
    uf: 'PR',
    erro: false,
    isLoading: false
  };

  expect(adress(before, action)).to.be.deep.equal(after);

});