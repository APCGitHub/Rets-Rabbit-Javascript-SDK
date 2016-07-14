/**
 * Created by aclinton on 7/11/16.
 */
var Emitter = require('component-emitter')

function RetsRabbit(config){
    this.configure(config);
}

RetsRabbit.debug = true;
RetsRabbit.loaded = true;

//Set up emitter
Emitter(RetsRabbit);
Emitter(RetsRabbit.prototype);

RetsRabbit.prototype.configure = function (cfg) {
    var config = cfg || {};

    this.config = {
        clientId: config.client_id || 'retsrabbit',
        clientSecret: config.client_secret || 'retsrabbit',
        host: config.host || 'https',
        url: config.url || 'stage.retsrabbit.com/api',
        storageKey: config.token_key || 'access_token'
    };

    if (RetsRabbit.debug) {
        this.on('error', RetsRabbit.log);
    }

    this.emit('ready');
};

RetsRabbit.prototype.clientId = function(str){
    if (!arguments.length) return this.config.clientId;
    this.config.clientId = (str ? String(str) : null);
    return this;
};

RetsRabbit.prototype.clientSecret = function(str){
    if (!arguments.length) return this.config.clientSecret;
    this.config.clientSecret = (str ? String(str) : null);
    return this;
};

RetsRabbit.prototype.host = function(str){
    if (!arguments.length) return this.config.host;
    this.config.host = (str ? String(str) : null);
    return this;
};

RetsRabbit.prototype.url = function(str){
    if (!arguments.length) return this.config.url;
    this.config.url = (str ? String(str) : null);
    return this;
};

RetsRabbit.log = function (message) {
    if(RetsRabbit.debug && window.console){
        console.log('[Rets Rabbit] ' + message);
    }
};

RetsRabbit.ready = function (cb) {
    if(RetsRabbit.loaded){
        cb();
    } else {
        RetsRabbit.once('ready', cb);
    }
};

module.exports = RetsRabbit;