/* app.js */
// our requirements
var MonzoApi = require('monzo-api');
var fs = require('fs');
var ejs = require('ejs');
var express = require('express')
// require and instantiate express
const app = require('express')()
var sleep = require('sleep');

// import credentials from file
var monzoCreds = fs.readFileSync('credentials.txt').toString().split("\n");
var clientId = monzoCreds[0];
var clientSecret = monzoCreds[1];
var accountName = null;

// we use async as it very nicely waits for our API friend to get back to us
async function getMonzoAccounts() {
  const monzoApi = new MonzoApi(clientId, clientSecret);
  var accounts =  await monzoApi.accounts([clientSecret]);
  return await accounts;
}

/*
async function monzoobject() {
  const monzoApi = new MonzoApi(clientId, clientSecret);
  var accountNames = await monzoApi.accounts([clientSecret]);
  for (var account in accountNames.accounts)
  {
    var thisAccount = accountNames.accounts[account].id;
    var accountBalance = await monzoApi.balance(thisAccount,[clientSecret]);
    console.log(thisAccount + " balance: " + accountBalance.balance);
    var transactionList = await monzoApi.transactions(thisAccount, true, {}, [clientSecret]);
    
    //fetch our list of transactions
    return transactionList;

  } 
} */

// set the view engine to ejs
var path = require("path");
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs')

// blog home page
app.get('/', async (req, res) => {
  // render `home.ejs` with the list of posts
    var accounts = await getMonzoAccounts();
    console.log(accounts);
    res.render('home',{accounts:accounts});

  // res.render('home', { posts: transaction })
})


app.listen(8080)

console.log('listening on port 8080')




