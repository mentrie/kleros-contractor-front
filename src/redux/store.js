import createSagaMiddleware from 'redux-saga';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import saga from './sagas';
import reducer from './reducer';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const devtools = window.devToolsExtension || (() => noop => noop);

  const enhancers = [
    applyMiddleware(sagaMiddleware),
    devtools()
  ]

  return {
    ...createStore(reducer, 
      compose(...enhancers)),
    runSaga: sagaMiddleware.run(saga)
  }
};
