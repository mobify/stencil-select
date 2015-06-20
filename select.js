define(function(require) {
    // Polyfill Custom Elements API down to Android 2.3
    require('document-register-element');

    var $ = require('$');
    var Select = {};

    // Define a custom property on the component that will sync with the value
    // of the underlying native select.
    Select.value = {
        get: function() {
            return this.dom.$select.val()
        },
        set: function(value) {
            this.dom.$select.val(value);
            this.changeCallback();
        }
    };

    Select.createdCallback = {value: function() {
        console.log('Created <stencil-select> custom element.');

        // The dom hash contains the component root and any sub-components as
        // selectorLibrary nodes, so they can be operated on with the normal
        // Zepto/jQuery API.
        this.dom = {
            $root: $(this),
            $value: $(this).find('.c-select__value'),
            $select: $(this).find('select'),
        };

        // Event handlers should use $.proxy to preserve access to the instance
        // as `this` within the handler.
        this.dom.$root.on('change', 'select', $.proxy(this.changeCallback, this));

        // Call any methods here needed on custom element creation.
        this.changeCallback();
    }};

    Select.attributeChangedCallback = {value: function(name, oldValue, value) {
        // Sync some attributes from the root node to the embedded select
        // element. This is one-way.
        if (name === 'required' || name === 'disabled') {
            this.dom.$select.attr(name, value);
        }
    }};

    Select.changeCallback = {value: function(event) {
        this.dom.$value.text(this.dom.$select.find('option:selected').text());
        this.dom.$root.trigger('stencil-select:update'); // notify subscribers
    }};

    return document.registerElement('stencil-select', {
        prototype: Object.create(HTMLElement.prototype, Select)
    });
});
