var charArray = [
    scorpion = {
        name: "Scorpion",
        hp: 200,
        power: 15,
        counterPower: 22,
        art: "scorpion.png"
    },
    sub_zero = {
        name: "Sub-zero",
        hp: 250,
        power: 14,
        counterPower: 25,
        art: "sub_zero.png"
    },
    noobsaibot = {
        name: "Noob Saibot",
        hp: 300,
        power: 12,
        counterPower: 27,
        art: "noobsaibot.png"
    },
    smoke = {
        name: "Smoke",
        hp: 350,
        power: 10,
        counterPower: 30,
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
        $("#charChosen").empty;
        newCharDiv.removeClass("character");
        newCharDiv.addClass("player");
        $("#charChosen").append(newCharDiv);
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
var victories = 0;

$(document).on("click", ".character", function () {
    if (isCharacterChosen === false) {
        $("#audio1").prop("volume", 0.05);
        $("#audio1")[0].play();
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
        damage.html("Damage: <br>");
        damage.append("---------------------------------------------- <br>")
        damage.append(myChar.name + " dealt " + (myChar.power * attackCounter) + " damage to " + myEnemy.name + "<br>");
        attackCounter++;
        if (myEnemy.hp <= 0) {
            isEnemyChosen = false;
            victories++;
            $("#defender").empty();
            $("#audio1").prop("volume", 0.005)
            $("#audio2").prop("volume", 0.25);
            $("#audio2")[0].play();
            $("#audio1").prop("volume", 0.05);
            if (victories === 3) {
                damage.append("FATALITY! YOU WIN!");
                $("#audio1").prop("volume", 0.005)
                $("#audio2").prop("volume", 0.25);
                $("#audio2")[0].play();
                $("#audio1").prop("volume", 0.05);
            }
            else {
                damage.append("FATALITY! CHOOSE ANOTHER FIGHTER!");
            }
        }
        else {
            myChar.hp = myChar.hp - myEnemy.counterPower;
            damage.append(myEnemy.name + " dealt " + (myEnemy.counterPower) + " damage to " + myChar.name + "<br>");
            create(myEnemy, "#defender");
            if (myChar.hp <= 0) {
                damage.append("YOU LOSE...");
            }
        }
        create(myChar, "#charChosen");
    }
})