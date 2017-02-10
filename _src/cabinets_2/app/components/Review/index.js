/**
*
* Review
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Byline from './Byline';

const Wrapper = styled.li`
margin-bottom: 20px;

.title {
  line-height: 18px;
  font-weight: bold;
}

.stars {
    background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-28bd59af93d9b1c745bb0aca4de58763b54df7cf._V2_.png);
    -webkit-background-size: 400px 670px;
    background-size: 400px 670px;
    width: 80px;
    height: 18px;
    background-repeat: no-repeat;
    background-position: -69px -368px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 5px;
}
`;


function Review({ author, text, timestamp }) {
  return (
    <Wrapper>
      <p className="title"><span className="stars"><span style={{opacity: 0}}>0.0 out of 5 stars</span></span>What should the title be!?</p>
      <Byline author={author} timestamp={timestamp} />
      <p>{text}</p>
    </Wrapper>
  );
}

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Review;
