/*
 *
 * Body reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SHOW_DEPARTMENT_LIST,
} from 'containers/DepartmentList/constants';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  dark: false,
});

function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_DEPARTMENT_LIST:
      return fromJS({ dark: true });
    default:
      return state;
  }
}

export default bodyReducer;
