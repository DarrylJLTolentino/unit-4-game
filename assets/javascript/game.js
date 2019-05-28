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
        name: "scorpion",
        hp: 125,
        power: 10,
        counterPower: 11,
        art: "scorpion.png"
    },
    sub_zero = {
        name: "sub_zero",
        hp: 130,
        power: 9,
        counterPower: 12,
        art: "sub_zero.png"
    },
    noobsaibot = {
        name: "noobsaibot",
        hp: 135,
        power: 8,
        counterPower: 13,
        art: "noobsaibot.png"
    },
    smoke = {
        name: "smoke",
        hp: 140,
        power: 7,
        counterPower: 14,
        art: "smoke.png"
    }];

// 4 divs. 1) container 2) name 3) img 4) hp
// on container div -> append name img and hp
// do formatting on container later -> image height and width = 100%
function create(object, target) {
    var newCharDiv = $("<div class ='character' id='" + object.name + "'/div>");
    newCharDiv.addClass("character");
    var newCharName = $("<p>").text(object.name);
    var newCharImg = $("<img>").attr('src', "assets/images/" + object.art);
    var newCharHP = $("<p>").text("HP: " + object.hp);
    newCharDiv.append(newCharName).append(newCharImg).append(newCharHP);
    $(target).append(newCharDiv);
}

for (var i = 0; i < charArray.length; i++) {
    create(charArray[i], "#charSelect");
}

var isCharacterChosen = false;
var enemyArray = [];

$(document).on("click", ".character", function () {
    if (isCharacterChosen === false) {
        var userClick = $(this).attr("id");
        for (var i = 0; i < charArray.length; i++) {
            if (charArray[i].name === userClick) {
                create(charArray[i], "#charChosen");
            }
            else {
                //push other to new enemy array
                enemyArray.push(charArray[i]);
                create(charArray[i], "#enemies");
            }
        }
        //empty character select area
        $("#charSelect").empty();
    }
})