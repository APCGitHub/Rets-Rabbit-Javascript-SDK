/**
 * Created by aclinton on 7/11/16.
 */
var nock = require('nock'),
    expect = require('chai').expect,
    retsRabbitHelper = require('./unit/helpers/test-config'),
    post = require('../src/core/lib/post'),
    request = require('superagent');

describe('Post request for auth check', function () {
    it('Get access_token', function (done) {
        var data = {
            grant_type: 'client_credentials',
            client_id: retsRabbitHelper.clientId,
            client_secret: retsRabbitHelper.clientSecret
        };

        post(retsRabbitHelper.url + '/oauth/access_token', data, null, function (err, res) {
            console.log(err);
            expect(res).to.eql({'access_token':'asdfasdf'});
            done();
        });
    })
});


