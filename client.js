/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;


TrelloPowerUp.initialize({
  'card-badges': function(t, options){
    return t.card('url')
    .then((url) => {
      return [{
        text: '#' + url.url.substr(30, url.url.substr(30).indexOf('-'))
      }]
    });
  },
});