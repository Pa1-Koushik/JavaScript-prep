// closure example 
// closure - function along with its lexical scope

function x (){
    var a = 7;
    function y(){
        console.log(a)
    } 
    a=100
    return y
}
z=x()
console.log(z)
z()
// first nameste will print then only value of i will be printed
function y (){
    var i = 10;
    setTimeout(()=>{
        console.log(i)
    },5000)
    console.log("nameste")
}
y()

function z (){
    for(var i=1;i<=5;i++){
        function close(x){

            setTimeout(()=>{
                console.log(x)
            },x*1000)  
        }
        close(i)
    }
    console.log("nameste")
}
z()
var m = 90
function outer(){
    // var m=90;
    function inner(){
        console.log(m)
    }
    return inner
}
outer() ()

function c(x){
    var i=99;
    function d(){
        console.log(i ,x)
    }
    return d
}
c("Pa1")()

function outest(v){
    function outer(p){
        var w =20
        console.log(v)
        function inner(){
            console.log(w,v,p)
        }
        return inner
    }
    return outer
}

outest(30)("kp")()
console.log(outest()()())

function out(){
    let t = 9;
    function inn(){
        console.log(t) 
        // is has formed closure with the lexcical scope 
        //since the reference value of a is already present in parent lexical env 
        // it doesnt care about the a in global.
    }
    return inn
}
out() ()
// let t = 99;




