/**
 * Created by aclinton on 7/11/16.
 */
var post = require('./lib/post'),
    urlBuilder = require('./helpers/build-url');

module.exports = function (cb) {
    var data = {
        grant_type: "client_credentials",
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret
    };

    var url = urlBuilder(this.config.host, this.config.url, '/oauth/access_token');
    
    post(url, data, null, function (err, res){
        if(err){
            cb(err, null);
        } else {
            cb(null, res);
        }
    });
};
