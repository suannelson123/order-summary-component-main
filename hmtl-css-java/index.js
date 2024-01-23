console.log("Hello World!");

let FirstName = "Nelson";
let student = true;
let age = 19;
age = age + 1;

console.log("Hello", FirstName);
console.log("Enrolled:", student);
console.log("You are", age, "yers old");


document.getElementById("header1").innerHTML = "Hello " + FirstName;
document.getElementById("header2").innerHTML = "You are " + age + " years old ";
document.getElementById("header3").innerHTML = "Enrolled: " + student;

let students = 42;

students = students + 1;

console.log(students);

//let username =  window.prompt("whats your name?");
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;


console.log("username");

document.getElementById("myLabel").innerHTML = "hello " + username;
}



document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);


    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C" + c;
    
}

