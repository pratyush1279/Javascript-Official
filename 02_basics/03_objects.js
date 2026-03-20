// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Pratyush",
    "full name" : "Pratyush Patwal",
    [mySym] : "heyyy",
    age : 21,
    location : "Jaipur",
    email : "pratyushpatwal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.age)
console.log(JsUser["age"])
console.log(JsUser["full name"])  // only syntax to access this
console.log(JsUser[mySym])  // return the value of key


JsUser.email = "pratysh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "pratyush@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){       // function is stored inside an object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){       
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());