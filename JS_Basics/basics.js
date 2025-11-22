
var b = 20 
var b = 60
console.log(b)
// // variables can be redeclared 

let a = 50 
 a = 150 
console.log(a)
// // let can be reassigned

const b =100
 b = 1
console.log(b)
// // const value cannot be reassigned and redeclared 


console.log(c)
var c = 20 
// // var is hoisted and initialized undefined 

console.log(o)
console.log(e)
let o = 20
const e=100
// // both are in tdz before their declaration lines 

let ac = 5 
let b = "5"
console.log(ac==b)
// type coercion
let p = 5 
let q = "5"
console.log(ac===b)
// // === check for both value and data type, it does not support type coercion 

let num = 100 
console.log(String(num))
console.log(typeof(String(num)))

// //block scope 

{
    let h = 40 
    h=60
    console.log(h)
}
console.log(h) // cant be accessed outside the block

function addvalue(a,b){
    {
        var c =a+b
    }
    console.log(c)
}
addvalue(10,20)
// console.log(c)

// A variable has function scope it is only accessible inside the function in which it was declared.

let nums=[1,2,3,4,5]
console.log(nums[4])

let person = {
    name:'pk',
    age:26
}

console.log(person.name)