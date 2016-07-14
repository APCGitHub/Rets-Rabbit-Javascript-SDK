/**
 * Created by aclinton on 7/11/16.
 */
var request = require('superagent'),
    handleResponse = require('../helpers/superagent-handle-response'),
    urlBuilder = require('../helpers/build-url'),
    Storage = require('../utils/token-storage'),
    RetsRabbit = require('../');

module.exports = function (url, params, token, callback) {
    var this_token, data, _url, r;

    if(arguments.length < 4){
        RetsRabbit.log("Not enough arguments supplied to the method get()");
        return;
    } else {
        if(token == null || typeof token !== 'string') {
            this_token = Storage.getToken(this.config.storageKey);
        } else {
            this_token = token;
        }
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
