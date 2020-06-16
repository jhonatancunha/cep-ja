import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS } from './actions'

export const initialState = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  isLoading: false
}

const ZipCode = createReducer(initialState, {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [SUCESS]: (state, action) => ({
    ...action.payload,
    isLoading: false
  })
});

export default ZipCode;