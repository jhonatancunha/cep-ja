import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER -> ${action.type}`)
  console.log("will dispatch: ", action);
  console.log('store', getState())
  const nextAction = next(action);
  console.log('next store', getState())
  console.groupEnd(`LOGGER -> ${action.type}`)
  return nextAction;
}


export default ({ initialState } = {}) => {
  const store = createStore(reducer, initialState, applyMiddleware(logger,thunk));
  return store;
}