/**
 * Created by aclinton on 7/11/16.
 */

module.exports = function (host, domain, target) {
    var url = host + "://";
    url += domain;

    //remove trailing slash from domain
    if (url.substr(url.length - 1) === '/')
        url = url.slice(0, -1);

    //add forward slash to target
    if(target.substr(target.length - 1) !== '/')
        target += '/';

    url += target;

    if (url.substr(url.length - 1) === '/')
        url = url.slice(0, -1);

    return url;
};
