const accountId = 14443
let accountEmail = "Khemsinghece@gmail.com"
var accountPassword = " 12356"
accountCity = "HP"

let accountState;

//accountId = 2 not allowed

console.log(accountId);


accountEmail = "hc@hc.com"
accountPassword = "68537"
accountCity = "Shimla"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
