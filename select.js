define(['$'], function($) {
    var init = function($el, options) {
        return new Select($el, options);
    };

    var Select = function Select($el, options) {
        var self = this;
        this.$el = $el;
        this.value = '';
        this.$el.on('change component:update', function(event, data) {
            self.update();
        });
    }

    Select.prototype.update = function update() {
        this.value = this.$el.find('option:selected').text();
        this.$el.find('.c-select__value').text(this.value);
    }

    return {
        'init': init
    };
});
