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
    if (target === "#charChosen") {
        newCharDiv.removeClass("character");
        newCharDiv.addClass("player");
    }
    if (target === "#enemies") {
        newCharDiv.removeClass("character");
        newCharDiv.addClass("enemy");
    }
    if (target === "#defender") {
        newCharDiv.removeClass("character");
        newCharDiv.addClass("defender");
    }
}

for (var i = 0; i < charArray.length; i++) {
    create(charArray[i], "#charSelect");
}

var isCharacterChosen = false;
var enemyArray = [];
var isEnemyChosen = false;
var enemyWithoutDefender = [];
var myChar;
var myEnemy;
var attackCounter = 1;

$(document).on("click", ".character", function () {
    if (isCharacterChosen === false) {
        var userClick = $(this).attr("id");
        for (var i = 0; i < charArray.length; i++) {
            if (charArray[i].name === userClick) {
                create(charArray[i], "#charChosen");
                myChar = charArray[i];
            }
            else {
                //push other to new enemy array
                enemyArray.push(charArray[i]);
                create(charArray[i], "#enemies");
            }
        }
        //empty character select area
        $("#charSelect").empty();
        isCharacterChosen = true;
    }
})

$(document).on("click", ".enemy", function () {
    if (isEnemyChosen === false) {
        var userClick = $(this).attr("id");
        $("#enemies").empty();
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i].name === userClick) {
                create(enemyArray[i], "#defender");
                myEnemy = enemyArray[i];
            }
            else {
                enemyWithoutDefender.push(enemyArray[i]);
                create(enemyArray[i], "#enemies");
            }
        }
        enemyArray = enemyWithoutDefender;
        enemyWithoutDefender = [];
        isEnemyChosen = true;
    }
})

$(document).on("click", "#attack", function () {
    var damage = $("#damage");
    if (isCharacterChosen === true && isEnemyChosen === true) {
        $("#defender").empty();
        $("#charChosen").empty();
        myEnemy.hp = myEnemy.hp - (myChar.power * attackCounter);
        damage.empty();
        damage.append(myChar.name + "dealt " + (myChar.power * attackCounter) + " damage to " + myEnemy.name + "<br>");
        attackCounter++;
        if (myEnemy.hp <= 0) {
            isEnemyChosen = false;
            $("#defender").empty();
        }
        else {
            myChar.hp = myChar.hp - myEnemy.counterPower;
            damage.append(myEnemy.name + "dealt " + (myEnemy.counterPower) + " damage to " + myChar.name + "<br>");
            create(myEnemy, "#defender");
            if (myChar.hp <= 0) {
                damage.append("You lose...");
            }
        }
        create(myChar, "#charChosen");

    }
})