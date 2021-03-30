import { handleActions as createReducer } from 'redux-actions';
import { increment, decrement } from './counter.actions';

const initialState = {
  count: 0
}

function handleIncrement (state, action) {
  console.log('state', state);
  return {
    ...state,
    count: state.count + 1
  }
}

function handleDecrement (state, action) {
  return {
    ...state,
    count: state.count - 1
  }
}

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement,
}, initialState);
