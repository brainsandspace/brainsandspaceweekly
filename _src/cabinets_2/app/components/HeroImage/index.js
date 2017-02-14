/**
*
* HeroImage
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

class HeroImage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    this.canvas = document.querySelector('#image-gallery-canvas');

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.domElement = this.canvas;
  }

  tick() {
    window.requestAnimationFrame(this.tick);
  }

  render() {
    return (
      <div>
        <canvas id="image-gallery-canvas"></canvas>
        <img src={this.props.cabinet_texture.src.replace(/\._SS40_/, '')} alt={this.props.cabinet_texture.alt} />
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
