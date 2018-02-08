// our requirements
var MonzoApi = require('monzo-api');
var fs = require('fs');

// import credentials
var userCreds = fs.readFileSync('credentials.txt').toString().split("\n");

var clientId = userCreds[0];
var clientSecret = userCreds[1]

const monzoApi = new MonzoApi(clientId, clientSecret);
nodeobject();

async function nodeobject() {
	var accountNames = await monzoApi.accounts([clientSecret]);
	console.log(accountNames);
}
