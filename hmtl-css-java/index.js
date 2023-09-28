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