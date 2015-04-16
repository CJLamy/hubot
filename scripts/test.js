//  https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=QUERY_HERE

module.exports = function(robot) {
    robot.respond(/kitty me/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });
}

var giffy = function(search) {

// request.get({ type: json, url: 'somesite.com' }, function...)


var json = JSON.parse(data);
};