module.exports = function (robot) {

  var crawl = function (error, response_code, body) {
    if (error) {
      return 'Error accessing Urban Dictionary'
    } else {
      json = JSON.parse(body);
      definitions = json.list;
      if (definitions.length === 0) {
        return 'No definition found :('
      }
      else {
        return json.list[0].definition;
      }
    }
  };

  var request = require('request');
  var json;
  var website = 'http://api.urbandictionary.com/v0/define?term=';

  robot.respond(/define( me)? (.*)/i, function (msg) {
    request.get({ url: website+msg.match[2] }, function (error, response_code, body) {
      msg.send(crawl(error, response_code, body));
    });
  });

};
