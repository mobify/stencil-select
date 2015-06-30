define(['$'], function($) {
    /**
     * Constructor
     */
    var Select = function Select($el, options) {
        // Component instance properties.
        this.value = '';
        this.$el = $el;
        this.$valueElement = $el.find('.c-select__value');

        // Event handlers should use $.proxy to preserve access to the instance
        // as `this` within the handler.
        this.$el.on('change', $.proxy(this.update, this));

        // Immediately invoke any methods needed to set up initial state.
        this.update();
    }

    /**
     * Update the component’s visible value when the underlying select element’s
     * value changes.
     */
    Select.prototype.update = function update() {
        this.value = this.$el.find('option:selected').text();
        this.$valueElement.text(this.value);

        // Emit events
        $.proxy(this.$el.trigger('select:update', {
            value: this.value,
        }), this);
    }

    /**
     * Export the init method required by AdaptiveJS.
     */
    return {
        'init': function($el, options) {
            // If already initialized, return the instance; otherwise, create it
            // and expose it through `$('.c-select').data('component')`.
            return $el.data('component') || $el.data('component', new Select($el, options));
        }
    };
});
