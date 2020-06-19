import createReducer from '../createReducer'

// ACTIONS
import { LOADING, SUCESS, BACKINITIALPAGE, LOADMAP, GOBACK } from './actions'

export const initialState = {
  address: [],
 
  longitude: 0,
  latitude: 0,
 
  isLoading: false,
  isMapOpen: false,
  searchedZidCode: false,
  mapisReady: false
}

const ZipCode = createReducer(initialState, {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
    isMapOpen: false
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
    isMapOpen: true
  })
});

export default ZipCode;