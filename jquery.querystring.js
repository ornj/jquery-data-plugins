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

    /**
     * Merge query string into url
     *
     * @param {string} href
     * @param {object} addition
     */
    $.querystring.merge = function(href, addition)
    {
        if (typeof href !== 'string') {
            var type = typeof href;
            throw 'value of parameter 1 passed to querystring.merge() must be of type string, ' + type + ' passed.';
        }
        if (typeof addition !== 'object') {
            var type = typeof addition;
            throw 'value of parameter 2 passed to querystring.merge() must be of type object, ' + type + ' passed.';
        }
        var base = href.substr(0, href.indexOf('?')),
            query = this.unserialize(href),
            newQ = $.extend({}, query, addition);
        return base + $.querystring.serialize(newQ);
    }

})(jQuery);
