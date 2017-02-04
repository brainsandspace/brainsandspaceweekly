/*
 *
 * Listing
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectListing from './selectors';
import messages from './messages';

export class Listing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Listing"
          meta={[
            { name: 'description', content: 'Description of Listing' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Listing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Listing: makeSelectListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
