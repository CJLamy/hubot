//  https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=QUERY_HERE

module.exports = function(robot) {
  robot.respond(/kitty me/i, function(msg) {
    var request = require('request');
    var json;
    var website = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitty";
    request.get({ url: website }, function (error, response, body) {
      if (error) {
        msg.reply("Attempt to pull link failed");
      }
      json = JSON.parse(body);
      msg.reply(json.image_original_url);
    });
  });
}



// msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
// request.get({ type: json, url: 'somesite.com' }, function...)