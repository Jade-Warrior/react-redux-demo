import { handleActions as createReducer } from 'redux-actions';
import { actionsIncrement, acitonsDecrement } from './counter.actions';

const initialState = {
  actionsCount: 0
}

function handleIncrement (state, action) {
  return {
    ...state,
    actionsCount: state.actionsCount + action.payload
  }
}

function handleDecrement (state, action) {
  return {
    ...state,
    actionsCount: state.actionsCount - action.payload
  }
}

export default createReducer({
  [actionsIncrement]: handleIncrement,
  [acitonsDecrement]: handleDecrement,
}, initialState);
