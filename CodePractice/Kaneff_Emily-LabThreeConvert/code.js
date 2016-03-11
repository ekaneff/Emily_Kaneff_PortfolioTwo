/**
 * Created by emilykaneff on 3/10/16.
 */
var playerName = "Jim";
var characterName = "\"weirdguy97\"";
var playerAge = 45;
var confirmInfo = true;
var eggs = 5;
var dozenEggs = 12;
var dogName1 = "Rosa";
var dogName2 = "Lily";
var finalDogName;

console.log("Welcome to \"Survive a day as Emily\"!");
console.log("Before we before, lets make sure I'm talking to the right person.");
console.log("\n\tYour name is " + playerName);
console.log("\n\tYour username is " + characterName);
console.log("\n\tYou are " + playerAge + " years old");

confirmInfo = prompt("\nIs this information " + confirmInfo + " or false?");

if (confirmInfo){
    console.log("Awesome! Then let's begin!");

    eggs = prompt("The day starts out with waking up around noon. You're hungry so you go to the kitchen and decide that you want some eggs. There is a carton of " + dozenEggs + ". How many do you make?");
    if(eggs > 0) {
        dozenEggs -= eggs;
        console.log("You decided to make " + eggs + " eggs.");
        console.log("Now you have " + dozenEggs + " eggs left.");
        console.log("After eating, you realize that you actually do not have anything to do today, so you decide to go back to bed.");
        console.log("Congrats! You survived a day as Emily. Thanks for playing!");
    } else {
        console.log("You did not make any eggs. You decide to just go back to bed.");
        console.log("Congrats! You survived a day as Emily. Thanks for playing!");
    }
} else{
    playerName = prompt("What is your name?");
    characterName = prompt("What is your username?");
    playerAge = prompt("How old are you?");
    console.log("Lovely. Let's begin.");

    console.log("You wake up and receive a phone call form your friend, Dylan. He says he got a dog finally and he needs your help naming it!");
    finalDogName = prompt("He is stuck between two names, Rosa and Lily. Which do you suggest he take?");

    if (finalDogName == dogName1){
        console.log(finalDogName + " is a great name! Dylan loves it too, and he agrees to name her that.");
        console.log("He invites you over to play with her and you agree. You spend all day there until it comes time for bed.");
        console.log("Congrats! You survived a day as Emily. Thanks for playing!");
    } else {
        console.log(dogName2 + " is a great name! Unfortunately, Dylan decided he wanted to go with Rosa.");
        console.log("You are bitter about him not taking your suggestion, so you turn down the offer to go play with the dog. You decide to just go back to bed and watch Scrubs all day.");
        console.log("Congrats! You survived a day as Emily. Thanks for playing!");
    }

}