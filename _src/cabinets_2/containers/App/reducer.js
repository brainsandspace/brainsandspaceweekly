/**
 * AppReducer
 * 
 * The reducer takes care of our data.
 * We use actions to change application state..
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  currentPage: 'searchResults'
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD':
    default: 
      return state;
  }
}

export default appReducer;