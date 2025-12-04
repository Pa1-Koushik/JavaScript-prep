//object destructuring
// const employee = {
//     id:1,
//     name:"Koushik",
//     age:25,
//     department:"development",
//     address:{
//         city:"vizag",
//         country:"India"
//     }

// }

// const name = employee.name
// const age = employee.age

// const {name:fullname = "pannu",age,id} = employee

// const {address:{country}} = employee

// console.log(country)
// console.log(fullname,id)
// console.log(age)

// arrays 

// const fruits = ["apple","banana","mango","kiwi"]

// const f1=fruits[0]
// console.log(f1)

// const [item1,,item3] = fruits
// console.log(item1,item3)

// const [i1,...remaining] = fruits
// console.log(remaining)

//array and object destructuring

// const users = [
//     { name: "John", age: 25 },
//     { name: "Kumar", age: 30 }
// ];

// const [,{name:fullname}] = users;
// console.log(fullname)


// const company = {
//     cname:'mg',
//     locations:["india","usa","australia"]
// }

// const {locations:[,loc]} = company
// console.log(loc)

//template literals

// var myname ="pavan"
// var greeting = `hello ${myname}, how are you ?`
// console.log(greeting)

// const msg = `
// This is a multi-line
// string using template literals
// in javascript
// hope you find it useful!
// `;
// console.log(msg);

// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     address: {
//         street: "5th Avenue",
//         number: 123,
//         country: {}
//     }
//   };



 //   console.log(person.address.country)

// const user = {};
// console.log(user?.profile?.name); //throws error without optional chaining

// const data = null;
// console.log(data?.[0]);  // undefined (safe)

// let myname = "";
// let user = myname || "Pavan"

// console.log(user)

// ??operator checks for null or undefined only
// let myname = null;
// let user = myname ?? "Pavan"

// console.log(user)




// const name = "Pavan";
// const age = 24;

// const user = { name, age };
// console.log(user);

//spread operator 

// const myarr = [1,2,3,4,5]

// console.log(...myarr)

// const arr = [1,2,3]
// const arr2 = [...arr,4,5,6]
// console.log(arr2)


// const obj1 = {name:"pavan",age:24}
// const obj2 = {...obj1,c:3,d:4}
// console.log(obj2)

// const num= [8,5,8,1,4,9]

// const max=Math.max(...num)
// console.log(max)

//rest operator

// const [first,...other] = [10,20,30,40,50]
// console.log(first)  
// console.log(other)

// const users = {
//     name:"pavan",
//     age:24,
//     city:"bangalore",
//     country:"india"
// }

// const {name: myname,...otherinfo} = users
// console.log(myname)
// console.log(otherinfo)

// function sum(...numbers){
//     return numbers.reduce((a,b)=>a+b) // it will take the array of numbers and sum them up
// }
// console.log(sum(1,2,3,4,5))
