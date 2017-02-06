/*
 *
 * Body
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Listing from 'containers/Listing';
import makeSelectBody from './selectors';

export class Body extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Body"
          meta={[
            { name: 'description', content: 'Description of Body' },
          ]}
        />
        <Listing />
      </div>
    );
  }
}

Body.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Body: makeSelectBody(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
