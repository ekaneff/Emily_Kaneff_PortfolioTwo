/**
 * Created by emilykaneff on 3/10/16.
 */
var wordRating = "Would you say that the episode was poor, fair, decent or excellent?";
var numberRating;
var nextEpisode = true;

console.log("Review of the most recent episode of American Horror Story!");

wordRating = prompt(wordRating);
console.log("You said the episode was " + wordRating);

numberRating = prompt("What would you rate it out of 5?");
console.log("You rated the episode a " + numberRating + " out of 5");

console.log("It is " + nextEpisode + " that it will be showing at the same time next week");