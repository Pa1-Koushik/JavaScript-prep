
function square (a){
    sq=a*a
}
square(5)
console.log(sq)

function multiply (a,b){
    // result = a*b
    // console.log(result)
    return a*b
}
let ans = multiply(5,4)
console.log(ans)

// Another way of declaring a function

let addition = function (a,b){
    return a+b
}
ans =addition(6,6)
console.log(ans)

// Arrow functions 

let exp = (a,b)=>{
    return a**b
}
console.log(exp(2,10))

const multiply = (a,b) =>a * b;
console.log(multiply(5,5))

let concat =(name1,name2)=>{
    return name1+name2
}
console.log(concat("pavan"," koushik"))

let ad = function (a,b){
    sum=a+b
    console.log(sum)
}
ad(5,5)

const arrr = ()=>{
    console.log("arrow functions")
}
arrr()

const square = (n)=> n*(n+2)
console.log(square(2))

const multiply =(a,b)=>a*b
console.log(multiply(5,5))

const add = (a,b)=>{
    return a+b
}
result = add(2,3)
console.log(result)

const arr = [1,2,3,4,5]
const double =arr.map(n=>n*n)
console.log(double)

const age =[10,20,30,40,50]
const filterage = age.filter(n=>n>20)
console.log(filterage)

colours = ['red','black','pink']
colours.forEach(n=>console.log(n))

button.addeventlistner('click',()=>{
    console.log("button clicked")
})

setTimeout(()=>{
console.log("output of setTimeout")
},5000)

const apply = (x,fn)=>fn(x)

console.log(apply(5,(n)=>n*3))


// callback function 

function main(value){
 console.log(value, "executed main function");
}

function callback(){
    console.log("executed callback function");
    return "callback";
}
main(callback());

function main(value){
    
 console.log(value(), "executed main function");
}

function callback(){
    console.log("executed callback function");
    return "callback";
}
main(callback);

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Pavan"); // call the passed function
}

processUser(greet); // greet is the callback function

function check(){
    console.log("check function executed");
    return 50;
}
let x =check()
console.log(x);
