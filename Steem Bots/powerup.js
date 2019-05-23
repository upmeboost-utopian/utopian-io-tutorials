//Importing libraries/frameworks
let steem = require('steem');

let acc = "lonelywolf",
    wif = "5Jxxxxxxxxxxxxxxxxxxxxxxxx";
let min_pwrup = 1;

//Starting the function.
accountPowerup();

//creating the account powerup function
function accountPowerup(acc, wif){
    console.log("Checking if your account has  " + min_pwrup + " STEEM to power up!");
	//getting the account data
	steem.api.getAccounts([acc], function(err, res){
    	let account= res[0];
		//checking the steem balance with the minimum powerup var
		if(account.balance.replace(' STEEM', '') >= min_pwrup){
			steem.broadcast.transferToVesting('5Jxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',acc,acc,account.balance, function(err, result) {
     			console.log(err, result);}
			);
		}
	});
	setTimeout(function(){accountPowerup();}, 5*60*1000);
}
