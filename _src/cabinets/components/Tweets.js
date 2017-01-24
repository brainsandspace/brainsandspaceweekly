import React, { PropTypes } from 'react';
/**
 * The whole reason for this module, is that I need to have these a tags and script on the page to get information from Twitter...
 * ... each link has its own id tied to the widget, an sometimes I am lazy and just copy and paste to do minimal work.
 */

const Tweets = ({ extractedTweets, extractTweets }) => (
    <div className="tweets">

    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=rex%20tillerson" data-widget-id="821896774684131329">Tweets about rex tillerson</a>

    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Steven%20Mnuchin" data-widget-id="821897351275089920">Tweets about Steven Mnuchin</a>
  
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=James%20Mattis" data-widget-id="821897644947755008">Tweets about James Mattis</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Jeff%20Sessions" data-widget-id="821897760060346369">Tweets about Jeff Sessions</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Ryan%20Zinke" data-widget-id="821897917850062848">Tweets about Ryan Zinke</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Wilbur%20Ross" data-widget-id="821898179331428352">Tweets about Wilbur Ross</a>
      
    <a className="twitter-timeline"  href="https://twitter.com/search?q=Andrew%20Puzder" data-widget-id="821898276324655105">Tweets about Andrew Puzder</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Tom%20Price" data-widget-id="821898410747895808">Tweets about Tom Price</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Sonny%20Perdue" data-widget-id="821898570085396481">Tweets about Sonny Perdue</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Ben%20Carson" data-widget-id="821898688155045890">Tweets about Ben Carson</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Elaine%20Chao" data-widget-id="821898764550111233">Tweets about Elaine Chao</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Rick%20Perry" data-widget-id="821898923908431872">Tweets about Rick Perry</a>
  
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Betsy%20DeVos" data-widget-id="821899511090053121">Tweets about Betsy DeVos</a>
                  
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=David%20Shulkin" data-widget-id="821899643848159232">Tweets about David Shulkin</a>
    
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=John%20F%20Kelly" data-widget-id="821899791974146048">Tweets about John F Kelly</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Reince%20Priebus" data-widget-id="821899906805809152">Tweets about Reince Priebus</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Nikki%20Haley" data-widget-id="821900024040845316">Tweets about Nikki Haley</a>
    
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Scott%20Pruitt" data-widget-id="821900123550740480">Tweets about Scott Pruitt</a>
      
    <a className="twitter-timeline"  href="https://twitter.com/search?q=Robert%20Lighthizer" data-widget-id="821900261224550400">Tweets about Robert Lighthizer</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Mick%20Mulvaney" data-widget-id="821900360260390912">Tweets about Mick Mulvaney</a>
      
    <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=Linda%20McMahon" data-widget-id="821900445144715266">Tweets about Linda McMahon</a>
      
    <script>{!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")}</script>
          
  </div>
)

export default Tweets;