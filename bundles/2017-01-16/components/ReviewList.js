import React, { Component, PropTypes } from 'react';
import Review from './Review.js';

class ReviewList extends Component {
  static propTypes = {
    // todo change to arrayOf with shape 
    extractedTweets: PropTypes.array.isRequired,
    onTimeout: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('component did mount')
    this.props.onTimeout();
    setTimeout(this.props.onTimeout, 2000);
  }

  render() {
    return (
      <ul>
        {this.props.extractedTweets ? 
          this.props.extractedTweets.map(review => 
            <Review
              key={Math.random()}
              {...review}
            />
          ) :
          null
        }
      </ul>
    );
  }

} 

export default ReviewList;