export default (initialState, handleActions) => 
  (state = initialState, action) => {
    return handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state;
  } 