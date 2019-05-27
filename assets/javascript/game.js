// var scorpion = {
//     name: "Scorpion",
//     hp: 125,
//     power: 10,
//     counterPower: 11,
//     art: "../images/scorpion.png"
// }

// var sub_zero = {
//     name: "Sub-Zero",
//     hp: 130,
//     power: 9,
//     counterPower: 12,
//     art: "../images/sub_zero.png"
// }

// var noobsaitbot = {
//     name: "Noob Saibot",
//     hp: 140,
//     power: 8,
//     counterPower: 13,
//     art: "../images/noobsaibot.png"
// }

// var smoke = {
//     name: "Smoke",
//     hp: 150,
//     power: 7,
//     counterPower: 14,
//     art: "../images/smoke.png"
// }

var charArray = [
    scorpion = {
        name: "Scorpion",
        hp: 125,
        power: 10,
        counterPower: 11,
        art: "scorpion.png"
    },
    sub_zero = {
        name: "Sub-Zero",
        hp: 130,
        power: 9,
        counterPower: 12,
        art: "sub_zero.png"
    },
    noobsaitbot = {
        name: "Noob Saibot",
        hp: 135,
        power: 8,
        counterPower: 13,
        art: "noobsaibot.png"
    },
    smoke = {
        name: "Smoke",
        hp: 140,
        power: 7,
        counterPower: 14,
        art: "smoke.png"
    }];

var charSelect = $("#charSelect");

for (var i = 0; i < charArray.length; i++) {
    var newCharDiv = $("<button>");
    newCharDiv.addClass("character");
    var newCharImg = $("<img>");
    newCharImg.attr({
        width: "250px",
        height: "250px",
        src: "assets/images/" + charArray[i].art
    });
    newCharDiv.append(newCharImg);
    newCharDiv.attr({
        name: charArray[i].name,
        hp: charArray[i].hp,
        power: charArray[i].power,
        counterPower: charArray[i].counterPower,
        art: charArray[i].art
    })
    charSelect.append(newCharDiv);
}

// var isCharacterChosen = false;

// $(".character").on("click", function(){
//     var userClick = $(this).
// })