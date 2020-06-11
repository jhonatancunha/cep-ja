import createReducer from '../createReducer'

// ACTIONS
import { UPDATE_ADDRESS } from './actions'

export const initialState = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
}

const ZipCode = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload
});

export default ZipCode;