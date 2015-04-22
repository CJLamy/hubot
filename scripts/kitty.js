//Makes a request to api.giphy to find a kitty gif
module.exports = function(robot) {
  robot.respond(/kitty me/i, function(msg) {
    var request = require('request');
    var json;
    var website = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitty";
    request.get({ url: website }, function (error, response, body) {
      //If the request somehow fails just for reference
      if (error) {
        msg.reply("Attempt to pull link failed");
      }
      json = JSON.parse(body);
      msg.reply(json.data.image_original_url);    });
  });
}