//http://www.swearemipsum.com/?paragraphs=5&type=Dubbed&startswithlorem=false

module.exports = function(robot) {
  robot.hear(/I curse thee/i, function(msg) {
    var request = require('request');
    var website = 'http://www.swearemipsum.com/?paragraphs=1&type=Dubbed&startswithlorem=false';
    request.get({ url: website }, function (error, response, html) {
      // If the request fails, lets the user know.
      if (error) {
        msg.send('Attempt to pull link failed');
      } else {
        var $ = require('cheerio');
        var parsedHTML = $.load(html);
        var curseText = parsedHTML("#result").children().first().text();
        msg.send(curseText);
      }
    });
  });
}