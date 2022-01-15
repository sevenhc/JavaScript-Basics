//obect is a common data structure we use when working with JS. 
// we can define a object as below 

const myObject = {
    FirstName: "Hasitha",
    LastName: "Chamikara",
    Age: 33
}

console.log(myObject);

// this is not limited to just string, int ro boolean. add functions, 
// arrays (arrays will be explain in next slide '4 - arrays.js'), objects and etc. 
// just have to define them as key value pairs. 

const mySecondObject = {
    Name: "Hasitha",
    Age: 33,
    CoursesList: ["JavaScript", "C#", "NODE"],
    CourseLevel: {
        Subject: "JavaScript",
        Level: "Intermidiete"
    }
}

//There are multiple wasy of defining a function in a object.

const myFunctionObject = {
    add: function (a, b) { return a + b; },
    minus(a, b) { return a - b; },
    multiply: (a, b) => { return a * b; } // we can remove paranthesies and return keyword if it is only one line
}

console.log(myFunctionObject.add(1,2));
console.log(myFunctionObject.minus(1,2));
console.log(myFunctionObject.multiply(1,2));
