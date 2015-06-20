define(['$'], function($) {
    var Select = function Select($el, options) {
        this.$el = $el;
        this.value = '';

        $el.on('change', $.proxy(this.update, this));

        this.update();
    }

    Select.prototype.update = function update() {
        this.$el.find('.c-select__value').text(this.$el.find('option:selected').text());
        this.$el.trigger('select:update'); // notify subscribers
    }

    return {
        'init': function($el, options) {
            return $el.data('component') || $el.data('component', new Select($el, options));
        }
    };
});
