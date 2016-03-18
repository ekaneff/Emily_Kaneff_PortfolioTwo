/**
 * Created by emilykaneff on 3/15/16.
 */
var character = "";

var peaceScore = 0;
var fightScore = 0;

var outcome = true;


var JSONText = '['+
        '{ "name" : "Darius", "health" : 10, "attack" : 12, "defense" : 18},'+
        '{ "name" : "Brent", "health" : 25, "attack" : 10, "defense" : 12},'+
        '{ "name" : "Karl", "health" : 17, "attack" : 5, "defense" : 6}]';

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
        console.log(" ");
        console.log("You decide to fight Noir.");
        outcome = DoCombat(60);

        if (outcome) {
            console.log(" ");
            console.log("Your attack hits and Noir runs away without telling you anything.");
            console.log("He drops a note saying that Justin was last seen heading towards London to talk to the head master of the " +
                "covenant there to deal with the most recent problem of blood cultists terrorizing the covenants..");
            console.log("You decide to head that way.");
            BridgeEncounter();
        } else {
            console.log(" ");
            console.log("Your attack misses and Noir decides to hit you as defense.");
            DamagePlayer(Roll(5));
            console.log("You apologize for your outburst and ask him when the last time he saw Justin was.");
            console.log("He tells you that he last saw her heading towards London to talk to the head master of the " +
                "covenant there to deal with the most recent problem of blood cultists terrorizing the covenants.");
            console.log("You thank him for his time and head off towards London.");
            BridgeEncounter();
        }
    } else {
        peaceScore = peaceScore + 1;
        console.log(" ");
        console.log("You decide to talk to Noir.");
        console.log("You ask him when the last time he saw Justin was.");
        console.log("He tells you that he last saw her heading towards London to talk to the head master of the " +
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
    alert("You found a longevity potion!\nYour health increases by " + healthUp + "!\nYour current health is now " + character.health);

    //encounter
    console.log(" ");
    console.log("After half a day of travel, you notice a wall in the distance blocking off the bridge you need to cross to get " +
        "into London.");
    console.log("There are sharpened wooden spikes sticking out from the ground as well as guards patrolling the gate.");
    console.log("You approach the gate with caution and are immediately stopped.");
    console.log("The man says that you cannot pass because there is a bounty out for your head. He will not say by whom.");
    console.log("You explain your reason for passing but he will have none of it.")
    console.log("What are you going to do?");

    var userAction = prompt("1.Attack the man\n2.Try to reason with him");

    while (userAction < 0 || userAction > 2){
        userAction = prompt("Invalid input.\n1.Attack the man\n 2.Try to reason with him");
    }
    //fight
    if (userAction == 1){
        fightScore = fightScore + 1;
        console.log(" ");
        console.log("You decide to fight the man.");
        outcome = DoCombat(55);

        if (outcome) {
            console.log(" ");
            console.log("Your attack hits the man and he is taken aback.");
            console.log("Before the man can draw his sword, you are hit in the shoulder with in arrow fired from an archer" +
                " on the gate.");
            DamagePlayer(Roll(7));
            console.log("The man looks at you for a long moment, then yells to the guards to open the gate.");
            console.log("He is impressed by your courage and tells you that he let someone matching Justin's description " +
                "through the gate a day or two ago.");
            console.log("You thank him for his forgiveness and proceed through the blockade without further harm.");
            LondonEncounter();
        } else {
            console.log(" ");
            console.log("Your attack misses the man.");
            console.log("The archer on the gate draws back his bow, but before he can fire, the man motions to him to hold fire.");
            console.log("The man looks at you for a long moment then yells to the guards to open the gate.");
            console.log("He tells you that you have a minute to start running before he orders the archers to fire.");
            console.log("You take off running without looking back, and you feel a shooting pain in the back of your leg.");
            DamagePlayer(Roll(4));
            console.log("You pull the arrow out of your leg and push onward towards London, hoping those men are gone on the way back");
            LondonEncounter();

        }
        //peaces
    } else {
        peaceScore = peaceScore + 1;
        console.log(" ");
        console.log("You decide to try and bargin with the man.");
        console.log("Before leaving for the journey, you had someone in the covenant turn some rocks into what looks like " +
            "currency using a Muto Imaginem spell.");
        console.log("You tell the man that you will pay him double what the bounty is for your head.");
        console.log("The man sees the \"money\" in your hands and agrees. He yells to the guards to open the gate.");
        console.log("You walk through the blockade without harm, internally patting yourself on the back for successfully " +
            "outsmarting the bandits.");
        LondonEncounter();
    }
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
    console.log(temp);

    if (temp < 0){
        temp = 0;
    }
    character.health -= temp;

    console.log("You suffer " + temp + " points of damage.");
    console.log("Your current health is now " + character.health);
    if (character.health <= 0){
        Die();
    }

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
    //random number between 0 and 1, multiplied by whatever number I pass in which sets the number of sides the die would have
    //mainly used to set damage number that is sent into DamagePlayer function that is dealth to player
    return Math.floor(Math.random() * num) + 1;
}

function CharacterSelect(){
    console.log("Select which character you would like to play as:");
    for (var i = 0; i < characters.length; i++){
        console.log("Character Number: " + (i + 1));
        console.log("Name: " + characters[i].name + "\n");
        console.log("Health: " + characters[i].health + "\n");
        console.log("Attack: " + characters[i].attack + "\n");
        console.log("Defense: " + characters[i].defense + "\n");
        console.log(" ");
    }

    var charSelect = prompt("Input character number to select character:");

    while (charSelect < 0 || charSelect > 3){
        charSelect = prompt("Invalid input. Please enter a valid character number.");
    }

    character = characters[charSelect-1];
    console.log("You selected " + character.name + " as your character.");
    console.log(" ");
}