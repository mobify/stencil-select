define(['$', 'document-register-element'], function($, registerElement) {
    var selectProto = Object.create(HTMLElement.prototype);

    selectProto.createdCallback = {value: function() {
        console.log('Created <stencil-select> custom element.');

        this.$ = {
            root: $(this),
            value: $(this).find('.c-select__value'),
            select: $(this).find('select'),
        };

        this.$.root.on('change', $.proxy(this.update, this));

        this.update();
    }};

    selectProto.attributeChangedCallback = {value: function(name, oldValue, value) {
        if (name === 'disabled' || name === 'required') {
            value !== null ? this.$.select.attr(name, '') : this.$.select.removeAttr(name);
        }
    }};

    selectProto.update = {value: function() {
        this.$.value.text(this.$.root.find('option:selected').text());
        this.$.root.trigger('stencil-select:update'); // notify subscribers
    }};

    return document.registerElement('stencil-select', {
        prototype: Object.create(HTMLElement.prototype, selectProto)
    });
});
