/**
 * Describes the data expected by a component’s dust template
 *
 * We express this using js-schema, a format for describing and validating
 * object data.
 */
define(function(require) {
    var schema = require('js-schema');

    return schema({
        '?class': String,
        '?element': [Object, Function, String],
        '?id': String,
        '?name': String,
        '?disabled': Boolean,
        '?required': Boolean,
    });
});
