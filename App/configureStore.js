import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './appReducer';
import appSaga from './appSagas';

/* eslint-disable no-underscore-dangle */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
);

sagaMiddleware.run(appSaga);

export default store;
