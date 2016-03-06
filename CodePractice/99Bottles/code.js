var word = "bottles";

var count = 99;
while (count > 1) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 1) {
        console.log(count + " " + word + " of beer on the wall.");
    }
    if (count == 1) {
        console.log(count + " bottle of beer on the wall.");
    }
}

if (count == 1){
    console.log(count + " bottle of beer on the wall");
    console.log(count + " bottle of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count == 0){
        console.log("No more " + word + " of beer on the wall.");
    }
}/**
 * Created by emilykaneff on 3/6/16.
 */
