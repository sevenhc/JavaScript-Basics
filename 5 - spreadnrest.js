// in objects and arrays I have explaine how to copy value to a new variable. 
// when we working with modern JS apps using ES6+, we can use spread operator to take a copy.

// how we use spread operator
//if we want to copy a object we need to use curly braces {}, 
//and if it is an array we need to user square brackets [], 
//  then inside these we add three dots "..." and then the object or array
// object example: { ...objectVariableName }
// array example: [ ...arrayVariableName ] 

const objectOne = {
    Name: "Hasitha",
    Age: 33,
    CoursesList: ["JavaScript", "C#", "NODE"],
    CourseLevel: {
        Subject: "JavaScript",
        Level: "Intermidiete"
    }
}

const objectOneCopy = { ...objectOne };
objectOneCopy.Age = 34;
objectOneCopy.CourseLevel.Subject = "C#";
console.log(objectOne);
console.log(objectOneCopy);

//let's try this with an array now. 
const arrayOne = ["Car", "Van", "Bus"];
const arrayOneCopy = [...arrayOne];
arrayOneCopy[0] = "Dog";
console.log(arrayOne);
console.log(arrayOneCopy);

// but if this is a complex array which include objects and lists. it will not do  a deep clone
const arrayTwo = [{
    Registered: true,
    RegNumber: "WP ASD 1254"
}, "Van", "Bus"];
const arrayTwoCopy = [...arrayTwo];
arrayTwoCopy[0].Registered = false;

console.log(arrayTwo);
console.log(arrayTwoCopy);


// NOTE that spread operator doe not do a deep clone. to create a deep clone of an object or array
// so we need to go though all properties that have reference type values. and copy them individually. 
// but this will be very dificult when it come to complex datasets.
// one of the easy way of deep cloning is useing JSON Stringify and JSON parse methods. 

const objectDeepCopy = JSON.parse(JSON.stringify(objectOne));
objectDeepCopy.CourseLevel.Subject = "NODE";
console.log(objectOne);
console.log(objectDeepCopy);

const arrayDeepClone = JSON.parse(JSON.stringify(arrayTwo));
arrayDeepClone[0].RegNumber = "WP XYZ 2541";
console.log(arrayTwo);
console.log(arrayDeepClone);

// now lets talk about rest operator
// let's say we have a function which take some argumenst and returns them as an array. 
// how we normally write this code is as below.

const ReturnArray = (a1, a2, a3) =>{
    return [a1, a2, a3];
}
console.log(ReturnArray(123, 234, 345));

// if we know the number of argument passed in to the function and it is fixed then above funtion is good. 
// what if we send argument based on user inputs. 
// we can call the function like this ReturnArray(123, 234, 345, 456, 567); 
// this will not throw an error. 
// but this will always return array with only first three nummbers.
// because function does not take more than three (3) arguments. 
// to work with dynamic number of values pass in to the function, we can use rest operator. 

const RestOpReturnArray = (...args) =>{
    return args;
}
console.log(RestOpReturnArray(123, 234, 345));

// rest operator take any nymber of values. and put it in to an array. 
// so in this case 'args' will be an array. 







