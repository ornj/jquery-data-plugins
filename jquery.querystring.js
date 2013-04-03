/**
 * Functions for serializing and unserializing query strings.
 */

"use strict";

(function($) {

    $.querystring = {};

    /**
     * Convert object to query string
     *
     * @param {Object} obj
     * @returns {string}
     */
    $.querystring.serialize = function(obj)
    {
        var array = [];
        for (var param in obj) {
            array.push(encodeURIComponent(param) + '=' + encodeURIComponent(obj[param]));
        }
        return '?' + array.join('&');
    }

    /**
     * Convert query string to object
     *
     * @param str
     * @returns {Object}
     */
    $.querystring.unserialize = function(str)
    {
        var items = str.substring(str.indexOf('?') + 1).split('&'),
            result = {}, param = [];
        for (var i = 0; i < items.length; i++) {
            param = items[i].split('=');
            if (param[1] !== undefined) {
                result[param[0]] = param[1];
            }
        }
        return result;
    }

})(jQuery);
