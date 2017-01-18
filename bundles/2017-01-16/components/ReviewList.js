import React, { PropTypes } from 'react';
import Review from './Review.js';

const ReviewList = ({ reviews }) => (
  <ul>
    {reviews.map(review => 
      <Review
        key={review.id}
        {...review}
      />
    )}
  </ul>
);

console.log(ReviewList)

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired
};


export default ReviewList;