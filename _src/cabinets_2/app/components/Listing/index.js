/**
*
* Listing
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ReviewList from 'containers/ReviewList';
import HeroSection from 'components/HeroSection';

const Wrapper = styled.div`
display:flex;
flex-direction: column;
`;

class Listing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // static props = {
  //   member
  // }

  render() {
    return (
      <Wrapper>
        <HeroSection {...this.props} />
        <ReviewList />
      </Wrapper>
    );
  }
}

Listing.propTypes = {
  member: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired, // TODO specify shape
};

export default Listing;
