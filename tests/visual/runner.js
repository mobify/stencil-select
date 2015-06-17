define(function(require) {
    var dust = require('dust-full');
    var componentHelper = require('adaptivejs/lib/dust-component-helper');
    var componentSugar = require('adaptivejs/lib/dust-component-sugar');
    var ui = require('../../select');
    var templates = require('../../tmp/templates');
    var context;

    // Register helpers for precompiled component templates.
    dust = componentHelper(dust);
    templates.forEach(function(name) {
        dust.helpers[name] = componentSugar.makeHelper(name);
    });

    // Define any context required for the tests:
    var context = {
        repo: 'https://github.com/mobify/stencil-select',
        selectMarkup: '<select id="foo" name="foo"><option value="1">Option 1</option><option value="2">Option 2</option></select>',
    };

    // Render
    dust.render('tests', context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;

            $('[data-adaptivejs-component="stencil-select"]').each(function(i, el) {
                ui.init($(el));
            });
        } else {
            console.log(err);
        }
    });
});
