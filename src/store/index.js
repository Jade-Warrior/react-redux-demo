import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/root.reducer";

// 中间件thunk
// import logger from "./middleware/logger";
// import test from "./middleware/test";
// 模仿redux-thunk
// import thunk from './middleware/thunk';
// import thunk from 'redux-thunk';

// export const store = createStore(RootReducer, applyMiddleware(logger, test, thunk));


// 中间件sage
import createSagaMidddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMidddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

// 启动 counterSaga
sagaMiddleware.run(rootSaga);
