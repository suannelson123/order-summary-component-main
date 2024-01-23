
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

        count -= 2;
        document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("resetBtn").onclick = function() {

    count = 0;
        document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function() {

    count += 2;
        document.getElementById("countLabel").innerHTML = count;

}































//javascript sandbox output





/* 
alert('Hello, Wolrd');
[1,2].forEach(alert);



 */


/* alert("Hello, Wolrd");

[1,2].forEach(alert); */


/* let user = "Nelson";
let age = "20";
let message = "Hello po i love coding";


console.log(user, age, message);   */


/* let message;

message = "Hello po barabayskie";

alert(message);

 */


/* let $ = "Hello";
let _ = "world";

alert($ + _);
 */


/* const myBirthday = "25.09.2003";
console.log(myBirthday); 
alert(myBirthday); */

/* const MY_FAVORITE = "coding";

let love = MY_FAVORITE;
alert(love); */


/* const myColor = "BLACK";
const userName = "Nelson";
const age = "20";
const message = "Becoming a front-end developer";

alert (userName + age);

console.log(userName + age + message);  




 */




/* 
const myColor = "black";

let user = "Nelson";
let age  = "20";
let message = "Hello world its my first javascript code";

alert(message);
console.log(user , age , message);
 */


/* const myColor = "black";
const myEmail = "nelsonsuan12@gmail.com";

let user = "Nelson";
let age = "20"

console.log(myEmail + age );
alert("Hello" + user);   */

/* 
let name = "Nelson";

alert(`Hello, ${name}!`);

 */
/* let name = "Nelson";

alert( `Hello ${name}`) */
/* 
const myColor = "red";

let user = "Nelson" ,
age = "20" , 
message = "Hello world, Im learning javascript";
 */
/* 
alert( `${user} , ${age}  ${message}`); */

/* alert(user + age + message ); */

/* console.log( `${user}`) */
/* 
let age = prompt("How old ar you?");
alert( `you are ${age} years old`);

 */

/* alert
let
const
prompt
confirm

 */

/* let conf = confirm("you must be 18 years old and above to view this site");
let name = prompt("What is your name?");
let age = prompt("How old are you?");



if (age >= 18) {
    alert(`Welcome ${name}!`);
    }

else  {
    alert(`Sorry ${name}, you must be at least 18 years old to view this content.`);
}    

 */

/* let conf = confirm("you must atleast 18 years old to view this content");
let name = prompt("what is your name?");
let age = prompt("how old are you?");

if(age >= 18 ) {
    alert(`Welcome, ${name}!`);
}


    else {

        alert(`Sorry ${name} you must atleast 18 years old to view this content`);

    }


 */



 /*    let con = confirm("you must at least 18 years old to view this content.");
    let name = prompt("what is your name?");
    let age = prompt("how old are you?");

    if (age >= 18) {
        alert(`Welcome, ${name} Enjoy!`);
    }
    
    else {
        alert(`Sorry ${name} you must at least 18 years old to view this content`);
    } */


/*     let conf = confirm("you must be atleast 18 years old to view this content");
    let name = prompt("what is your name?");
    let age = prompt("how old are you?");

    if (age >= 18) {

        alert(`Welcome to summoners rift, ${name}`);

    }

    else {
        alert(`Sorry ${name} you are not welcome to summoners rift`);
        

    } */


  /*   let conf = confirm('you must be at least 18 years old to view this content');
    let name = prompt('what is your name?');
    let age = prompt('how old are you?');

    if (age >= 18) 
    {

        alert(`Welcome, ${name} Enjoy!`)

    }

    else {

        alert(`Sorry, ${name} you must be 18 years old to enter this site`);


    } */

/* 
    let company = prompt("what is the official name of javascript"); 
    if (company == 'ECMAscript') {

        alert(`You are right!`)

    }

    else {

        alert(`You are Wrong`)
    } */




/* let number = prompt("what is the number");

if (number > 0) {
    alert(1)
}

if (number < 0) {
    alert(-1)

}

if (number == 0) {
    alert(0)

} */


/*    a = 1; b= 2;

let result = (a + b < 4) ? 'Below' : 'Over';

alert(result) */


/* a = 1; b = 3; 

let result = (a + b < 4) ? 'below' : 'Over';  */
/* 
let number = 2;
while(number < 20) {
    console.log(number)
    number = number +2;
} */









const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];

let sum = 0;
let n = 0;

while (n < numbers.length) {
sum += numbers[n];
n++
}
console.log(sum);