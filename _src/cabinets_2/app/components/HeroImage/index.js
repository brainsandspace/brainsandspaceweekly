/**
*
* HeroImage
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


class HeroImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img src={this.props.cabinet_texture.src} alt={this.props.cabinet_texture.alt} />
      </div>
    );
  }
}

HeroImage.propTypes = {
  cabinet_texture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroImage;
