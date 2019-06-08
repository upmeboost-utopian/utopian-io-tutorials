let steem = require('steem');


var acc = "lonelywolf",
key = "5Kxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
weight = 1*100;

//Vote Post Function
function streamVote(ACC_NAME, ACC_KEY, author, permalink, weight) {
	steem.broadcast.vote(ACC_KEY, ACC_NAME, author, permalink, weight, function(err, result) {
		if(err) return console.log(err);
        else{
        steem.api.getAccounts([ACC_NAME], function(err, res){
            var	secondsago = (new Date - new Date(res[0].last_vote_time + "Z")) / 1000,
                vpow = res[0].voting_power + (10000 * secondsago / 432000);
            vpow = Math.min(vpow / 100, 100).toFixed(2);
		      return console.log('@' + ACC_NAME + ', Voted Succesfully, permalink: ' + permalink + ', author: ' + author + ', weight: ' + weight / 100 + '%. Current Voting Power: ' + vpow + '%');
        });
        }
	});
}


//Follow Account
function streamFollow(acc, key, following){
  var json = JSON.stringify(
  ['follow', {
  follower: acc,
  following: following,
  what: ['blog']
  }]);
  steem.broadcast.customJson(key, [], [acc], 'follow', json, function(err, result) {
      console.log(err, result);
  });
}

// Comment Function
function streamComment(ACC_NAME, ACC_KEY, author, permlink, permalink, body){
	steem.broadcast.comment(ACC_KEY, author, permlink, ACC_NAME,
	permalink, '', body,
	JSON.stringify({
	tags: ACC_NAME,
	app: 'steemit/0.1'
	}),
	function(err, result) {
		if(!!err)
			console.log("Comment Failed!", err);
		else
			console.log("Comment Posted Succesfully, Author: " + author);
	});
}

function makeid(number) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < number; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
