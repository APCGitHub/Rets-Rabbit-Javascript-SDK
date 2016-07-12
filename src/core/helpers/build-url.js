/**
 * Created by aclinton on 7/11/16.
 */

module.exports = function (host, domain, target) {
    var url = host + "://";
    url += domain;

    if(url.substr(url.length-1) === '/')
        url = url.slice(0, -1);
    
    if(target.substr(url.length-1) !== '/')
        target += '/';

    url += target;
    
    return url;
};
