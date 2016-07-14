/**
 * Created by aclinton on 7/11/16.
 */
var request = require('superagent'),
    handleResponse = require('../helpers/superagent-handle-response'),
    urlBuilder = require('../helpers/build-url');

module.exports = function (url, params, token, callback) {
    var this_token, data, _url, r;

    if(arguments.length < 3){
        this.log("Not enough arguments supplied");
        return;
    } else if(arguments.length == 3){
        this_token = this.getToken(this.config.storageKey);
    } else {
        if(token == null || typeof token !== 'string'){
            this.log("You supplied an invalid token");
            return;
        }

        this_token = token;
    }

    data = params || {};
    _url = urlBuilder(this.config.host, this.config.url, url);
    r = request.get(_url);

    r.set('Authorization', 'Bearer ' + this_token);
    
    if(JSON.stringify(data) !== '{}')
        r.query(data);
    
    r.end(function (err, res){
        handleResponse(err, res, callback);
        callback = null;
    });
}
