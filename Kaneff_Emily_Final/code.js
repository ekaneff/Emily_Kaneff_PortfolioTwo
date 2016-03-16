/**
 * Created by emilykaneff on 3/15/16.
 */
var character = "";

var peaceScore = 0;
var fightScore = 0;

var outcome = true;


var JSONText = '{ "characters" : ['+
        '{ "name" : "Darius", "health" : 10, "attack" : 12, "defense" : 18},'+
        '{ "name" : "Brent", "health" : 25, "attack" : 10, "defense" : 12},'+
        '{ "name" : "Karl", "health" : 17, "attack" : 5, "defense" : 6}]'+
'}';

var characters = JSON.parse(JSONText);


//opening title with directions
console.log("----- Finding Justin of Tremere -----");
console.log("How to Play:\n");
console.log("You will be walked through the game based on a series of text outputs. Make sure you read everything.\n");
console.log("Throughout the game, you will be prompted to make decisions. Be careful what you decide, for you actions\n " +
    "may influence what path you go down.\n");
console.log("If you die, the game is over and you must restart. That goal is to not die and to find Justin alive.\n");
console.log("Good luck traveler.\n");
console.log(" ");
console.log(" ");

//character selection
CharacterSelect();


//introduction
console.log("You arrive at the covenant, the home of Justin, the missing mage. You are not quite sure what to make of it.\n" +
    "The archway is on fire, so you proceed with caution.");
console.log("As you walk in, you are immediately approached by a strange egyptian looking man.");
console.log("He says his name is Noir. What would you like to do?(Enter the number)");

//first encounter
NoirEncounter();


function NoirEncounter(){
    var userAction = prompt("1. Attack Noir\n 2.Talk to Noir");

    while (userAction < 0 || userAction > 2){
        userAction = prompt("Invalid input.\n1. Attack Noir\n 2.Talk to Noir");
    }

    if (userAction == 1){
        fightScore = fightScore + 1;
        console.log("You decide to fight Noir.");
        outcome = DoCombat(60);

        if (outcome) {
            console.log("Your attack hits and Noir runs away without telling you anything.");
            console.log("He drops a note saying that Justin was last seen heading towards London to talk to the head master of the " +
                "covenant there to deal with the most recent problem of blood cultists terrorizing the covenants..");
            console.log("You decide to head that way.");
            BridgeEncounter();
        } else {
            console.log("Your attack misses and Noir decides to hit you as defense.");
            DamagePlayer(Roll(5));
            console.log("You apologize for your outburst and ask him when the last time he saw Justin was.");
            console.log("He tells you that he last saw her heading towards London to talk to the head master of the" +
                "covenant there to deal with the most recent problem of blood cultists terrorizing the covenants.");
            console.log("You thank him for his time and head off towards London.");
            BridgeEncounter();
        }
    } else {
        peaceScore = peaceScore + 1;
        console.log("You decide to talk to Noir.");
        console.log("You ask him when the last time he saw Justin was.");
        console.log("He tells you that he last saw her heading towards London to talk to the head master of the" +
            "covenant there to deal with the most recent problem of blood cultists terrorizing the covenants.");
        console.log("You thank him for his time and head off towards London.");
        BridgeEncounter();
    }

}

function BridgeEncounter(){
    var healthUp = Roll(5);
    console.log(" ");
    console.log("You are about a day and a half out of London.");

    //find item
    console.log("While traveling through the woods, you notice something strange sitting in the grass off to the side of the path.");
    console.log("You decide to investigate.");
    character.health += healthUp;
    alert("You found a longjevity potion!\nYour health increases by " + healthUp + "!\nYour current health is now " + character.health);

    //encounter
    

}

function LondonEncounter(){

}

function KarnEncounter(){

}

function CultEncounter(){

}

function DamagePlayer(damage){
    //dividing by 6 allows for a higher chance that the player will take more damage based on their defense value
    var temp = damage + ((character.defense / 6) * (-1));

    if (temp < 0){
        temp = 0;
    }
    character.health -= temp;

    console.log("You suffer " + temp + " points of damage.");
    if (character.health <= 0){
        Die();
    }
    console.log("Your current health is now " + character.health);
}

function Die(){
    console.log("You have died. You failed to find Justin. You are a failure.");
    console.log("Thanks for playing! Refresh the page to try again.");
}

function DoCombat(diff){
    //rolling a 100 sided die to generate the percentage chance of success or failure in an attack
    //dividing by 3 creates a number that allows for the characters to not be so similar in their combat score
    //subtracting diff allows me to set the difficulty of certain encounters and decide how high i want the success rate
    if (Roll(100) < (((character.attack + character.defense) * 3) - diff)){
        //successful attack
        return true;
    }
    else {
        //failed attack
        return false;
    }
}

function Roll(num){
    return Math.floor(Math.random() * num) + 1;
}

function CharacterSelect(){
    console.log("Select which character you would like to play as:");
    for (var i = 0; i < characters.characters.length; i++){
        console.log("Character Number: " + (i + 1));
        console.log("Name: " + characters.characters[i].name + "\n");
        console.log("Health: " + characters.characters[i].health + "\n");
        console.log("Attack: " + characters.characters[i].attack + "\n");
        console.log("Defense: " + characters.characters[i].defense + "\n");
        console.log(" ");
    }

    var charSelect = prompt("Input character number to select character:");

    while (charSelect < 0 || charSelect > 3){
        charSelect = prompt("Invalid input. Please enter a valid character number.");
    }

    character = characters.characters[charSelect-1];
}