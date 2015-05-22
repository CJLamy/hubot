
module.exports = function(robot) {

  // Makes a request to api.giphy to find a kitty gif.
  var crawl = function (error, response, body) {
    // If the request fails, lets the user know.
    if (error) {
      msg.send('Attempt to pull link failed');
    } else {
      json = JSON.parse(body);
      msg.send(json.data.image_original_url);
    }
  };

  var request = require('request');
  var json;
  var website = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitty';
  robot.respond(/kitty me/i, function(msg) {
    request.get({ url: website }, crawl (error, response, body));
  });


  robot.respond(/kitty bomb/i, function(msg) {
    for (i = 0; i < 5; i++) {
        request.get({ url: website }, crawl (error, response, body));
    }
  });
};
