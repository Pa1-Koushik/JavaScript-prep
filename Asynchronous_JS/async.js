
// before promises we used callback functions for async operations
const cart = ["shoes","backpack","mobile"]

createOrder(cart,function (orderid){
    ProceedPaymentOrder(orderid)
})

// issue with the above code - inversion of control; we dont have any control over 
// this code, it might call the api twice,or not call, we are randomly expecting 
// to call ProceedPaymentOrder code once the order is created...
// here we are passing a call back function to another function 
// createOrder would have called ProceedPaymentOrder whenever it wants to 



// we can resolve this type of situations by using " promises "

const promise = createOrder(cart)
// promise retuens an empty object {data:undefined} at that moment and after some async
//time the data will filled automatically 
promise.then(function(orderid){
    ProceedPaymentOrder(orderid)
})
 //here we are attaching the call back functions to a promise obj
 // using this ".then" function with the promise object we can attach a callback fun
// once we have the data in the promise obj, the callback function will be 
//automatically called 
// promise obj will call the callback function once 

const Github = "https://api.github.com/users/Pa1-Koushik"

const user  = fetch(Github)
user.then(function(data){
    console.log(data)
})

// promise objects are immutable


//Promise Chaining

createOrder(cart).then(function(orderid){
    return ProceedPaymentOrder(orderid)
})
.then(function (PaymentInfo){
    return showSummary(PaymentInfo)
})

//using arrow function
createOrder(cart)
.then(orderid=>ProceedPaymentOrder(orderid)) 
.then(PaymentInfo=>showSummary(PaymentInfo))

//Creating a new promise 

const mycart = ["mobile","charger","pendrive"]

const mypromise =  CreateOrder(mycart)

console.log(mypromise)
mypromise.then( function (orderID){
console.log(orderID)
})
console.log(mypromise)

function CreateOrder(mycart){
const pr = new Promise(function(resolve,reject){
  
    if(!validate(mycart)){
        const err = new Error("Cart is not valid")
        reject(err)
    }

    const orderID='1234';
    if(orderID){
        resolve(orderID)
    }
});
return pr
}

function validate(mycart){
    return true
}


