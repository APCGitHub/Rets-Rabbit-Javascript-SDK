/**
 * Created by aclinton on 7/11/16.
 */
var post = require('./post'),
    urlBuilder = require('../helpers/build-url'),
    Storage = require('../utils/token-storage');

module.exports = function (cb) {
    var data = {
        grant_type: "client_credentials",
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret
    };

    var key = this.config.storageKey;

    var url = urlBuilder(this.config.host, this.config.url, '/oauth/access_token');
    
    post(url, data, null, function (err, res){
        if(err){
            cb(err, null);
        } else {
            var t = res.access_token;
            Storage.setToken(key, t);
            cb(null, res);
        }
    });
};
