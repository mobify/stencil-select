define(function() {
    var init = function() {
        $('body').on('change', '.c-select', function() {
            var $container = $(this);
            var value = $container.find('option:selected').text();

            $container.find('.c-select__value').text(value);
        });
    };

    return {
        'init': init
    };
});
