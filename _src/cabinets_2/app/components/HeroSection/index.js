/**
*
* HeroSection
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import CenterColumn from 'components/CenterColumn';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;


class HeroSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <img src={this.props.data.landing_image.src} alt={this.props.data.landing_image.alt} />
        <CenterColumn {...this.props} />
      </Wrapper>
    );
  }
}

HeroSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeroSection;
