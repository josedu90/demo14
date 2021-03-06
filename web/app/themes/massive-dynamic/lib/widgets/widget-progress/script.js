
function pixflow_progressWidget() {
    $('[data-widget-type="progress"]').each(function () {

        var $progressbarId = $(this);
        $progressbarId.find('.bar-percentage[data-percentage]').each(function () {

            var progress = $(this),
                percentage = Math.ceil($(this).attr('data-percentage'));

            $progressbarId.find('.bar-container').css('opacity', '1');
            $progressbarId.find('.bar').css('opacity', '1');

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing: 'easeInOutCubic',
                step: function (value) {
                    var pct = Math.ceil(value) + '%';
                    progress.text(pct) && progress.siblings().children().css('width', pct);
                }
            });

        });
    });
}
window_load_functions.pixflow_progressWidget = [];