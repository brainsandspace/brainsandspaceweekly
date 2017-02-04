/**
 * Combine all reducers in this file and export combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from './containers/App/reducer';

/**
 * routeReducer
 * 
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4. what.
 * 
 */

// initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) { 
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default: 
      return state;
  }
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...asyncReducers
  });
}