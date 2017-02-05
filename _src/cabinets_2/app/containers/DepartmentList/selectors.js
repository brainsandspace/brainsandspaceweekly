import { createSelector } from 'reselect';

/**
 * Direct selector to the departmentList state domain
 */
const selectDepartmentListDomain = () => (state) => state.get('departmentList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DepartmentList
 */

const makeSelectDepartmentList = () => createSelector(
  selectDepartmentListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDepartmentList;
export {
  selectDepartmentListDomain,
};
