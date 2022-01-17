// we can wtire a string multiple ways. 

let str1 = "String with Double Quotation Marks";
let str2 = 'String with Single Quotation Marks';
let str3 = `String with Backticks`;

// useing backticks will be easy when it comes to concat stings. and writing multiline texts.

// we can write all the text between backticks without additon line brakes and concatanations we do in,
// single or doubel quotations marks. 
let multiLineTextWithDoubleQuotes = "This is a \n" +
    "Multiline Text with Double Quotations";
console.log(multiLineTextWithDoubleQuotes);

let multiLineTextWithBackticks = `This is
Multiline Text with Backticks`;
console.log(multiLineTextWithBackticks);

// also if we want to add dynamic values to the string. we can do it more readable way

let firstName = "Hasitha";
let age = 33;

console.log(`My name is ${firstName} and I am ${age} yeas old.`);

// without concat the sting we can write dynamics values inside ${} syntaxes

