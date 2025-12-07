// call ,apply and bind methods 

// name1 = {
//     fname:"pavan",
//     lname:'koushik',
//     printname:function (){
//         console.log(this.fname + " " + this.lname)
//     }
// }

// name1.printname()

// name2 = {
//     fname:"rohit",
//     lname:'vignesh',
// }
// name1.printname.call(name2)

// name1 = {
//     fname:"pavan",
//     lname:'koushik',
// }

//     function printname (age,city){
//         console.log(this.fname + " " + this.lname +" "+ age+" "+city)
//     }

// printname.call(name1,25,"bellary")

// name2 = {
//     fname:"rohit",
//     lname:'vignesh',
// }
// printname.apply(name2 ,[22,"pune"])

// let result = printname.bind(name2,"bellary",22)
// result()

// const user ={
//     namee:"pavan"
// }
// function myname(greet){
//     console.log(this.namee+" "+greet)
// }
// myname.call(user,"hello")

const json = '{"name": "pavan", "age": 24}';

// const obj = JSON.parse(json);

// console.log(obj); // pavan
// console.log(json)

const names ={
    fname:"pavan",
    age:26,
    city:"bell"
}
const result = JSON.stringify(names)
console.log(result)
const jsonconv = JSON.parse(result)
console.log(jsonconv)


// console.log(m); 
// ReferenceError: a is not defined

// let num = 5;
// num.toUpperCase();
// TypeError: num.toUpperCase is not a function

// let a = ;  
// SyntaxError: Unexpected token ';'

let arr = new Array(-5);
// RangeError: Invalid array length
