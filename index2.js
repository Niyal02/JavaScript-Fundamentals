/* = symbol is assignment operator ,,,,, initializing a variable means giving value to a variable ,,, case sensitivity means proper naming
 format / Camel Notation -> firstName  || not this -> FiRsTnaMe */

 //Incrementing & Decrement Number
 var increment = 20;
 increment++;       // +1 le increment hunxa
 console.log(increment);

 var decrement = 20;
 decrement--;       // -1 le increment hunxa
 console.log(decrement);

 //---------------------------------------------------------

 //Remainder
 let remainder = 16 % 3;     // % is remainder operator  ,,, used to find out if a number is even or odd
 console.log(remainder);

 //-----------------------------------------------------------------
 // Addition Assignment / add and assign (operator)

let a = 10;
let b = 32;

a += 5;                 //same for subtraction assignment a-= 5 , multiply a *=5 , division a /= 5
b += 2;
console.log(a,b);

//-------------------------------------------------------------------
//Escaping quotes    (it means quote vitra ni arko quote halera lekhna milne)

let introduction = "I am a \"double quoted \" string inside \" double quotes\"";
console.log(introduction);

//-------------------------------------------------------------------
//Contatenate (+) operator

let string = "I am first\n" + "I am second";

console.log(string);

//-------------------------------------------------------------------
//Appending Variable to String

let campus = "Deerwalk is\t";
let adjective = "awesome";
campus += adjective;

console.log(campus);

//-------------------------------------------------------------------
//Finding length of a string

let stringLength = 0;
let firstString = "Today";

stringLength = firstString.length;
console.log(stringLength);
//-------------------------------------------------------------------
//Accessing Multidimensional array

let myArray = [[1,2,3], [4,5,6],[7,8,9], [[3,5,2], 7,4]];

console.log(myArray[3][0]);   //[3][0] are indexes/rows n column so 3 is 4th row {3,5,2} and [0] is first column whereas 1 is second column i.e 7

//-------------------------------------------------------------------
// pop()     OR    similar one is shift() where it removes the value/element from the beginning

let myAray = [1,2,3];
removedArray = myAray.pop();  // removes the last element of the array that is 3

console.log(removedArray); //output is 3 of this
console.log(myAray); //While printing myAray we get [1,2]
//-------------------------------------------------------------------
//Global Scope (can be accessed anywhere outside the function)
//-------------------------------------------------------------------
//If statement

function trueOrfalse(isTrue) {
    if(isTrue){
        return "True";
    }
    return "False";
}
console.log(trueOrfalse(false));  //if false answer is false else true
//-------------------------------------------------------------------
//Equality Operator

function equalOrnah(isEqual) {
    if(isEqual == 15){      // double equal sign/operator here (==) because a single equal is assignment operator
        return "Equal";
    }
    return "UnEqual";
}
console.log(equalOrnah(3));
//-------------------------------------------------------------------
//Strict Equality Operator
function equalOrnah(isEqual) {
    if(isEqual === 15){      // triple equal sign/operator here (===) because a double equal only checks if the value are equal or not despite being a number or a string
        return "Equal";      // by doing a type conversion but in === the type should be strictly same such as either both number or both string. 
    }                        // Eg: in if(=== 4), in clg ('4') then its unqual
    return "UnEqual";
}
console.log(equalOrnah(15));
//-------------------------------------------------------------------
// For InEquality operator we use != operator & strict inEquality operator its !==
//-------------------------------------------------------------------
// AND OR Operator
function testLogic (val){
    if(val <= 50){
        if(val >= 20){
            return "Yes";
        }
    }
    if (val <=100){
        if (val >= 90){
            return "No";
        }
    }
}
console.log(testLogic(25));
//-------------------------------------------------------------------
//Else  statement
function testElse(val){
    if(val > 5){
        return "Bigger than 5";
    }else{
        return "Less than 5";
    }
}
console.log(testElse(6));
//-------------------------------------------------------------------
//Else if statement
function testElseif(val){
    if(val > 10){
        return "Bigger than 10";
    }else if(val < 5){
        return "Less than 5";
    }else{
        return "In between 5 & 10";
    }
}
console.log(testElseif(6));
//-------------------------------------------------------------------
//Switch case statement
function testSwitch(value){
    switch(value){
        case 1:             // : symbol means strict equality
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
    }
    return answer;
}
console.log(testSwitch(2));
//-------------------------------------------------------------------
//While loop
let testArray = [];
let i = 1;
while(i < 5){               //for while loop in terms of array we do this and for simple output we do console.log("Output is\n:" +i);
    testArray.push(i);
    i++;
}
console.log(testArray);
//-------------------------------------------------------------------
//For loop
let myArrayy = [];
for (let count = 0; count<5; count++){
      console.log("Output is:\n" +count);   
}
//-------------------------------------------------------------------
