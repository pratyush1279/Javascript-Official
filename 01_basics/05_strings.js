const name = "pp master"
const repoCount = 50

console.log(`My name is ${name} and  my repo count is ${repoCount}`)

const fullName = new String("Pratyush Patwal")
console.log(fullName[0])
console.log(fullName.__proto__); 
console.log(fullName.toUpperCase()); 
console.log(fullName.charAt('5')); 
console.log(fullName.indexOf('P'));


const newString = fullName.substring(0,5)
console.log(newString);

const anotherString = fullName.slice(0,8)
console.log(anotherString);

const newStringOne = "     PPmaster   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://masterpp.com/pratyush%20patwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('pratyush'))