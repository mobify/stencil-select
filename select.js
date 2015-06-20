define(['$'], function($) {
    //
    // Component constructor
    //
    var Select = function Select($el, options) {
        // Component instance properties. The `$` hash (by convention) caches
        // the root node and any sub-components.
        this.value = '';
        this.$ = {
            root: $el,
            value: $el.find('.c-select__value')
        };

        // Event handlers should use $.proxy to preserve access to the instance
        // as `this` within the handler.
        this.$.root.on('change', $.proxy(this.update, this));

        // Immediately invoke any methods needed to set up initial state.
        this.update();
    }

    //
    // Update the component’s visible value when the underlying select element’s
    // value changes.
    //
    Select.prototype.update = function update() {
        this.value = this.$.root.find('option:selected').text();
        this.$.value.text(this.value);
        this.$.root.trigger('select:update'); // notify subscribers
    }

    return {
        'init': function($el, options) {
            // If already initialized, return the instance; otherwise, create it
            // and expose it through `$('.c-select').data('component')`.
            return $el.data('component') || $el.data('component', new Select($el, options));
        }
    };
});
