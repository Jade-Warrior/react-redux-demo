import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "../const/counter.const";

export const increment = payload => ({type: INCREMENT, payload});
export const decrement = payload => ({type: DECREMENT, payload});

// thunk
// export const increment_async = payload => dispatch => {
//   setTimeout(() => {
//     dispatch(increment(payload));
//   }, 1000);
// };

// saga
export const increment_async = payload => ({type: INCREMENT_ASYNC, payload});