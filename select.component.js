/**
 * Loader for the component’s  Dust templates, found in lib/
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var select = require('text!./lib/select.dust');

    dust.loadSource(dust.compileComponent(select, 'select'));
});
