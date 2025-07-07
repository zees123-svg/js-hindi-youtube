const accountId = 12345
let accountEmail = "zeeshan@gmail.com"
var accountPassword = "67890"
accountCity = "Okara"
let accountState;

// accountId = 23456 // Not Allowed
accountEmail = "abc@gmail.com"
accountPassword = "123456"
accountCity = "Lahore"

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])