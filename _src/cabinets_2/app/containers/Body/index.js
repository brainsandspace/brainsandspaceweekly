/*
 *
 * Body
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import SearchResults from 'containers/SearchResults';
import DarkOverlay from 'components/DarkOverlay';
import NavCategory from 'components/NavCategory';
import ReviewList from 'components/ReviewList';

import makeSelectBody from './selectors';

const Wrapper = styled.div`
z-index: 20;
position: relative;
`;

export class Body extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Body"
          meta={[
            { name: 'description', content: 'Description of Body' },
          ]}
        />
        {this.props.dark ?
          <DarkOverlay /> :
          null
        }
        <NavCategory />
        <ReviewList />
        <SearchResults />
      </Wrapper>
    );
  }
}

Body.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
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
