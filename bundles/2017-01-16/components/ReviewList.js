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
        {this.extractedTweets ? 
          this.extractedTweets.map(review => 
            <Review
              key={review.id}
              {...review}
            />
          ) :
          null
        }
      </ul>
    );
  }

} 

// ReviewList.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     body: PropTypes.string.isRequired,
//   }).isRequired).isRequired
// };

export default ReviewList;