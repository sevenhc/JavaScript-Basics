
// we can destructuring objects and arrays. 
// let's first see how we work with object destructuring.

const myInfo = {
    Name: "Hasitha",
    Age: 33,
    CoursesList: ["JavaScript", "C#", "NODE"],
    CourseLevel: {
        Subject: "JavaScript",
        Level: "Intermidiete"
    }
}

// let's say we havea function that we need only Name and Age. 
// but we get this myInfo Object based on the user inputs. 
// yes we can still pass the entire object to the function and inside the function we retun the value
// of Name property. 
//this function works fine.
const ReturnNameFromFullObject = (info)=>{
    return info.Name;
}
console.log(ReturnNameFromFullObject(myInfo));

// example of object destructuring. 
// syntax for object destructuring is {}

const ReturnNameObjDestructure = ({Name}) =>{
    return Name;
}
console.log(ReturnNameObjDestructure(myInfo));

// inside the curly braces, we need to add the propery names we need to use from the object. 
// we can use multiple properties just by seperating them with commas. 

const ReturnNameObjDestructureTwo = ({Name, Age}) =>{
    return Name + " - " + Age;
}
console.log(ReturnNameObjDestructureTwo(myInfo));

// this is not only work with functions. we can use this outside the functions as well. 
// we can get properties of nested object as well

const {Name, CourseLevel: {Subject}} = myInfo;
console.log(Name, Subject);


// now let's see how we destructuring arrays. 
// for array destructuring the syntax is [].

const destructureArray = ["Apple", "Banana", "Orange"];
const [fruit1, fruit2] = destructureArray;
console.log(fruit1, fruit2);

// here we can use any name. because valuse from the array assignd in to these variales 
// first element will alwasy assing to first variable. and second element to second variable. 


