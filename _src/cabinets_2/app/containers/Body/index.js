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
          <div style={{ width: '100%', height: '100%', background: '#3333', zIndex: 0 }}>asdfasdf</div> :
          null
        }
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
