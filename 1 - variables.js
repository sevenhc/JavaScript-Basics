//js is a Weakly Typed language. there for we don't have type assigned to variable. 
//There are three ways of declaring a variables. 
// var, const, let
//Before ES6, we used 'var' to decalare variables. but with ES6 this chacnged a bit. 
//but we still can use 'var' to declare variables. 

//declare variable with 'var'. here the name is a string type, but we haven't mentioned the type. 
//JS take it as string when we mentined the value inside quotes. 

var firstName = "Hasitha";

//With ES6 we get to use let and const..
// we use 'let' to declater a variable that can be changed in the future. 

let age = 33;

// 'const' variables cannot be changes after assignment. 
//therefor we need to assing value at the time of initializing the variable. 
const lastName = "Chamikara";


//if you try to assign a new value to 'LastName' which is const variable, it will throw an error.

//LastName = "MLP";

console.log(firstName+ " " + lastName);