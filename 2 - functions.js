//there are multiple typr of ways to declare a function.
//the defauld way befor ES6 is, 

function MyDefaultFucntion() {
    return "My Default Funtion";
}

console.log(MyDefaultFucntion());

//with ES6 we get new way of defining a function call arrow function. 

const MyFirstArrowFunction = () => {
    return "My First Arrow Function";
}

console.log(MyFirstArrowFunction());

// if funnction have argumrnt, then we can define them in the brackets. 

const MyArrowFunctionWithArguments = (firstName, lastName) => {
    return "My Arrow Function With Arguments returns: "+ firstName + " " + lastName;
}

console.log(MyArrowFunctionWithArguments("Hasitha", "Chamikara"));

// if there is only one argument pass in to the function, we can define the function without brackets
const MyArrowFunctionWithOneArgument = fullName => { 
    return "My Arrow Function With One Argument returns: "+ fullName 
}
console.log(MyArrowFunctionWithOneArgument("Hasitha Chamikara"));

// if the funtion only have one line, we can define it as below. without parentheses. 
// this will always returns the value, so we dont have to use return keyword in this case. 

const MyArrowFunctionWithOneLine = fullName => "My Arrow Function With One Line returns: "+ fullName ;

console.log(MyArrowFunctionWithOneLine("Hasitha Chamikara"));