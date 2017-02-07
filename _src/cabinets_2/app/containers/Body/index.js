/*
 *
 * Body
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import SearchResults from 'containers/SearchResults';
import makeSelectBody from './selectors';

export class Body extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={this.props.dark ? {background: 'grey'} : {background: 'white'}}>
        <Helmet
          title="Body"
          meta={[
            { name: 'description', content: 'Description of Body' },
          ]}
        />
        <SearchResults />
      </div>
    );
  }
}

Body.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dark: makeSelectBody(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
