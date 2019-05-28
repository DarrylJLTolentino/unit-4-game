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
    var newCharDiv = $("<div>");
    newCharDiv.addClass("character");
    var newCharName = $("<p>").text(object.name);
    var newCharImg = $("<img>").attr('src',"assets/images/" + object.art);
    var newCharHP = $("<p>").text(object.hp);
    newCharDiv.append(newCharName).append(newCharImg).append(newCharHP);
    $(target).append(newCharDiv);
}

for (var i = 0; i < charArray.length; i++) {
    create(charArray[i], "#charSelect");
}

var isCharacterChosen = false;

$(".character").on("click", function () {
    var userClick = this;
    console.log(userClick);
    var newCharDiv = $("<div>");
    newCharDiv.addClass("character current");
    var newCharImg = $("<img>");
    newCharImg.attr({
        width: "250px",
        height: "250px",
        src: "assets/images/" + userClick.art
    });
    newCharDiv.attr({
        name: userClick.name,
        hp: userClick.hp,
        power: userClick.power,
        counterPower: userClick.counterPower,
        art: userClick.art
    })
    $("#charChosen").append(newCharDiv);
})