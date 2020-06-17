import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS, BACKINITIALPAGE } from './actions'

export const initialState = {
  cep: '',
  bairro: '',
  cidade: {
    ddd: '',
    ibge: '',
    nome: '',
  },
  complemento: '',
  estado: {
    sigla: ''
  },
  latitude: 0,
  longitude: 0,
  logradouro: '',
  isLoading: false,
  map: false,
  searchedZidCode: false
}

const ZipCode = createReducer(initialState, {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
    map: false
  }),
  [SUCESS]: (state, action) => ({
    ...action.payload,
    isLoading: false,
    map: true,
    searchedZidCode: true
  }),
  [BACKINITIALPAGE]: (state, action) => ({
    searchedZidCode: false
  })
});

export default ZipCode;