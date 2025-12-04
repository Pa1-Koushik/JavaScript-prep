//array methods practice

//map() – transforms each item & returns a new array

// const numbers = [1, 2, 3, 4, 5];

// const double =numbers.map(num=>num*2)

// const doublev2 = numbers.map(num => num * 2);
// console.log(double)

// const stringg = numbers.map(n=>String(n))
// console.log(stringg)

// const stringgg = numbers.map(function(n) {
//   return String(n);
// });

// const users = [{myname:"pavan",age:24},{myname:"pannu",age:28}]
// const uservalues = users.map(val=>val.myname)
// console.log(uservalues)

// const temp = [43,56,24,67]

// const celsius = temp.map(val=>(val-32)*5/9)
// console.log(celsius)
// console.log(temp)

//filter() – returns only items that match a condition

// const num = [2,4,3,2,"",4,1,5,6,,,77,,422,232,21]
// const even = num.filter(n=>n%2==0)
// console.log(even)
// console.log(num)

// const adults = num.filter(n=>n>=18)
// console.log(adults)

// const nonempty=num.filter(n=>n!="")
// console.log(nonempty)
// console.log(num)

// const names =["pavan","akansha","preeti","koushik","ani","sabaasheik"]


// const result = names.filter(n=>n.includes("p")&& n.length>5)

// const result = names.map(n => n.replaceAll("p", "P"));
// console.log(result) 

// const result = [{amount:250,transactiontype:"debit"},
//     {amount:300,transactiontype:"credit"},{amount:400,transactiontype:"debit"},
//     {amount:500,transactiontype:"credit"}]

//     const filterredresult = result.filter(n=>n.amount>250 && n.transactiontype==="debit")
//     console.log(filterredresult)

//reduce() – reduces array into a single value ???

// const arr = [1,2,3,4,5]

//find() – returns the FIRST matching item <>

// const names=["pavan","akansha","preeti","koushik","ani","sabaasheik"]

// const result = names.find(n=>n.includes("p"))
// console.log(result)

// const num =[1,5,4,3,2,6,8,7]
// const findev = num.find(n=>n%2==0)
// console.log(findev)


// some() – returns TRUE if ANY item matches <>

// const users = [{name:"pk",role:'developer'},{name:"akansha",role:'designer'},
// {name:"preeti",role:'developer'}]

// const devusers = users.some(v=>v.role==="developer")
// console.log(devusers)

//every() – returns TRUE only if ALL match <>

// const alldev = users.every(v=>v.role==="developer")
// console.log(alldev)

//reduce() – reduces array into a single value

// const arr = [1,2,13,40,5,90]

// const sum = arr.reduce((acc,curr)=>acc+curr,0)
// console.log(sum)

// const product = arr.reduce((acc,curr)=>acc*curr,1)
// console.log(product)

//count occurrences of items in an array using reduce 
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple','apple'];

// const fruitCount = fruits.reduce((acc,curr)=>{
// acc[curr] = (acc[curr] || 0 ) + 1 ;
// return acc;
// },{})

// console.log(fruitCount)

// const fruitcounts = fruits.reduce((acc,curr)=>{
// acc[curr] = (acc[curr] || 0) +1
// return acc
// },{})
// console.log(fruitcounts)    


//  const max = arr.reduce((acc,curr)=>curr>acc ? curr:acc,0)
//     console.log(max)   

// const b = {}
// // b[myname]="pavan"
// b["myname"]="pavan"
// console.log(b)

const num = [1,2,3,4,5,6,7,8,9,10]

const res = num.forEach(n=>console.log(n))


// console.log(res)

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple','apple'];

// const fruitindex = fruits.forEach((val,ind)=>{

//     console.log(ind + ":" +val)
// }
// )
