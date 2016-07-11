var RetsRabbit = require('./core'),
    extend = require('./core/utils/extend');

extend(RetsRabbit.prototype, {
    "post": require('./core/lib/post'),
    "get": require('./core/lib/get'),
    "auth": require('./core/auth')
});

RetsRabbit.utils = {
    "extend": extend,
    "domready": require('domready')
};

if(RetsRabbit.loaded){
    setTimeout(function () {
        RetsRabbit.utils.domready(function () {
            RetsRabbit.emit('ready');
        });
    }, 0);
}

module.exports = RetsRabbit;