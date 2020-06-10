import createReducer from '../createReducer'

// ACTIONS
import {UPDATE_ADRESS} from './actions'

const initialState = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  erro: false,
}

const ZipCode = createReducer(initialState, {
  [UPDATE_ADRESS]: (state, action) => action.payload
});

export default ZipCode;