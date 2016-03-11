/**
 * Created by emilykaneff on 3/10/16.
 */

var myName = "John Doe";
var myJob = "\"Cat Wrangler\"";
var myRate = 7.50;
var numberOfCats = 40;
var employed = true;

console.log("Hello!  My name is " + myName + ".");
console.log("I'm a " + myJob + ".");
console.log("My current assignment has me wrangling" + numberOfCats + " cats.");
console.log("So, let's get to work!");

while (numberOfCats > 5) {

    if (employed == true) {

        console.log("I've wrangled another cat.  Only " + numberOfCats + " left!");

    } else {

        console.log("I've been fired!  Someone else will have to wrangle the rest!");

    }

    numberOfCats--;

    if (numberOfCats == 5) {

        employed = false;
        console.log("I've been fired! Someone else will have to wrangle the rest!");

    }

}