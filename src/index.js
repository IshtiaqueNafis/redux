//region  ***basic functional***
function sayHello() {
    return 'Hello world';
}

let fn = sayHello; // fn is getting the reference of the function say hello wont be called here

console.log(fn()); // this will return hello world.
//endregion


//region Passing ***function as arguments***
function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello)  //this will return hello world.
//endregion

//region anonymous function return 
function sayhello2() {
    return function () {
        return 'Hello world';
    }
}

let fn2 = sayhello2()
console.log(fn2()) // Hello world will be returned with in a function

//endregion

//region ***Function Compostion***
let input = "  Javascript   " // this is a simple input
//trim
const trim = str => str.trim();
const wrapinDiv = str => `<div>${str}</div>`
const result1 = wrapinDiv(trim(input))
//region ***wrapinDiv(trim(input))***
/*
wrapinDiv(trim(input)) --> takes string as input
trim(input) --> since javascript takes firstclass citzen as trim input can be passed here
wrapinDiv(trim(input)) --> will be taken as parameter here and return function willb e pased here
 */

//endregion
console.log(result1); //<div>Javascript</div>

const result2 = wrapinDiv(input)
console.log(result2); //<div>  Javascript   </div> // in here no trimming was odne.


const toLowerCase = str => str.toLowerCase();
const result3 = wrapinDiv(toLowerCase(trim(input)));
// this will trim the input then lower it then wrap it
/*
thus the operation will be
trim-1 lowercase -2 and wrapinDiv-3
 */
//endregion

console.log(result3)

