const extractTweets = () => {
  const tweetArr = [];

  document.querySelectorAll('iframe').forEach(elem => {
   elem.contentWindow.document.body.querySelectorAll('.timeline-Tweet-text').forEach(tweet => {
     tweetArr.push(tweet.innerHTML);
   });
    console.log(elem)
  });
  console.log('tweetArr', tweetArr)
  return tweetArr;
}


const extractedTweets = (state = [], action) => {
  console.log('received action of type', action.type)
  switch (action.type) {

    case 'EXTRACT_TWEETS': 
      return extractTweets();
    
    default:
      return state;
  }
}

export default extractedTweets;