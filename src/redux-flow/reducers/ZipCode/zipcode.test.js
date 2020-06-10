import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import React from 'react'
import adress from './index'

// ACTIONS
import {UPDATE_ADRESS} from './actions'

it('adress should be a function', () => {
  expect(adress).to.be.a('function');
});

it('should action UPDATE_ADRESS update adress', () => {
  const before = deepfreeze({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    erro: false,
  });

  const action = deepfreeze({
    type: UPDATE_ADRESS,
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
  };

  expect(adress(before, action)).to.be.deep.equal(after);

});