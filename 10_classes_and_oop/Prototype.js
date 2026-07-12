// let myName = "pratyush   "
// let myChannel = "chai     "

// console.log(myName.truelength)

let myHeroes = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "swing",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.pratyush = function(){  // inject something in object like this 
    console.log(`Pratyush is present in all objects`)
}

Array.prototype.heyPratyush = function(){
    console.log(`Pratyush says hello`)
}

// heroPower.pratyush()

myHeroes.pratyush()
myHeroes.heyPratyush()
// heroPower.heyPratyush()