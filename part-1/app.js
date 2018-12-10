var express = require('express'),
  steem = require('steem'),
  path = require('path');

const app = express();

app.use(express.static(path.resolve('')));

steem.api.getAccounts(['upmeboost'], function(err, res){
  console.log('Username: ' + res[0].name + ", Balance: " + res[0].balance);
  console.log(res);
});

app.listen(80, function(){
  console.log("app started");
});
