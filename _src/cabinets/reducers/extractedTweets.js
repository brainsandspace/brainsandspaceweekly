const extractTweets = () => {
  const tweetArr = [];

  document.querySelectorAll('iframe').forEach(elem => {
    
   elem.contentWindow.document.body.querySelectorAll('.timeline-Tweet').forEach(tweet => {

     const text = tweet.querySelector('.timeline-Tweet-text').innerHTML;
     const author = tweet.querySelector('.TweetAuthor-name').getAttribute('title');
     const time = tweet.querySelector('time').innerText.match(/.*/)[0]
     tweetArr.push(
       {
         text,
         author,
         time
       }
     );
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