import { combineReducers } from 'redux'

// REDUCERS
import zipcode from './ZipCode/index'
import city from './City'

export default combineReducers({
  address: zipcode,
  city: city
})