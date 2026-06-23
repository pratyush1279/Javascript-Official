// function name(){
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("T");
//     console.log("Y");
//     console.log("U");
//     console.log("S");
//     console.log("H");
// }

const { myMY } = require("@mui/material/locale");

// name()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// let result = addTwoNumbers(3,5)

// console.log("result: ",result)

// to return the value 

function addTwoNumbers(num1, num2){
    let result2 = num1 + num2
    return result2
}

const result2 = addTwoNumbers(3,5)

console.log("result: ",result2)

function loginUserMessage(username = 'sam'){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pratyush"))
console.log(loginUserMessage(""))
console.log(loginUserMessage("Pratyush"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,300,4000,452))

const user = {
    username : "Pratyush",
    price : 399
}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username : "sam",
    price : 399
})


const myNewArr = [2,5,8,6]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr))