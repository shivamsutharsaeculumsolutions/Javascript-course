const account_Id = 123456;
let account_Email = "shivam@gmail.com";
var account_Password = "shiv@123";
account_City = "Ahmedabad";
let account_State;

// account_Id = 2 // not allowed

account_Email = "newshivam@gmail.com";
account_Password = "newshiv@123";
account_City = "NewAhmedabad";

console.log(account_Id);

/*
Prefer not to use var
beacaue of issue in block scope and functional scope
*/

console.table([account_Id, account_Email, account_Password, account_City, account_State])