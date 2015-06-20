define(['$'], function($) {
    var Select = function Select($el, options) {
        this.dom = {
            $root: $el,
            $value: $el.find('.c-select__value')
        };
        this.value = '';

        this.dom.$root.on('change', $.proxy(this.update, this));

        this.update();
    }

    Select.prototype.update = function update() {
        this.dom.$value.text(this.dom.$root.find('option:selected').text());
        this.dom.$root.trigger('select:update'); // notify subscribers
    }

    return {
        'init': function($el, options) {
            return $el.data('component') || $el.data('component', new Select($el, options));
        }
    };
});
