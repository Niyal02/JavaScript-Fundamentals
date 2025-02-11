// Example
console.log("Hello world");
// this is called in-line comment
/* this is multi line comment */

//------------------------------------------------------------------

//Variables

let food;    //let is used to declare a variable and food is the variable here
console.log(food);

/* This output in console of the browser will be undefined because no value for variable is provided */

let food1 = "Momo";
console.log(food1);  //Now the output shown in the console will be Momo

/* Best Practices -
1.  Camel Notation Means first letter small after that capital like : let firstName
2. Each variable defined seperately like : let firstName, lastName; (This is bad)
    Instead let firstName='abc';    let lastName='def';
3. Value of variable in quotation '' if string, if a number than no string only write value directly
*/

//-------------------------------------------------------------------

//Constants

const interestRate = 0.3;
//interestRate = 1; 
console.log(interestRate); // Output will be 1 if we do let intRate on line 28

/* if we need to reassign or change value later we use let else in real world we use const mostly */

//---------------------------------------------------------------------

//Primitive Types / Value Types (String, Num, Boolean, undefined, null)

let animal = "Dragon"; //String Literal (Fancy name of string)
let age = 34;        // Number Literal
let isApproved = true; // Boolean Literal
let caste;             //undefined
let selectedColor = null  // null is used to clear the value of a variable

//-----------------------------------------------------------------------

//Dynamic Typing

/* In console write typeof animal, it gives string output, later can be changed into animal = 12 , again write typeof animal and gives number
 Which means it can be changed during runtime
*/

//-----------------------------------------------------------------------

//Reference Types (Ojects, Array, Function)

//1. Objects (real world objects)

let person = {
    name: "Akash",     //age and name are the properties of person object
    age: 23
}

console.log(person);

//Two ways to access the name property - 
// a. Dot Notation (Mostly used)
person.name = "John";
console.log(person.name);

// b. Bracket Notation
person['name'] = "Abram";
console.log(person.name);

//2. Array

let selectedPants = ['long', 'short'];   //0 & 1 displayed in console are index
selectedPants[2] = 'half';
console.log(selectedPants);

console.log(selectedPants[0]);           // if we want to access an element/index in an array we use [0 or 1] as per needed

// 3. Functions
//Type 1. Performing a task
function greet() {           // greet is name , () is syntax for function , {} is the body where logic is performed
    console.log("Hello Nepal")
}

greet();                    // function call gareko

/*  OR  */

function greeting(name, children) {           //name is parameter
    console.log('Hello ' + name + ' ' + children)
}

greeting('Bikram',  3);              // passing value for name parameter, if not, shows name undefined {here Bikram is an |argument| i.e value}
greeting('Mary', 'none');           // none is also an argument

//-------------------------------------------------------------------

//Types of Functions
// 2. Calculating a value

function square(number){
    return number * number
}

console.log(square(2));    // this is just used to display the value which is simple

let number = square(2);   // another mostly used method is gusing the value 2 to initialize the variable
console.log(number); 