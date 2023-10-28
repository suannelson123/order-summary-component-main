
/* 
console.log("Hello World!");
console.log(typeof "Nelson");
console.log(typeof 42);
console.log(typeof true);


//strings
const myVariable = "Mathematic";
//console.log(myVariable.length);

//stringmethods
console.log(myVariable. charAt(6));

//length property
console.log("every good boy does fine".length);

 */

/* 
//inter is a whole number
const myNumber = 42;

//a number with a decimal point is a float references the "floating point"
const myFloat = 42.0;
const myString =42;

console.log(Number (myString) + 3);


//number methods
//the number.isInteger() determines whether the passed value is an integer
//Number.parseInt() method parse  a string argument and returns an integer

console.log(Number.isInteger(myNumber));

 */



let count = 0;

document.getElementById("decreaseBtn").onclick = function() {

        count -= 1;
        document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("resetBtn").onclick = function() {

    count = 0;
        document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function() {

    count += 1;
        document.getElementById("countLabel").innerHTML = count;

}