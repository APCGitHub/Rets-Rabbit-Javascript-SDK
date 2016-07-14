/**
 * Created by aclinton on 7/13/16.
 */
var localStorage = null;
var RetsRabbit = require('../');

if (typeof (Storage) !== void(0)) {
    localStorage = window.localStorage;
}

module.exports = {
    'getToken': function (key) {
        if(localStorage != null) {
            RetsRabbit.log("Local Storage is not supported by your browser");
            return;
        }

        if(!arguments.length)
            key = this.config.storageKey;

        return localStorage.getItem(key);
    },
    'setToken': function (key, token) {
        console.log('setting the token');
        if(localStorage == null) {
            RetsRabbit.log("Local Storage is not supported by your browser");
            return;
        }

        if(arguments.length < 2) {
            RetsRabbit.log("You need to supply both the key and token");
            return this;
        }

        if(key == null)
            key = this.config.storageKey;

        localStorage.setItem(key, token);

        return;
    }
}
