/**
 * Loader for the component’s  Dust templates
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var select = require('text!./select.dust');

    dust.loadSource(dust.compileComponent(select, 'select'));
});
