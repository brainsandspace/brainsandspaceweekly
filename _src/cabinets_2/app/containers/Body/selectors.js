import { createSelector } from 'reselect';

/**
 * Direct selector to the body state domain
 */
const selectBodyDomain = () => (state) => state.get('body');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Body
 */

const makeSelectBody = () => createSelector(
  selectBodyDomain(),
  // (substate) => substate.toJS()
);

export default makeSelectBody;
export {
  selectBodyDomain,
};
