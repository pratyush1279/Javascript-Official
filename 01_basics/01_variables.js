const accountId = 144553
let accountEmail = "masterpp@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "hehe@gmail.com"
accountPassword = "12123523"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])