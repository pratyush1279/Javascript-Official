// Primitive --- Change in copy

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference 

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 31486325896942358635n


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "naagraj", "krish"]

// ******************* object *******************
let myObj = {
    name: "Pratyush",
    age: 21,
}


// ************************ functions *****************

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj)