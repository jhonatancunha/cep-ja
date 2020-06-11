import { combineReducers } from 'redux'

// REDUCERS
import zipcode from './ZipCode/index'

export default combineReducers({
  address: zipcode
})