define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var spec = require('text!spec.dust');
    require('stencil-spec/spec.component');

    // Require the component’s template loader (`*.component.js`):
    require('../../select.component');

    // Define any context required for the tests:
    var context = {
        selectNode: '<select id="foo" name="foo"><option value="1">Option 1</option><option value="2">Option 2</option></select>',
    };

    // Render
    dust.renderSource(spec, context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
