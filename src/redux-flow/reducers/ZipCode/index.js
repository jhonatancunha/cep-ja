import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS, BACKINITIALPAGE, LOADMAP, GOBACK, ERROR } from './actions'

export const initialState = {
  address: [],
 
  longitude: 0,
  latitude: 0,
  isLoading: false,
  searchedZidCode: false,
  erro: false,
  isMapOpen: false,
  mapisLoading: false,
  mapError: false
}

const ZipCode = createReducer(initialState, {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: true,

  }),
  [SUCESS]: (state, action) => ({
    ...state,
    address: action.payload,
    isLoading: false,
    searchedZidCode: true,
    erro: false,
    mapError: false,
  }),
  [GOBACK]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [BACKINITIALPAGE]: (state, action) => ({
    searchedZidCode: false,
    isMapOpen: false
  }),
  [LOADMAP]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [ERROR]: (state, action) => ({
    ...state,
    ...action.payload,
  })
});

export default ZipCode;