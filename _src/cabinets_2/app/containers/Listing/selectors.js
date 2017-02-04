import { createSelector } from 'reselect';

/**
 * Direct selector to the listing state domain
 */
const selectListingDomain = () => (state) => state.get('listing');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Listing
 */

const makeSelectListing = () => createSelector(
  selectListingDomain(),
  (substate) => substate.toJS()
);

export default makeSelectListing;
export {
  selectListingDomain,
};
