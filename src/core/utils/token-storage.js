/**
 * Created by aclinton on 7/13/16.
 */
var localStorage = null;

if (typeof localStorage === "undefined" || localStorage === null) {
    LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

function Storage(){
    if(localStorage == null){
        
    }
}

Storage.prototype.getToken

module.exports = Storage;
