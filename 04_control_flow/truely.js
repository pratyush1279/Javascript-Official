const userEmail = ""  // automatically a true value

if(userEmail) {
    console.log("got user email")
} else {
    console.log("Don't have user email");
}

// falsy values 
// false , 0, -0, BifInt 0n, "" , null, undefined, Nan

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
val1 = undefined ?? 15 

console.log(val1)

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") :  console.log("more than 80")
 