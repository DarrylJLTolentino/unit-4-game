var scorpion = {
    name: "Scorpion",
    hp: 125,
    power: 10, 
    counterPower: 11,
    art: "../images/scorpion.png"
}

var sub_zero = {
    name: "Sub-Zero",
    hp: 130,
    power: 9,
    counterPower: 12,
    art: "../images/sub_zero.png"
}

var noobsaitbot = {
    name: "Noob Saibot",
    hp: 140,
    power: 8,
    counterPower: 13,
    art: "../images/noobsaibot.png"
}

var smoke = {
    name: "Smoke",
    hp: 150,
    power: 7,
    counterPower: 14,
    art: "../images/smoke.png"
}

var charArray = [scorpion, sub_zero, noobsaitbot, smoke]

var charSelect = $("#charSelect");
for(var i = 0; i < charArray.length; i++) {
    var newCharDiv = $("<div>").charArray[i];
    charSelect.append(newCharDiv);
}