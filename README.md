# Rets-Rabbit-Javascript-SDK
Vanilla javascript sdk for the Rets Rabbit API.

## Install the library
```bash
# via npm
$ npm install rets-rabbit-js

# via bower -- not currently available
# $ bower install rets-rabbit-js
```

## Configure a new client
There are several configuration options which you can use with instantiating
 a new Rets Rabbit client.
 
 ```javascript
 <script type="text/javascript">
    var rrClient = new RetsRabbit({
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        host: 'https',
        url: 'stage.retsrabbit.com/api'
    });
 </script>
 ```
