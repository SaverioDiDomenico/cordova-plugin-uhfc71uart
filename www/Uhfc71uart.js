var exec = cordova.require('cordova/exec');

var Uhfc71uart = function() {
    console.log('Uhfc71uart instanced');
};

Uhfc71uart.prototype.scan = function(epc, waittime, txpower, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Uhfc71uart', 'scan', [epc, waittime, txpower]);
};

Uhfc71uart.prototype.inizializzazione = function(epc, waittime, txpower, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Uhfc71uart', 'inizializzazione', [epc, waittime, txpower]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = Uhfc71uart;
}
