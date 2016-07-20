# Rets-Rabbit-Javascript-SDK
Vanilla javascript sdk for the Rets Rabbit (RR) API.

## Install the library
```bash
# via npm
$ npm install rets-rabbit-js

# via bower
$ bower install rets-rabbit-js
```

## Configure a new client
There are several configuration options which you can use when instantiating
 a new Rets Rabbit client.
 
 ```javascript
var rrClient = new RetsRabbit({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    host: 'https',
    url: 'stage.retsrabbit.com/api',
    storageKey: 'token' //default is 'access_token'
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

rrClient.host('YOUR_NEW_HOST'); //update host (http|https) default: http

rrClient.url('YOUR_NEW_URL'); //update url, default: stage.retsrabbit.com

rrClient.storageKey('NEW_KEY_NAME'); //update localStorage token key name
                                     //default: 'access_token'
 ```
 
## Loading
Make sure you wrap any of your logic inside of a `.ready()` callback to
ensure the library is fully loaded.

```javascript
RetsRabbit.ready(function () {
    //authenticate or perform request
});
```

## Authentication
The RR library exposes a method `auth()` which hits the OAUTH 2.0 endpoint
to receive a new access token. By default this method stores the access_token
in a localStorage key called 'access_token', but this can be configured.

```javascript
var rrClient = new RetsRabbit({});

RetsRabbit.ready(function () {
    rrClient.auth(function (err, res){
        if(err){
            //handle error
        } else {
            //grab token
            var token = res.access_token;
        }
    });
});
```

## Querying
There are currently two version of the RR API: v1 & v2. This package supports
querying against both endpoints, by simply changing the url your GET
request is pointed at.

#### V1

```javascript
rrClient.get('/v1/rest-of-path', ...) //v1 query string
```

To learn more about querying the v1 endpoint go check out our [v1 docs]
(https://retsrabbit.com/docs/v1) .

#### V2

```javascript
rrClient.get('/v2/rest-of-path', ...) //v2 query string
```

The latest version (v2) of RR is ODATA v4 compliant which means we offer
 support for these types of query expressions:
 
 ```javascript
 $filter=ListPrice gt 75000 and geo.distance(location, POINT(-127.89734578345 45.234534534)) lt 50
 
 $select=ListPrice, ListingId, OriginaListPrice
 
 $orderby=ListPrice desc
 
 $skip=10
 
 $top=10
 ```
 
 See the RR v2 [docs](https://retsrabbit.com/docs/v2) for more details 
 on how to interact with our data. If reading through documentation isn't
 your kind of thing we have an [API explorer](http://explore.retsrabbit.com) 
 which allows you to interactively play with v2 of the API in an intuitive 
 and fun way!

###Get Request
In order to perform queries against with the RR API, this module exposes
a `get()` request method which accepts a request parameter.

```javascript
var rrClient = new RetsRabbit();

RetsRabbit.ready(function () {
    var q = {
        '$top': 10, 
        '$select': 'ListingId, ListPrice'
    };
    
    //third param is for the access_token if you want directly
    //pass it in, but it pulls from localStorage by default
    rrClient.get('/v2/property', q, null, function (err, res){
        if(err){
            //handle error
        } else {
           var listings = res.value;
           //do awesome stuff with listings
        }
    });
});
```