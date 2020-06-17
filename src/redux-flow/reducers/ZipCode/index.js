import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS, BACKINITIALPAGE, LOADMAP, GOBACK } from './actions'

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
  isMapOpen: false,
  searchedZidCode: false
}

const ZipCode = createReducer(initialState, {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
    isMapOpen: false
  }),
  [SUCESS]: (state, action) => ({
    ...action.payload,
    isLoading: false,
    searchedZidCode: true
  }),
  [GOBACK]: (state, action) => ({
    ...state,
    isMapOpen: false,
  }),
  [BACKINITIALPAGE]: (state, action) => ({
    searchedZidCode: false,
    isMapOpen: false
  }),
  [LOADMAP]: (state, action) => ({
    ...state,
    isMapOpen: true
  })
});

export default ZipCode;