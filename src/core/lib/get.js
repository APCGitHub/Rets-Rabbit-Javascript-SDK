/**
 * Created by aclinton on 7/11/16.
 */
var request = require('superagent'),
    handleResponse = require('../helpers/superagent-handle-response'),
    urlBuilder = require('../helpers/build-url');

module.exports = function (url, params, token, callback) {
    var data = params || {};
    var url = urlBuilder(this.config.host, this.config.url, url);
    var r = request.get(url);
    
    if(token)
        r.set('Authorization', 'Bearer ' + token);
    
    if(JSON.stringify(data) !== '{}')
        r.query(data);
    
    r.end(function (err, res){
        handleResponse(err, res, callback);
        callback = null;
    });
}
