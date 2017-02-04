import React, { PropTypes } from 'react';

const Review = ({ text, author, time }) => (
  <li>
    <h3>{author}</h3>
    <p dangerouslySetInnerHTML={{__html: text}}></p>
    <p>{time}</p>
  </li>
);

Review.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string // time might be missing
};

export default Review;