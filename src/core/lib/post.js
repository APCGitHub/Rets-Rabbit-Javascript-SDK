/**
 * Created by aclinton on 7/11/16.
 */
var request = require('superagent'),
    handleResponse = require('../helpers/superagent-handle-response');

module.exports = function (url, data, token, cb) {
    var r = request.post(url).send(data || {});

    if(token) {
        r.set('Authorization', 'Bearer ' + token);
    }

    r.end(function (err, res) {
        handleResponse(err, res, cb);
        cb = null;
    });
};
