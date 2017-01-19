import { connect } from 'react-redux';
import ReviewList from '../components/ReviewList.js';
import { extractTweets } from '../actions.js';

const mapStateToProps = (state) => (
  {
    extractedTweets: state.extractedTweets
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    onTimeout: () => {
      dispatch(extractTweets());
    }
  }
};

const ExtractedTweets = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);

export default ExtractedTweets;