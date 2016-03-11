/**
 * Created by emilykaneff on 3/10/16.
 */

var firstNumber;
var secondNumber;
var operation;
var answer = 0;

console.log("Welcome to Emily's calculator!");

firstNumber = prompt("Enter the first number: ");

secondNumber = prompt("Enter the second number: ");

operation = prompt("Enter which operation you need (Add, Subtract, Multiply, or Divide): ");

if (operation.toLowerCase() == "add"){

    answer = add(firstNumber, secondNumber);
    operation = "+";

} else if (operation.toLowerCase() == "multiply") {

    answer = multiply(firstNumber, secondNumber);
    operation = "*";

} else if (operation.toLowerCase == "subtract") {

    answer = subtract(firstNumber, secondNumber);
    operation= "-";
} else {

    answer = divide(firstNumber, secondNumber);
    operation = "/";

}

if (secondNumber != 0) {

    console.log(firstNumber + " " + operation + " " + secondNumber + " = " + answer);
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2==0){
        alert("You cannot divide by zero!");
        return 0;
    }
    return num1 / num2;
}

