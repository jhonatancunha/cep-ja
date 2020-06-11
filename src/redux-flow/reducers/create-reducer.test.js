import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import createReducer from './createReducer'

const initialState = 0
const reducer = createReducer(initialState, {
  'INCREMENT': (state, action) => state + 1,
  'DECREMENT': (state, action) => state - 1
})

// TESTES CAMINHO FELIZ

it('createReducer should be a function', () => {
  expect(createReducer).to.be.a('function')
})

it('createReducer(initialState, {}) should return a reducer function', () => {
  expect(createReducer([], {})).to.be.a('function')
})

it('should create a reducer', () => {
  const before = deepfreeze(0);
  const action = deepfreeze({ type: 'INCREMENT' });
  const after = 1;

  expect(reducer(before, action)).to.be.equal(after)
})

it('reducer should return the latest state if action is unknown', () => {
  const before = deepfreeze(3);
  const action = deepfreeze({ type: 'UNKNOWN' });
  const after = 3;

  expect(reducer(before, action)).to.be.equal(after)
})

it('reducer should return initialState when latest state is undefined', () => {
  const before = undefined;
  const action = deepfreeze({});
  const after = initialState;

  expect(reducer(before, action)).to.be.equal(after)
})

// TESTES CAMINHO INFELIZ

it('initialState must not be undefined', () => {
  try{
    createReducer();
  }catch(e) {
    expect(e.message).to.be.equal('initialState must not be undefined');
  }
})

it('handleActions must not be different then object', () => {
  try{
    createReducer(1, 'not an object');
  }catch(e) {
    expect(e.message).to.be.equal('second argument must be an object')
  }
})