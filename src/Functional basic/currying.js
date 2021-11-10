function adding(a,b) {
    return a+b;
}
// this is a function without currying

//function with currying
const curryAdding = a => b => a + b;

const add1 = curryAdding(1); // 1 is part of the currying.
console.log(add1(2)) //3
console.log(add1(3)) //4

//other way to call currying
curryAdding(1)(2);
// see in here two parameters are being passed a:1 and b:2

