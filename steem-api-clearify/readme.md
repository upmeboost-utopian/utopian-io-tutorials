
### - How to use it on HTML?
we will use the CDN, go to your HTML file and add this script -

```
<script src="//cdn.steemjs.com/lib/latest/steem.min.js></script>
```
if you want go to [CDN](//cdn.steemjs.com/lib/latest/steem.min.js) and right click "Save Page As" `steem.min.js`
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/CvbRQhBA-image.png)
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/LWs9bspt-image.png)
and move it to your js folder and use the script like that

```
<script src="javascript/steem.min.js"></script>
```

### - How to use it on Node.JS
first, go to your nodejs project folder,
open the console and install `steem`

`npm install steem --save`
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/wLXA3qM0-image.png)

now open your javascript file and add steem API,

```
var steem = require('steem');
```
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/hzOl3PCr-image.png)

### - Config - Change RPC Node, address prefix and Chain ID

- set the rpc node
```
steem.api.setOptions({ url: 'https://api.steemit.com' });
```

you can use any RPC node, if you're using sites like golos, weku, whaleshares etc.
you can set the API RPC node to this sites as well.

- set the address prefix
```
steem.config.set('address_prefix','STM');
```
for example on other sites like weku it will be `WKU` or on WhaleShares `WLS` etc.

- set chain id
```
steem.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
```
this is the chain id of golos, this is to use other steem clones like golos, weku, whaleshares and more...
it's not really used on steem, so know that.


### - Starting With The API - Tags
get trending tags

```
steem.api.getTrendingTags(afterTag, limit, function(err, result) {
  console.log(err, result);
});
```

so let's find what does it do,
`afterTag` - is the tag it's starting from, for example, if I start from steemit which is the popular one it will give from there and lower,
or for example, I will start with photography it will give from there and lower, the popularity made by the total payouts, comments, and top posts.

example for usage:

```
steem.api.getTrendingTags('steemit', 5, function(err, result) {
  console.log(err, result);
});
```

the tag I'm using - `steemit`, limit - `5`

results -

![image.png](https://files.steempeak.com/file/steempeak/upmeboost/fEL62SGQ-image.png)

as you can see it sorting it by the `trending`,
steemit trending - 6036591089
bitcoin trending - 3698599185
etc.

from what it looks the trending is calculating from the top posts, net votes and total payouts with an exclusive calculation of steem and we get from that the popular tags.

- Get discussions by [Trending / Hot / Created]
so everything is the same, just change the function

```
steem.api.getDiscussionsByTrending({tag: 'photography', limit: 1}, function(err, result) {
  console.log(err, result);
});
steem.api.getDiscussionsByCreated({tag: 'photography', limit: 1}, function(err, result) {
  console.log(err, result);
});
steem.api.getDiscussionsByHot({tag: 'photography', limit: 1}, function(err, result) {
  console.log(err, result);
});
```

all is the same just getting the post from trending or created or hot feed.
that's all the change, the query stays the same

so first, results

![image.png](https://files.steempeak.com/file/steempeak/upmeboost/8Y67DwNS-image.png)

so you need to choose a tag to get the posts from, I used `photography` and a limit for the number of posts,
I chose 1 because I don't need anymore.

and from there you can do what you want to do!

- getState

```
steem.api.getState('/@upmeboost', function(err, result) {
  console.log(err, result);
});
```
so from here, you can get literally any information,
from the post feed to the main witness and more...
just get the link you want to check, for example - `/@upmeboost/transfers` and check it.

### Global Functions

- getConfig

get the full config of the steem blockchain

```
steem.api.getConfig(function(err, result) {
  console.log(err, result);
});
```

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/amN1QRqI-image.png)

- global properties

```
steem.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```

this function gives you the global properties of the blockchain, for example -
the supply, the latest block number, the current witness working on the block, the total vests and more...

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/Uqx0QS1g-image.png)

- chain properties
```
steem.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```

this function gives the creation fee per account,
the maximum block size,
the sbd interest rate,
the budget & decay.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/SEpFoeHC-image.png)

- get medain history
```
steem.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```

