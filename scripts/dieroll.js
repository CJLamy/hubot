module.exports = function (robot) {

  var roll = function (numDice, numSides) {
    var total = 0;
    for( var i = 0; i < numDice; i++ ) {
      total += Math.floor((Math.random() * numSides) + 1);
    }
    return total.toString();
  };

  robot.respond(/roll( me)? (\d+)d(\d+)/i, function (res) {
    res.send(roll(parseInt(res.match[2]), parseInt(res.match[3])));
  });

};
