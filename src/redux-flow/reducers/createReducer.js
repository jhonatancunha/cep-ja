export default (initialState, handleActions) => {
  if(typeof(initialState) === 'undefined'){
    throw new Error('initialState must not be undefined')
  }
  if(typeof(handleActions.hasOwnProperty) === 'undefined')
    throw new Error('second argument must be an object')
  
    return (state = initialState, action) => 
     handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state;
  
} 