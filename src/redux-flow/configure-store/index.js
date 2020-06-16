import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const logger = () => window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION__() 
  : (notfound) => notfound

export default ({ initialState } = {}) => {
  const enhancer = compose( applyMiddleware(thunk), logger() )

  const store = createStore(reducer, initialState, enhancer);
  return store;
}