this function gives the average/value of the sbd/steem rate.
I didn't use this function so much so I can't tell 100% surly what it gives at the result.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/PbF8HMRY-image.png)

- get hardfork version
```
steem.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```

gives the version of steem

result - `0.20.0`

- get reward fund
```
steem.api.getRewardFund('post', function(err, result) {
  console.log(err, result);
});
```

this function gives the reward fund of the post, I didn't found anything else, it's giving the reward fund of posts
it's useful for calculation of steem power (vesting to SP) for example and much more

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/6579QSJE-image.png)

- get vesting delegations
```
steem.api.getVestingDelegations(`imanisraelirick`, ``, 50, function(err, result) {
  console.log(err, result);
});
```

so at the first put the account delegator, at second for real I don't found it useful so just put empty string, and `50` is the limit of the results.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/jvtM2Vid-image.png)

### Accounts

- get account information
```
steem.api.getAccounts(['upmeboost'], function(err, result) {
  console.log(err, result);
});
```
so because this function get multiple accounts we need to give it a json object, so put `['account']` and not `'account'`
you can add as many accounts as you want.

it gives all of the information about the account, from name to last votes, mana reputation and more...
this is the most useful function on steem API.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/48vQ9qWk-image.png)

- get account count
```
steem.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```

this function gives the count of all of the accounts on steem

result - `1,183,518` [raw result - `1183518`]

- get account history
```
//steemjs documentation
steem.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});

//usage version
steem.api.getAccountHistory('upmeboost', -1, 100, function(err, result) {
  console.log(err, result);
});
```
account - your account name (or the one you want to see in), from (the first transaction), limit (the limit of the transactions)

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/dVbgQtNs-image.png)

the data of the transaction stored in the `op` object.

### Market

- get orders
```
steem.api.getOrderBook(1, function(err, result) {
  console.log(err, result);
});
```

this function gives the latest orders by limit `1 - limit` change 1 to any limit you want.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/Z1cEyVRQ-image.png)

- get open orders
```
steem.api.getOpenOrders('upmeboost', function(err, result) {
  console.log(err, result);
});
```

this function gives the open orders by account name,
no results because I have no open orders.

### Votes

- get active votes
```
//doc version
steem.api.getActiveVotes(account ,permlink, function(err, result) {
  console.log(err, result);
});
//usage version
steem.api.getActiveVotes('upmeboost' , 'what-you-want-to-learn-progarmming-tutorials-utopian-io', function(err, result) {
  console.log(err, result);
});
```

account - account name
permlink - the permlink of the post, comes after your account name (@upmeboost) like that - `@account_name_here/bla-bla-blaaa`

this function gives the active votes of the post you entered.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/vVcxWEiJ-image.png)

- get account votes
```
// doc version
steem.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});

//usage verison
steem.api.getAccountVotes('upmeboost', function(err, result) {
  console.log(err, result);
});
```

this function gets the votes of a specific account

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/xoNdfRxS-image.png)

### Content

- get content
```
//doc version
steem.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});

//usage version
steem.api.getContent('upmeboost', 'what-you-want-to-learn-progarmming-tutorials-utopian-io', function(err, result) {
  console.log(err, result);
});
```

author - the account author, the creator of the post/comment
permlink - the permlink of the post / comment [ example in the code / above ]

this function gives the post details, from the author to the title, body and much more...

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/pT08Bfhc-image.png)

- get post replies (comments)
```
//doc version
steem.api.getContentReplies(author, permlink, function(err, result) {
  console.log(err, result);
});

//usage version
steem.api.getContentReplies('upmeboost', 'what-you-want-to-learn-progarmming-tutorials-utopian-io', function(err, result) {
  console.log(err, result);
});
```

this function gives all of the replies(comments) of the post with all of the details.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/1699dN0P-image.png)

### Witness
- get witness
```
steem.api.getWitnessByAccount('utopian-io', function(err, result) {
  console.log(err, result);
});
```

use by account name, this function gives the witness information.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/5A4hXU3K-image.png)

