import createReducer from '../createReducer'
import { POPULATE } from './actions'


const City = createReducer([], {
  [POPULATE]: (state, action) => ({
    ...action.payload
  }),
});

export default City;