import { SHOWMODAL, HIDEMODAL, SHOWMODAL_ASYNC } from "../const/modal.const";

export const show = () => ({type: SHOWMODAL});
export const hide = () => ({type: HIDEMODAL});

// thunk
// export const show_async = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(show());
//   }, 1000);
// };

// saga
export const show_async = () => ({type: SHOWMODAL_ASYNC});