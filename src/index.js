//region  basic functional
function sayHello() {
    return 'Hello world';
}

let fn = sayHello; // fn is getting the reference of the function say hello wont be called here

console.log(fn()); // this will return hello world.
//endregion


//region Passing function as arguments
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

