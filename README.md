# Rets-Rabbit-Javascript-SDK
Vanilla javascript sdk for the Rets Rabbit (RR) API.

## Install the library
```bash
# via npm
$ npm install rets-rabbit-js

# via bower -- not currently available
# $ bower install rets-rabbit-js
```

## Configure a new client
There are several configuration options which you can use when instantiating
 a new Rets Rabbit client.
 
 ```javascript
var rrClient = new RetsRabbit({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    host: 'https',
    url: 'stage.retsrabbit.com/api'
});
 ```
 
 If you do not supply your own clientId or clientSecret, the test Rets Rabbit
 credentials will be used which will give you access to our test data store.
 
 You may configure your RR credentials after instantiating your client with
 the following methods:
 
 ```javascript
var rrClient = new RetsRabbit({});

rrClient.clientId('YOUR_NEW_CLIENT_ID'); //update clientId

rrClient.clientSecret('YOUR_NEW_CLIENT_SECRET'); //update clientSecret

rrClient.host('YOUR_NEW_HOST'); //update host

rrClient.url('YOUR_NEW_URL'); //update url
 ```

## Authentication
The RR library exposes a method `auth()` which hits the OAUTH 2.0 endpoint
to receive a new access token.

```javascript
var rrClient = new RetsRabbit({});

rrClient.auth(function (err, res){
    if(err){
        //handle error
    } else {
        //grab token
        var token = res.access_token;
    }
});
```

## Querying
The latest version (v2) of RR is ODATA v4 compliant which means we offer
 support for