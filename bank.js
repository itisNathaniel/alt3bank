// our requirements
var MonzoApi = require('monzo-api');
var fs = require('fs');

// import credentials from file
var userCreds = fs.readFileSync('credentials.txt').toString().split("\n");
var clientId = userCreds[0];
var clientSecret = userCreds[1];

const monzoApi = new MonzoApi(clientId, clientSecret);

nodeobject();

// we use async as it very nicely waits for our API friend to get back to us
async function nodeobject() {
	var accountNames = await monzoApi.accounts([clientSecret]);

	for (var account in accountNames.accounts)
	{
		var thisAccount = accountNames.accounts[account].id;
		var accountBalance = await monzoApi.balance(thisAccount,[clientSecret]);
		console.log(thisAccount + " balance: " + accountBalance.balance);
		var transactionList = await monzoApi.transactions(thisAccount, [true], {}, [clientSecret]);
		
		// fetch our list of transactions
		console.log(transactionList);

	}


}
