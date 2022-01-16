// other mainn data structure we use in JS is Arrays
// we can store strings, numbers, objects, etc in an array. 
// it does not have to be one data type. we can store multiple data types in an array

const firstArray = ["Apple", "Banana", "Orange"];
//loop through the array to print all valus
for(let item of firstArray){
    console.log(item);
}

// example for storing multiple types.

const secondArray = ["Car", 2.00, true, {}];
// we can read values by index.
console.log(firstArray[1]);


//there are lot of functions we can use with an array. for example 'map', 'pop', 'filter', etc.

//Just like objects, arrays are also reference type which means they are stored in the heap. 
//and pointer to the object store in the stack.
//there for when we assign an array to a new variable it does not copy the values. 
//it's just pointer assigned in to the new variable 
// let's take firts array. 

const firstArrayCopy = firstArray;
firstArray[0] = "Dog";

console.log(firstArray);
console.log(firstArrayCopy);

// to create a real copy of an array we can user JavaScript slice function.

const firstArrayCopyTwo = firstArray.slice();
firstArrayCopyTwo[0] = "Chair";
console.log(firstArrayCopyTwo);