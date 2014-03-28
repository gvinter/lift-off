// 
// Avoid `console` errors in browsers that lack a console.
// 
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// 
// Bootstrap Plugins
// 

//= require vendor/bootstrap/affix
//= require vendor/bootstrap/alert
//= require vendor/bootstrap/button
//= require vendor/bootstrap/carousel
//= require vendor/bootstrap/collapse
//= require vendor/bootstrap/dropdown
//= require vendor/bootstrap/tab
//= require vendor/bootstrap/transition
//= require vendor/bootstrap/scrollspy
//= require vendor/bootstrap/modal
//= require vendor/bootstrap/tooltip
//= require vendor/bootstrap/popover

