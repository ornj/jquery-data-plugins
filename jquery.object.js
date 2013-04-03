/**
 * Functions for manipulating or handling objects
 */

"use strict";

$.object = {};

/**
 * Return differences between two objects
 *
 * Uses underscore
 *
 * @param {object} first
 * @param {object} second
 * @returns {object}
 */
$.object.diff = function(first, second)
{
    var changes = {};
    for (var prop in second) {
        if (!first || first[prop] !== second[prop]) {
            if (typeof first[prop] == "object") {
                var c = getChanges(first[prop], second[prop]);
                if (! _.isEmpty(c) ) // underscore
                    changes[prop] = c;
            } else {
                changes[prop] = second[prop];
            }
        }
    }
    return changes;
}