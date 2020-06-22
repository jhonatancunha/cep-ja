import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS, BACKINITIALPAGE, LOADMAP, GOBACK, ERROR } from './actions'

export const initialState = {
  address: [],
 
  longitude: 0,
  latitude: 0,
 
  isLoading: false,
  searchedZidCode: false,
  
  isMapOpen: false,
  mapisLoading: false
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
    ...action.payload
  }),
  [ERROR]: (state, action) => ({
    ...state,
    ...action.payload,
  })
});

export default ZipCode;