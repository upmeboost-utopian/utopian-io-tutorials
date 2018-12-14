### - How to use it on HTML?
we will use the CDN, go to your html file and add this script -

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

you can use any rpc node, if you're using sites like golos, weku, whaleshares etc.
you can set the api rpc node to this sites aswell.

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
`afterTag` - is the tag it's starting from, for example if I start from steemit which is the popular one it will give from there and lower,
or for example I will start from photography it will give from there and lower, the popularity made by the total payouts, comments and top posts.

example for usage:

```
steem.api.getTrendingTags('steemit', 5, function(err, result) {
  console.log(err, result);
});
```

tag I'm using - `steemit`, limit - `5`

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
I choosed 1 because I don't need anymore.

and from there you can do what you want to do!

- getState

```
steem.api.getState('/@upmeboost', function(err, result) {
  console.log(err, result);
});
```
so from here you can get literally any information,
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

this function gives the average / value of the sbd/steem rate. 
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

this function gives the reward fund of post, I didn't found anything else, it's giving the reward fund of posts
it's useful for calculation of steem power (vesting to SP) for example and much more

result - 
![image.png](https://files.steempeak.com/file/steempeak/upmeboost/6579QSJE-image.png)

- get vesting delegations
```
steem.api.getVestingDelegations(`imanisraelirick`, ``, 50, function(err, result) {
  console.log(err, result);
});
```

so at the first put the account delegator, at second for real I doesn't found it useful so just put empty string, and `50` is the limit of the results.

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
you can add as much accounts as you want.

it gives all of the information about the account, from name to last votes, mana reputation and more...
this is the most useful function on steem api.

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
