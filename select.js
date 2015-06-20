define(function(require) {
    require('document-register-element'); // Polyfill Custom Elements API
    var $ = require('$');
    var Select = {};

    Select.createdCallback = {value: function() {
        console.log('Created <stencil-select> custom element.');

        // The `$` hash contains the component root and any sub-components as
        // selectorLibrary nodes, so they can be operated on with the normal
        // Zepto/jQuery API.
        this.$ = {
            root: $(this),
            value: $(this).find('.c-select__value'),
            select: $(this).find('select'),
        };

        // Event handlers should use $.proxy to preserve access to the instance
        // as `this` within the handler.
        this.$.root.on('change', $.proxy(this.update, this));

        // Call any methods here needed on custom element creation.
        this.update();
    }};

    Select.attributeChangedCallback = {value: function(name, oldValue, value) {
        // Sync select attributes from the root node to the embedded select
        // element. This is one-way.
        if (name === 'required' || name === 'disabled') {
            this.$.select.attr(name, value);
        }
    }};

    Select.update = {value: function() {
        this.$.value.text(this.$.root.find('option:selected').text());
        this.$.root.trigger('stencil-select:update'); // notify subscribers
    }};

    return document.registerElement('stencil-select', {
        prototype: Object.create(HTMLElement.prototype, Select)
    });
});
