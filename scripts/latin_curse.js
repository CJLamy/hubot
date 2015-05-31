var haveBadThingsHappen =
    [ "have more mother-in-laws than King Solomon",
      "be pursued into the mountains by sex-mad baboons",
      "be whipped with a thousand scorpions",
      "be thrown into a den of hyperactive lions",
      "be swallowed by a whale with excessively bad breath",
      "be smitten with all-over boils",
      "be mocked by eunuchs",
      "be captured by Midianite maniacs",
      "become as popular as a boil on the king's backside",
      "be plagued with gnats, flies and locusts",
      "be taunted by the king's concubines",
      "fall under a speeding chariot",
      "be as welcome as a fart in the queen's bedchamber",
      "accidentally insult Goliath",
      "go about weeping and wailing in sackcloth and ashes",
      "go on a diet of crunchy, unsweetened locusts",
      "be trampled by a herd of stampeding pigs",
      "be cast onto a steaming dung-heap",
      "be turned into a pillar of salt",
      "see your pomegranates wither",
      "beget difficult teenagers",
      "be kicked by an incontinent camel",
      "crash the king's best-loved chariot"];

var ohYou =
    [ "o thou",
      "o ye"];

var ofLittleFaith =
    [ "of little faith",
      "whose name is but dung",
      "who art a byword for idiocy",
      "breaker of the commandments",
      "discourager of the brethren",
      "wolf in sheep's clothing",
      "sad Pharisee",
      "armpit of Satan",
      "irritating inhabitant of Gath",
      "child of Jezebel",
      "son of thunder",
      "relative of Herod",
      "incompetent tax-collector",
      "lazy Babylonian",
      "babbling Assyrian",
      "Amalekite dog",
      "lying Girgashite",
      "love-crazed Gittite",
      "creature of the pit",
      "bull of Bashan",
      "Mesopotomian harlot",
      "wayward winebibber",
      "son of a Philistine",
      "sulphurous nonentity",
      "love-child of Methuselah",
      "plaything of Beelzebub",
      "dabbler in abominations",
      "exceedingly foolish virgin",
      "denizen of the underworld",
      "offspring of a squashed cockroach"];

var hearThis =
    [ "Listen",
      "Hear this",
      "Take heed",
      "Woe unto thee",
      "Harken"];

function randomSelect(anArray) {
  var clause = anArray[Math.floor(Math.random() * anArray.length)];
  return clause;
}

function insult() {
  var curse = randomSelect(hearThis) + ", " +
            randomSelect(ohYou) + " " +
            randomSelect(ofLittleFaith) + ", for you will " +
            randomSelect(haveBadThingsHappen) + "!";
  return curse;
}

// Command that will pull from swearmipsum to send a friendly curse to folks.
module.exports = function(robot) {
  robot.hear(/I curse thee/i, function(msg) {
    msg.send(insult());
  });
};
