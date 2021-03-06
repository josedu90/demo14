function pixflow_blogPage() {
    "use strict";

    if ($('.loop-post-content').length < 1 && $('.single-post-media').length < 1) {
        return;
    }

    if ($('.flexslider').length >= 1) {
        $('.flexslider').flexslider({
            directionNav: "true"
        });
        $('.flex-nav-prev .flex-prev').html('');
        $('.flex-nav-next .flex-next').html('');
    }

    $('body:not(.blog) .loop-post-content').each(function () {
        if ($(this).find('.more-link').length >= 1) {
            $(this).find('.post-share').css({'margin': '-63px 45px 0 0'});
            $(this).find('.post-comment-holder').css({'margin': '-63px 0 0 0'});
        }
    });

    var $sidebar = $('.sidebar');
    if ($('.sidebar').length >= 1) {
        if ($sidebar.attr('widgetid') == 'main-sidebar') {
            $('#content .posts').css('width', '97.5%');
        } else if ($sidebar.attr('widgetid') == 'post-sidebar') {
            $('#content .post').css('width', '97.5%');
        }
    }

    $('body').on('click', '.no-prev-page, .no-next-page', function (e) {
        e.preventDefault();
        return false;
    })
}


document_ready_functions.pixflow_blogPage = [];