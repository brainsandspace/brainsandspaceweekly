
import { fromJS } from 'immutable';
import listingReducer from '../reducer';

describe('listingReducer', () => {
  it('returns the initial state', () => {
    expect(listingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
