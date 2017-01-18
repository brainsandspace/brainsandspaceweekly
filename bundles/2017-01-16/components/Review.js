import React, { PropTypes } from 'react';

const Review = ({ body }) => (
  <li>{body} Whattup{Math.random()}</li>
);

Review.propTypes = {
  body: PropTypes.string.isRequired
};

export default Review;