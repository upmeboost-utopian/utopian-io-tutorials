var http = require('http').createServer(), //creating the server
  steem = require('steem'),
  mysql = require('mysql'); // getting the mysql package

//the config object of the database
var config = {
  "db":{
    host: "localhost",
    user: "root",
    password: "",
    base: "mysql_database"
  }
};

//creating the mysql connection
var db = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.base
});

// connecting to the database
db.connect(function (error) {
  if (error)
  throw error;

  console.log('mysql connected');
});

var pr = permlinkCreate(13), // comment permlink
  author = "upmeboost", // the post author
  permlink = "steemjs-full-tutorial-all-the-functions-all-the-abilities"; // the post permlink
var acc = "guest123", // the commentor (the author of the comment)
  wif = "5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg"; // the posting wif key
sendComment(acc, wif, author, permlink, pr, 'This is a test comment for utopian.io tutorial');

// comment function
function sendComment(account, wif, author, permlink, permalink, body){
	steem.broadcast.comment(wif, author, permlink, account,
	permalink, '', body,
	JSON.stringify({
	tags: "community-deals",
	app: 'steemit/0.1',
  users: [account],
  format: "markdown"
	}),
	function(err, result) {
		if(err)
			return false;
		else{
      console.log("the comment sent successfully!");
      // inserting data to the `steem` table
      db.query("INSERT INTO `steem`(`author`, `permlink`) VALUES(?, ?)", [account, permalink], function(err, res){
        if(err)
          throw err;

        console.log("Information saved Succesfully", res);
      });
    }
	});
}

function permlinkCreate(number) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < number; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

http.listen(8080, function(){
  console.log('listening on *:8080');
});
