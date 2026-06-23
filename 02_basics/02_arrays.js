const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][4])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log( Array.isArray([]))
console.log( Array.from("Pratyush"))
console.log( Array.from({name:"Pratyush"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

console.log(Array.from([1, 2, 3], (x) => x + x));