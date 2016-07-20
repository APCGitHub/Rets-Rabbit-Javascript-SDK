/**
 * Created by aclinton on 7/11/16.
 */

module.exports = function (host, domain, target) {
    var url = host + "://";
    url += domain;

    //remove trailing slash from domain
    if(url.substr(url.length-1) === '/')
        url = url.slice(0, -1);

    //remove leading slash
    if(target.substr(url.length-1) === '/')
        target = target.slice(0, -1);

    //make sure target has leading slash
    if(target.substr(0) !== '/')
        target = '/' + target;

    url += target;
    
    return url;
};
