/**
 * Created by emilykaneff on 3/15/16.
 */
var character = "";

var peaceScore = 0;
var fightScore = 0;


var JSONText = '{ "characters" : ['+
        '{ "name" : "Darius", "health" : "10", "attack" : "12", "defense" : "16"},'+
        '{ "name" : "Brent", "health" : "25", "attack" : "10", "defense" : "13"},'+
        '{ "name" : "Karl", "health" : "15", "attack" : "5", "defense" : "10"}]'+
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

while (charSelect < 0 && charSelect > 3){
    charSelect = prompt("Invalid input. Please enter a valid character number.");
}

character = characters.characters[charSelect-1];

//introduction
console.log("You arrive at the covenant, the home of Justin, the missing mage. You are not quite sure what to make of it.\n" +
    "The archway is on fire, so you proceed with caution.");
console.log("As you walk in, you are immediately approached by a strange egyptian looking man.");
console.log("He says his name is Noir and asks for your name and purpose for entering the covenant.");
console.log("You him what he wants to know and you ask him when he last ")