- get witness count
```
steem.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
get the amount of witnesess on steemit

result - `14,810` [Raw result - `14810`]

### Broadcast

- delegate vesting shares
```
steem.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```

`wif` - the active wif key, used to send a delegation, use the market, send transfers and more...
`delegator` - the account that sent the delegation
`delegatee` - the account that gets the delegation
`vesting_shares` - the number of vests you send, steem to vests calculator [Here](www.steemdollar.com/vests.php)

- witness vote
```
steem.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```

`wif` - the active wif key
`account` - the account that is voting (your account)
`witness` - the witness account (the one that gets the vote)
`approve` - the state of the approve (1 to approve, 0 to not approve) [1 = vote, 0 = unvote]

- comment (post & comment)
```
steem.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```

`wif` - your posting wif key
`parentAuthor` - the "parent" author, if it's a comment the parentAuthor will be the author of the post, if it's a post leave blank
`parentPermlink` - same as `parentAuthor` just with permlink.
`author` - the author (the account creating the post / comment)
`permlink` - the permlink of the comment / post (create new permlink, you can use a random function that will make a custom number or something like that for the permlink)
`title` - the title of the comment / post
`jsonMetadata` - the json metdata, most of the times is the same :
```
JSON.stringify({
tags: "steemit",
app: 'steemit/0.1',
  users: ["upmeboost"],
  format: "markdown"
}),
```

`tags` - the tags of the post / comment
`app` - the application used, leave steemit/0.1 if you're not a "company" or something like that
'users' - the user made the post/comment, just leave your own name, you can remove this line if you don't want it (it's not necessary)
`format` - the format of the post/comment (leave markdown)

- custom Json
```
steem.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```

this function used most for following and stuff like that

`wif` - the posting wif key
`requiredAuths` - which auths needed, for following, for example, nothing is required (use for the active key, if needed to transfer or something like that)
`requiredPostingAuths` - the posting auths needed, for following is `follower`
`id` - the identifier of the customJson, for follow we use `follow`
`json` - the json object for the function

follow example using customJson -

```
/** Follow an user */
var follower = 'upmeboost'; // Your username
var following = 'atukh09'; // User to follow
var json = JSON.stringify(
  ['follow', {
  follower: follower,
  following: following,
  what: ['blog']
  }]
);
steem.broadcast.customJson(
  postingWif,
  [], // Required_auths
  [follower], // Required Posting Auths
  'follow', // Id
  json, //
  function(err, result) {
  console.log(err, result);
  }
);
```

follower - the follower account (your account)
following - the follow after account (the other account)
what - the identifier of the follower (which is a blog)
then we're using the customjson function to follow the account.

- delete comment
```
steem.broadcast.deleteComment(wif, author, permlink, function(err, result) {
  console.log(err, result);
});
```

`wif` - the account posting wif key
`author` - the author of the post/comment, the creator
`permlink` - the permlink of the post / comment

- vote
```
steem.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```
`wif` - the posting wif key
`voter` - the voter account, the account that is voting
`author` - the author of the post (the post creator)
`permlink` - the permlink of the post
`weight` - the weight of the vote, max is `10000`(10k), so to make it easier just do that: `10*100` (10 = percentage), max = 100%

### Formatter
- reputation
```
//doc usage
var reputation = steem.formatter.reputation(3512485230915);

//real usage
steem.api.getAccounts(['upmeboost'], function(err, res){
  var repu = res[0].reputation,
  rep = steem.formatter.reputation(rep);
  console.log(rep, repu);
});
```

this function converts the reputation you get from the account information to the visible number reputation (25, 30, 60 etc.)

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/njkwUtqs-image.png)

- vest to steem
```
//doc usage
var steemPower = steem.formatter.vestToSteem(vestingShares, totalVestingShares, totalVestingFundSteem);

//real usage
steem.api.getDynamicGlobalProperties((err, result) => {
  var steemPower = steem.formatter.vestToSteem(500000, result.total_vesting_shares, result.total_vesting_fund_steem);
  console.log(steemPower);
});
```

this function gets the vests and the global properties and converts it to Steem power.

result -
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/cEgC0Fv4-image.png)
