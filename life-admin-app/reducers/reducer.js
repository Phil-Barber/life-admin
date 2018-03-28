import { combineReducers } from 'redux';

const reducer = combineReducers({
  testReducer
});

function testReducer(state = {}, action) {
  return state;
}

export default reducer;

