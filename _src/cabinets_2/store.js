/**
 * create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // create the store with 2 middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If redux dev tools extension is installed, use it, otherwise use redux compose
  const composeEnhancers = 
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

  return store;
}
