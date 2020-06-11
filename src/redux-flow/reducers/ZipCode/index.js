import createReducer from '../createReducer'

// ACTIONS
import { UPDATE_ADDRESS } from './actions'

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
  [UPDATE_ADDRESS]: (state, action) => action.payload
});

export default ZipCode;