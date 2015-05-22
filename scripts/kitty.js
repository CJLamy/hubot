// Makes a request to api.giphy to find a kitty gif.
module.exports = function(robot) {
  robot.respond(/kitty me/i, function(msg) {
    var request = require('request');
    var json;
    var website = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitty';
    request.get({ url: website }, function (error, response, body) {
      // If the request fails, lets the user know.
      if (error) {
        msg.send('Attempt to pull link failed');
      } else {
        json = JSON.parse(body);
        msg.send(json.data.image_original_url);
      }
    });
  });
};

// Bomb with ugly kitties!
module.exports = function(robot) {
  robot.respond(/kitty bomb/i, function(msg) {
    var request = require('request');
    var json;
    var website = 'http://tv.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ugly-kitty';
    for (i = 0; i < 5; i++) {
        request.get({ url: website }, function (error, response, body) {
        // If the request fails, lets the user know.
        if (error) {
          msg.send('Attempt to pull link failed');
        } else {
          json = JSON.parse(body);
          msg.send(json.data.image_original_url);
        }
      });
    }
  });
};
