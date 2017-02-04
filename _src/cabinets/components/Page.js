import React, { propTypes } from 'react';
import HeroImageGallery from './HeroImageGallery.js';

const Page = ({ type, content }) => (
  <div className="page">
   <HeroImageGallery />
  </div>
);

export default Page;