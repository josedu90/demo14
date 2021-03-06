if(window.top != window.self) {
    /* Header Items Order */
    jQuery.noConflict();
    var $ = jQuery;
// Load VC frontend editor

    function pixflow_customizerObj() {
        "use strict";
        var $customizerObj;
        try {
            $customizerObj = window.top;
        } catch (e) {
            $customizerObj = {};
            $customizerObj.$ = jQuery
        }
        return $customizerObj;
    }

    function pixflow_headerGrid(called) {
        'use strict';
        if (window == window.top || $('header.top-modern').length > 0 || $('header.top-logotop').length > 0) {

            return;
        }
        if ($('header:not(.header-clone) .top').length < 1) {
            return;
        }
        if (pixflow_customizerObj().$("input[data-customize-setting-link='header_styles']").val() == 'style3' && called != 'true') {
            return;
        }
        var $headerContent = $('header:not(.header-clone) .top'),
            $headerLogo = $headerContent.find('.logo'),
            $headerMenu = $headerContent.find('.navigation'),
            $headerIcons = $headerContent.find('.icons-pack'),
            $headerTopTheme = pixflow_customizerObj().$("input[data-customize-setting-link='header_theme']").val(),
            $items = [],
            $existItmes = [],
            $itemOrder = [],
            $orders = pixflow_customizerObj().$("input[data-customize-setting-link='header_items_order']").attr("value"),
            $defaults = {
                'classic': {
                    'logo': {align: 'item-left', width: 15, min: '5', max: '100'},
                    'menu': {align: 'item-right', width: 79.2, min: '40', max: '100'},
                    'icons': {align: 'item-center', width: 5.7, min: '5', max: '100'}
                },
                'block': {
                    'logo': {align: 'item-left', width: 13, min: '5', max: '100'},
                    'menu': {align: 'item-right', width: '70', min: '30', max: '100'},
                    'icons': {align: 'item-right', width: '17', min: '5', max: '100'}
                },
                'gather': {
                    'logo': {align: 'item-left', width: '80', min: '5', max: '100'},
                    'menu': {align: 'item-right', width: '5', min: '5', max: '100'},
                    'icons': {align: 'item-right', width: '15', min: '5', max: '100'}
                }
            };
        // Check enabled items
        if ($headerLogo.length) {
            $existItmes[$existItmes.length] = 'logo';
        }
        if ($headerMenu.length) {
            $existItmes[$existItmes.length] = 'menu';
        }
        if ($headerIcons.length) {
            $existItmes[$existItmes.length] = 'icons';
        }

        if ($orders != '') {
            $orders = JSON.parse($orders);
            for (var i = 0; i < $orders.length; i++) {
                $items[$orders[i].id] = {
                    align: $orders[i].align,
                    width: $orders[i].width,
                    headerTheme: $orders[i].headerTheme
                };
                $itemOrder[$itemOrder.length] = $orders[i].id;
            }
        }
        //Check current items order with exist items on header
        $existItmes.sort();
        $itemOrder.sort();
        var is_same = $existItmes.length == $itemOrder.length && $existItmes.every(function (element, index) {
                return element === $itemOrder[index];
            });
        var settingSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21 21" style="enable-background:new 0 0 21 21;" xml:space="preserve"> <path d="M21,14.4c0,0,0,0.1,0,0.1c-0.2,0.4-0.4,0.6-0.7,0.9c0,0-0.1,0.1-0.1,0.1c-0.5,0.5-0.9,1-1.4,1.5c-0.4,0.4-0.8,0.8-1.1,1.3 c-0.2,0.2-0.2,0.2-0.4,0c-0.5-0.5-1-0.9-1.6-1.4c-0.2-0.1-0.2-0.2-0.4,0c-0.6,0.4-1.2,0.8-1.8,1c-0.1,0.1-0.2,0.2-0.2,0.3 c0,0.1,0,0.1,0,0.2c0,0.8,0,1.5,0,2.3c0,0,0,0.1,0,0.1c0,0.1,0,0.1-0.2,0.1c-1.6,0-3.1,0-4.7,0c-0.2,0-0.3,0-0.5,0 c-0.1,0-0.1,0-0.1-0.1c0-0.1,0-0.1,0-0.2c0-0.8,0-1.5,0-2.3c0-0.3-0.1-0.4-0.3-0.5c-0.6-0.2-1.2-0.6-1.7-0.9c-0.2-0.2-0.3-0.2-0.5,0 c-0.5,0.4-1,0.9-1.5,1.3c-0.2,0.2-0.3,0.2-0.5,0c-0.9-1-1.7-1.9-2.6-2.9c-0.2-0.2-0.4-0.5-0.6-0.7c-0.2-0.2-0.1-0.4,0-0.5 c0,0,0,0,0,0C0.6,13.8,1,13.4,1.5,13c0.3-0.3,0.6-0.6,1-0.9c0.2-0.1,0.2-0.3,0.2-0.5c-0.1-0.7-0.1-1.4,0-2.1c0-0.1,0-0.1,0-0.2 c0-0.2,0-0.4-0.2-0.6C1.6,8.2,0.9,7.5,0.2,6.9C0,6.7-0.1,6.5,0.1,6.3C0.2,6.2,0.4,6,0.5,5.9c0.9-1,1.7-2,2.6-3 c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.1,0.3,0c0,0,0.1,0.1,0.1,0.1C4.2,3.2,4.7,3.6,5.2,4C5.2,4,5.3,4.1,5.4,4.2 c0.1,0.1,0.2,0.1,0.2,0c0,0,0.1,0,0.1-0.1c0.5-0.4,1-0.7,1.6-0.9c0.1,0,0.2-0.1,0.3-0.2C7.7,3,7.8,2.9,7.8,2.8c0-0.1,0-0.2,0-0.3 c0-0.8,0-1.5,0-2.3c0-0.1,0-0.1,0-0.2C7.8,0,7.9,0,8,0c1.4,0,2.7,0,4.1,0c0.3,0,0.7,0,1,0c0.1,0,0.1,0,0.1,0.1c0,0.1,0,0.1,0,0.2 c0,0.8,0,1.5,0,2.3c0,0.3,0.1,0.5,0.4,0.6c0.6,0.2,1.1,0.5,1.5,0.9c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,0 c0,0,0.1-0.1,0.1-0.1c0.3-0.2,0.5-0.5,0.8-0.7c0.3-0.2,0.5-0.5,0.8-0.7c0.1-0.1,0.2-0.1,0.3,0c0.1,0.1,0.1,0.1,0.2,0.2 c1,1.1,1.9,2.2,2.9,3.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.1c-0.1,0.2-0.2,0.3-0.3,0.4 c-0.3,0.3-0.6,0.6-1,0.8c-0.4,0.3-0.7,0.6-1.1,1c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.5,0.1,0.7c0,0.5,0,1-0.1,1.5 c0,0.2,0,0.4,0.2,0.6c0.7,0.6,1.4,1.2,2.1,1.9c0.1,0.1,0.1,0.1,0.2,0.2C20.9,14.3,21,14.4,21,14.4z M6.6,10.5c0,2.1,1.7,3.9,3.8,3.9 c2.3,0,4-1.7,4-3.9c0-2.2-1.7-3.9-3.9-4C8.3,6.6,6.6,8.4,6.6,10.5z"/> </svg>',
            rightAlignSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 13" style="enable-background:new 0 0 19 13;" xml:space="preserve"> <rect x="0" y="0" width="19" height="2.8"/> <rect x="0" y="10.2" width="19" height="2.8"/> <rect x="6.5" y="5.1" width="12.5" height="2.8"/> </svg>',
            centerAlignSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 13" style="enable-background:new 0 0 19 13;" xml:space="preserve"> <rect x="0" y="0" width="19" height="2.8"/> <rect x="0" y="10.2" width="19" height="2.8"/> <rect x="3.3" y="5.1" width="12.5" height="2.8"/> </svg>',
            leftAlignSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 13" style="enable-background:new 0 0 19 13;" xml:space="preserve"> <rect x="0" y="0" width="19" height="2.8"/> <rect x="0" y="10.2" width="19" height="2.8"/> <rect x="0" y="5.1" width="12.5" height="2.8"/> </svg>';

        var menuItemSetting = '<div class="item-setting">' +
            '<div class="setting-holder">' +
            '<div class="edit-setting">MENU</div>' +
            '<span class="menu-selector">'+settingSvg+'</span>' +
            '<div class="align_holder">' +
            '<span class="active-item">'+leftAlignSvg+'</span>'+
            '<span class="left-aligned">'+leftAlignSvg+'</span>' +
            '<span class="center-aligned">'+centerAlignSvg+'</span>' +
            '<span class="right-aligned">'+rightAlignSvg+'</span>' +
            '</div>' +
            '</div>' +
            '</div>';

        var iconItemSetting = '<div class="item-setting">' +
            '<div class="setting-holder">' +
            '<span class="menu-selector">'+settingSvg+'</span>' +
            '<div class="align_holder">' +
            '<span class="active-item">'+leftAlignSvg+'</span>'+
            '<span class="left-aligned">'+leftAlignSvg+'</span>' +
            '<span class="center-aligned">'+centerAlignSvg+'</span>' +
            '<span class="right-aligned">'+rightAlignSvg+'</span>' +
            '</div>' +
            '</div>' +
            '</div>';

        var logoItemSetting = '<div class="item-setting">' +
            '<div class="setting-holder">' +
            '<div class="edit-setting">Change Logo</div>' +
            '<span class="menu-selector">'+settingSvg+'</span>' +
            '<div class="align_holder">' +
            '<span class="active-item">'+leftAlignSvg+'</span>'+
            '<span class="left-aligned">'+leftAlignSvg+'</span>' +
            '<span class="center-aligned">'+centerAlignSvg+'</span>' +
            '<span class="right-aligned">'+rightAlignSvg+'</span>' +
            '</div>' +
            '</div>' +
            '</div>';

        // Add item order handler
        $("header").append('<div class="itemorder-handle disable"></div>');
        // Add required class and attrs
        // Logo
        $headerLogo.append(logoItemSetting);
        $headerLogo.addClass('header-item');

        if (typeof $items['logo'] != 'undefined' && is_same != false && $items['logo'].headerTheme == $headerTopTheme) {
            var align = $items['logo'].align,
                width = $items['logo'].width;
        } else {
            if(!$defaults[$headerTopTheme]) {
                $headerTopTheme = 'classic';
            }
            var align = $defaults[$headerTopTheme].logo.align,
                width = $defaults[$headerTopTheme].logo.width;
        }

        $headerLogo.attr({
            'data-md-align': align,
            'data-md-width': width,
            'data-custom-id': 'logo',
            'data-md-min-width': $defaults[$headerTopTheme].logo.min,
            'data-md-max-width': $defaults[$headerTopTheme].logo.max
        });
        //Menu

        $headerMenu.append(menuItemSetting);
        $headerMenu.addClass('header-item');
        if (typeof $items['menu'] != 'undefined' && is_same != false && $items['logo'].headerTheme == $headerTopTheme) {
            var align = $items['menu'].align,
                width = $items['menu'].width;
        } else {
            var align = $defaults[$headerTopTheme].menu.align,
                width = $defaults[$headerTopTheme].menu.width;
        }

        $headerMenu.attr({
            'data-md-align': align,
            'data-md-width': width,
            'data-custom-id': 'menu',
            'data-md-min-width': $defaults[$headerTopTheme].menu.min,
            'data-md-max-width': $defaults[$headerTopTheme].menu.max
        });
        //Icons
        $headerIcons.append(iconItemSetting);
        $headerIcons.addClass('header-item');
        if (typeof $items['icons'] != 'undefined' && is_same != false && $items['logo'].headerTheme == $headerTopTheme) {
            var align = $items['icons'].align,
                width = $items['icons'].width;
        } else {
            var align = $defaults[$headerTopTheme].icons.align,
                width = $defaults[$headerTopTheme].icons.width;
        }
        $headerIcons.attr({
            'data-md-align': align,
            'data-md-width': width,
            'data-custom-id': 'icons',
            'data-md-min-width': $defaults[$headerTopTheme].icons.min,
            'data-md-max-width': $defaults[$headerTopTheme].icons.max
        });

        $('.header-item').each(function () {
            if ($(this).hasClass('item-left')) {
                $(this).find('.item-setting .left-aligned').addClass('selected');
            } else if ($(this).hasClass('item-center')) {
                $(this).find('.item-setting .center-aligned').addClass('selected');
            } else if ($(this).hasClass('item-right')) {
                $(this).find('.item-setting .right-aligned').addClass('selected');
            }
        });

        //Item Setting Display
        $("header .logo,header .navigation,header .icons-pack").hoverIntent({
            over: function(){
                $(this).find('.item-setting').stop().fadeIn(50);
            },
            out: function(){
                $(this).find('.item-setting').stop().fadeOut(50);
            },
            timeout: 100
        });

        // Item setting options
        $('.item-setting span:not(.menu-selector):not(.active-item)').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            var $this = $(this);
            if ($this.hasClass('left-aligned')) {
                $this.parents('.header-item').removeClass('item-center item-right').addClass('item-left').attr('data-md-align', 'item-left');
                $this.siblings().removeClass('selected');
                $this.addClass('selected');

            } else if ($this.hasClass('center-aligned')) {
                $this.parents('.header-item').removeClass('item-left item-right').addClass('item-center').attr('data-md-align', 'item-center');
                $this.siblings().removeClass('selected');
                $this.addClass('selected');
            } else if ($this.hasClass('right-aligned')) {
                $this.parents('.header-item').removeClass('item-left item-center').addClass('item-right').attr('data-md-align', 'item-right');
                $this.siblings().removeClass('selected');
                $this.addClass('selected');
            }
            $this.siblings('.active-item').html($this.html());
            pixflow_serialize_widget_map();
        });

        $('.logo .edit-setting').click(function(){
            if($('.shortcodes-panel', window.top.document).css('display')=='block'){
                $('.shortcodes-panel-button', window.top.document).click();
            }
            var style = $(this).closest('.logo').attr('data-logoStyle');
            var $btn = pixflow_customizerObj().$('.back-btn');
             if($btn.hasClass('this-panel') && $btn.hasClass('this-section')){
                $btn.click();
                $btn.click();
            }else if( $btn.hasClass('this-panel') || $btn.hasClass('this-section')){
                $btn.click();
            }
            pixflow_customizerObj().$('#customize-control-'+style+'_logo .upload-button').click();
        });

        $('nav .edit-setting,.gather-btn .edit-setting').click(function(){
            if($('.shortcodes-panel', window.top.document).css('display')=='block'){
                $('.shortcodes-panel-button', window.top.document).click();
            }
            var parent = $(this).closest('nav');
            if(!parent.length){
                parent = $('.gather-overlay nav');
            }
            var element_id = parent.find('> ul > li').first().attr('id');
            if(pixflow_customizerObj().$('li#unique-setting-switch').hasClass('close')) {
                pixflow_customizerObj().$('li#unique-setting-switch > h3').click();
            }

            pixflow_customizerObj().$('li[id*="'+element_id+'"]').closest('li.control-subsection').find('> h3').click();

        })

        $('a.logo.header-item').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).attr('href','#');
            return false;
        })

        $('.item-setting').click(function(e){
            e.stopPropagation();
            return false;
        })

        $('.item-setting .menu-selector').click(function (e) {
            e.stopPropagation();
            if($('.shortcodes-panel', window.top.document).css('display')=='block'){
                $('.shortcodes-panel-button', window.top.document).click();
            }
            if($('#unique-setting-switch', window.top.document).hasClass('close')){
                $('#unique-setting-switch', window.top.document).click();
            }
            var $header_item_id = $(this).parent().parent().parent().attr('data-custom-id');
            if($header_item_id == 'logo'){
                $('#accordion-section-branding > h3', window.top.document).click();
            }else if($header_item_id == 'menu'){
                $('#accordion-panel-header > h3', window.top.document).click();
                $('#accordion-section-header_layout > h3', window.top.document).click();
            }else if($header_item_id == 'icons'){
                $('#accordion-section-notification_main > h3', window.top.document).click();
            }
            return false;
        });

        // Add drag Handle
        $('.header-item').append('<div class="sortable-handle"></div>');
        $('.header-item').append('<div class="ui-move-handle"></div>');

        //Footer setting
        var footerSetting = '<div class="footer-setting">' + '<span class="setting-svg">'+settingSvg+'</span>' +
            '<div class="setting-holder">'+livepreview_var.footerSetting+'</div>' +
            '</div>';
        $('footer').append(footerSetting);

        $("footer").hoverIntent({
            over: function () {
                $(this).find('.footer-setting').css({'display': 'block'});
            },
            out: function () {
                $(this).find('.footer-setting').css({'display': 'none'});
            },
            timeout: 300
        });

        $('footer .footer-setting .setting-holder').click(function () {
            if($('.shortcodes-panel', window.top.document).css('display')=='block'){
                $('.shortcodes-panel-button', window.top.document).click();
            }
            $('#accordion-panel-footer > h3', window.top.document).click();
            $('#accordion-section-footer_layout > h3', window.top.document).click();
        });

        // get array
        function pixflow_serialize_widget_map() {
            'use strict';
            var res = _.map($('.header-item'), function (el) {
                el = $(el);
                return {
                    id: el.attr('data-custom-id'),
                    align: el.attr('data-md-align'),
                    width: el.attr('data-md-width'),
                    headerTheme: $headerTopTheme
                };
            });
            if ($headerTopTheme == 'gather' && $('header .style-style2').length) {
                pixflow_gatherBlockBorder(res);
            }
            var finals = [];
            var final = [];
            for(var k in res) {

                if(finals.indexOf(res[k]['id']) != -1 || res[k]==null){
                    delete res[k];
                }else{
                    finals.push(res[k]['id']);
                    final.push(res[k]);
                }
            }
            res = JSON.stringify(final);
            pixflow_customizerObj().$("input[data-customize-setting-link='header_items_order']").attr("value", res).keyup().trigger('change');
        };

        function pixflow_updateMaxWidth(event) {
            var itemsWidth = $headerLogo.width() + $headerMenu.width() + $headerIcons.width(),
                freeSpace = $headerContent.width() - itemsWidth;
            $('header:not(.header-clone) .top .header-item').each(function (index, value) {
                var maxWidth = $(this).width() + freeSpace;
                maxWidth = maxWidth.toFixed(1);
                if (event == 'stop') {
                    var wid =  $(this).width() / $headerContent.width() * 100;
                    wid = wid.toFixed(1);
                    $(this).css('width', wid + '%');
                    $(this).attr('data-md-width', wid);
                }
                $(this).resizable("option", "maxWidth", maxWidth);
            });
        }

        //Install Sortable
        /*Add sortable functionality*/
        $headerContent.sortable({
            placeholder: 'item-order-placeholder',
            containment: 'parent',
            items: "> .header-item",
            axis: 'x',
            forcePlaceholderSize: true,
            cursorAt: {top: 0, left: 0},
            helper: function () {
                return $("<div class=\"custom-helper\"></div>");
            },
            start: function (event, ui) {
                $(".item-order-placeholder").css("width", ui.originalPosition.width);
                var id = ui.item.attr('data-custom-id');
                ui.helper.addClass(id + '-helper');
            },
            update: function (event, ui) {
                pixflow_serialize_widget_map();
            }
        });
        $headerContent.disableSelection();
        $headerContent.sortable({cancel: '.item-setting'});
        /*Add resizeable functionality*/
        $('.header-item').resizable({
            handles: 'e',
            containment: "parent",
            create: function (event, ui) {
            },
            stop: function (event, ui) {
                pixflow_updateMaxWidth('stop');
                pixflow_serialize_widget_map();
            },
            resize: function (event, ui) {
                pixflow_updateMaxWidth('resize');
                var currentAlign = ui.element.attr('data-md-align'),
                    currentWidth = ui.element.width() / $headerContent.width() * 100;
                ui.element.attr({'data-md-align': currentAlign, 'data-md-width': currentWidth});
            }
        });

        // Optimize styles
        $('header .top ul.icons-pack li.icon').css('line-height', $('header').height() + 'px');
        function pixflow_gatherBlockBorder(items) {
            var headerItems = $('.header-item');
            var headerItems = $('.header-item');
            for (var i = 1; i < items.length; i++) {
                var leftItem = items[i - 1],
                    currentItem = items[i];
                if (currentItem == leftItem) {
                    if (leftItem.logo == 'menu') {
                        headerItems.eq(i - 1).find('.gather-menu-icon').removeClass('border-left');
                        headerItems.eq(i - 1).find('.gather-menu-icon').addClass('border-right');
                    } else {
                        headerItems.eq(i - 1).removeClass('border-left');
                        headerItems.eq(i - 1).addClass('border-right');
                    }
                } else {
                    if (leftItem.logo == 'menu') {
                        headerItems.eq(i - 1).find('.gather-menu-icon').removeClass('border-left');
                        headerItems.eq(i - 1).find('.gather-menu-icon').addClass('border-right');
                    } else {
                        headerItems.eq(i - 1).removeClass('border-left');
                        headerItems.eq(i - 1).addClass('border-right');
                    }
                    if (currentItem.logo == 'menu') {
                        headerItems.eq(i).find('.gather-menu-icon').removeClass('border-right');
                        headerItems.eq(i).find('.gather-menu-icon').addClass('border-left');
                    } else {
                        headerItems.eq(i).removeClass('border-right');
                        headerItems.eq(i).addClass('border-left');
                    }
                }
            }
            if (headerItems.eq(0).attr('data-md-align') == 'left') {
                if (headerItems.eq(0).attr('data-custom-id') == 'menu') {
                    headerItems.eq(0).find('.gather-menu-icon').removeClass('border-left');
                } else {
                    headerItems.eq(0).removeClass('border-left');
                }
            } else {
                if (headerItems.eq(0).attr('data-custom-id') == 'menu') {
                    headerItems.eq(0).find('.gather-menu-icon').addClass('border-left');
                } else {
                    headerItems.eq(0).addClass('border-left');
                }
            }
            if ($('.header-item:last-child').attr('data-md-align') == 'right') {
                if ($('.header-item:last-child').attr('data-custom-id') == 'menu') {
                    $('.header-item:last-child').find('.gather-menu-icon').removeClass('border-right');
                } else {
                    $('.header-item:last-child').removeClass('border-right');
                }
            } else {
                if ($('.header-item:last-child').attr('data-custom-id') == 'menu') {
                    $('.header-item:last-child').find('.gather-menu-icon').addClass('border-right');
                } else {
                    $('.header-item:last-child').addClass('border-right');
                }
            }
        }
    }

    /* Footer Widget Area Drag & Drop Feature */
    function pixflow_widgetDragDrop() {
        'use strict';
        if (window == window.top) {
            return
        }
        if ($(".footer-widgets .widget-area .widget-area-column").length <= 1) {
            return;
        }

        var $widgetColumns = $(".footer-widgets .widget-area");
        $widgetColumns.find(".widget-area-column").append('<div class="sortable-handle"></div>');
        $widgetColumns.sortable({
            axis:"x",
            //revert: true,
            cursor: "move",
            cursorAt: {left: 20},
            update: function (event, ui) {
                var sortedIDs = $widgetColumns.sortable("toArray");
                pixflow_customizerObj().$("input[data-customize-setting-link='footer_widgets_order']").attr("value", JSON.stringify(sortedIDs)).keyup();
            }
        });
        $widgetColumns.disableSelection();

    }

    function pixflow_customizerAnimate(state) {
        "use strict";
        if (state == 'in') {
            //Be cool!
        } else {
            if(pixflow_customizerObj().dirtyLoadedSettings.length){
                for (var key in pixflow_customizerObj().dirtyLoadedSettings){
                    pixflow_customizerObj().dirtyLoadedSettings[key].click();
                }
                pixflow_customizerObj().dirtyLoadedSettings = [];
            }
            pixflow_checkCollapse();
        }
    }

    function pixflow_checkCollapse(){
        if(pixflow_customizerObj().$('.hold-collapse').length){
            pixflow_customizerObj().$('.hold-collapse').click();
        }
    }

    function pixflow_loadVC(){

        'use strict';
        $(window).load(function () {
            pixflow_customizerObj().uniqueLoaded++;
            if($('meta[name="post-id"]').attr('setting-status') == 'unique') {
                if(pixflow_customizerObj().uniqueLoaded >= 1){
                    var doLoading = true;
                }
            }else{
                var doLoading = true;
            }

            if(doLoading == true){
                pixflow_customizerAnimate('out');
            }

            setTimeout(function(){
                pixflow_customizerObj().pixflow_masterSetting();
            },1000);
        });
        var s;

        pixflow_customizerObj().$('#save-btn ').off('click.publish');
        pixflow_customizerObj().$('#save-btn ').on('click.publish',function(){
            try {
                var customizerSaved = 0,
                    checkedCustomizer = false,
                    shouldCheck = false,
                    $this = $(this),
                    $id = $('meta[name="post-id"]'),
                    post_id = $id.attr('content'),
                    post_detail = $id.attr('detail');
                if($id.attr('setting-status') == 'unique'){
                    pixflow_customizerObj().$('li.unique-page-setting .circle').addClass('expand');
                    pixflow_save_status('unique', post_id, post_detail,'save',function(){
                        pixflow_save_unique_setting(post_id,post_detail);
                    });
                    shouldCheck = true;
                }else{
                    pixflow_customizerObj().$('li.general-page-setting .circle').addClass('expand');
                    pixflow_save_status('general', post_id, post_detail, 'save', function () {
                        try {
                            pixflow_customizerObj().$('input#save').click();
                            shouldCheck = true;
                        }catch(e){
                            customizerSaved=2;
                            // pixflow message box
                            pixflow_customizerObj().pixflow_messageBox(livepreview_var.cantSave,'caution',livepreview_var.cantSaveMsg,livepreview_var.cantSaveBtn,function() {
                                pixflow_customizerObj().pixflow_closeMessageBox();
                            });
                        }
                    });
                }
                // pixflow_customizerObj().$('#customize-preview #save-btn').css({'background-color':'#0f94e9',color:'#fff'});
                pixflow_customizerObj().$('#save-btn').addClass('saving');
                pixflow_customizerObj().$('#save-btn .save-loading').animate({width: '90%'}, 7000);
                pixflow_customizerObj().$('#save-btn .text').html(livepreview_var.saving);
                s = setInterval(function () {
                    try {
                        if (!checkedCustomizer && !pixflow_customizerObj().$('body.saving').length && shouldCheck) {
                            customizerSaved++;
                            checkedCustomizer = true;
                        }

                        if (customizerSaved == 1) {
                            clearInterval(s);
                            pixflow_customizerObj().$('#save-btn .save-loading').stop().animate({'width': '100%'}, 200, 'swing', function () {
                                pixflow_customizerObj().$('#save-btn .text').html(livepreview_var.save_preview);
                                setTimeout(function () {
                                    pixflow_customizerObj().$('#save-btn').removeClass('saving');
                                    pixflow_customizerObj().$('#save-btn .text').html(pixflow_customizerObj().customizerSentences.saveAndView);
                                }, 2000);
                                pixflow_customizerObj().$('#save-btn .save-loading').css('width', '0%');
                                pixflow_customizerObj().$('#customize-header-actions #save').val('Saved');
                                window.top.pixflow_refreshFrame();
                                if (typeof pixflow_customizerObj().saveCallbackFunction == 'function') {
                                    setTimeout(function () {
                                        pixflow_customizerObj().saveCallbackFunction();
                                    }, 1);
                                }
                                if ($this.hasClass('save-preview')) {
                                    window.top.location = window.top.wp.customize.previewer.previewUrl();
                                }
                            });
                        }
                    }catch(e){
                        // pixflow message box
                        clearInterval(s);
                        pixflow_customizerObj().pixflow_messageBox(livepreview_var.cantSave,'caution',livepreview_var.cantSaveMsg,livepreview_var.cantSaveBtn,function() {
                            pixflow_customizerObj().pixflow_closeMessageBox();
                            pixflow_customizerObj().$('#save-btn .save-loading').stop().animate({'width': '100%'}, 200, 'swing', function () {
                                pixflow_customizerObj().$('#save-btn .text').html(pixflow_customizerObj().customizerSentences.saveAndView);
                                setTimeout(function () {
                                    pixflow_customizerObj().$('#save-btn').removeClass('saving');
                                    pixflow_customizerObj().$('#save-btn .text').html(pixflow_customizerObj().customizerSentences.saveAndView);
                                }, 2000);
                                pixflow_customizerObj().$(' #save-btn .save-loading').css('width', '0%');
                            });
                        });
                    }
                }, 100);
            }catch (e){
                // pixflow message box
                pixflow_customizerObj().pixflow_messageBox(livepreview_var.cantSave,'caution',livepreview_var.cantSaveMsg,livepreview_var.cantSaveBtn,function() {
                    pixflow_customizerObj().pixflow_closeMessageBox();
                });
            }
        });


    }

    function pixflow_itemOrderSetter(action) {
        'use strict';
        var $headerContent = $('header .top'),
            $headerItems = $('.header-item');
        if (!$headerContent.hasClass('ui-sortable')) {
            pixflow_headerGrid();
        }
        if(pixflow_customizerObj().$('.hold-collapse').length && action != 'disable')
            return;

        if (action == 'disable') {
            $headerItems.find('.sortable-handle,.ui-resizable-handle,.ui-move-handle').css('display', 'none');
            $headerItems.css('background-color', 'rgba(255, 255, 255, 0)');
            $headerContent.sortable(action);
            $headerItems.resizable(action);
            $('.item-setting').css('opacity', '0');
        } else {
            $headerContent =$headerContent.not('.header-clone .top');
            $headerItems = $headerItems.not('.header-clone .header-item');
            $headerContent.sortable(action);
            $headerItems.resizable(action);
            $headerItems.find('.sortable-handle,.ui-resizable-handle,.ui-move-handle').css('display', 'block');
            $('.item-setting').css('opacity', '1');
        }

    }

    function pixflow_loadRelatedSidebar(){
        'use strict';
        var sidebar = $('meta[name="post-id"]').attr('sidebar-type'),
            pageSidebar = pixflow_customizerObj().$('#accordion-section-sidebar_general'),
            mainSidebar = pixflow_customizerObj().$('#accordion-section-sidebar_blogPage'),
            postSidebar = pixflow_customizerObj().$('#accordion-section-sidebar_blogSingle'),
            shopSidebar = pixflow_customizerObj().$('#accordion-section-sidebar_shop');
        if(pixflow_customizerObj().$('#accordion-panel-sidebar').hasClass('current-panel') && pixflow_customizerObj().$('#accordion-section-sidebar_'+sidebar).css('display') == 'none'){
            //Running back button click twice( I'm not noob, I'm just tired :)
            pixflow_customizerObj().$('.back-btn').click();
            pixflow_customizerObj().$('.back-btn').click();
        }

        if('general' == sidebar){
            pageSidebar.css('display','list-item');
            mainSidebar.css('display','none');
            postSidebar.css('display','none');
            shopSidebar.css('display','none');
        }else if('blogPage' == sidebar){
            mainSidebar.css('display','list-item');
            pageSidebar.css('display','none');
            postSidebar.css('display','none');
            shopSidebar.css('display','none');
        }else if('blogSingle' == sidebar){
            postSidebar.css('display','list-item');
            pageSidebar.css('display','none');
            mainSidebar.css('display','none');
            shopSidebar.css('display','none');
        }else if('shop' == sidebar){
            shopSidebar.css('display','list-item');
            pageSidebar.css('display','none');
            mainSidebar.css('display','none');
            postSidebar.css('display','none');
        }
    }

    var $ = jQuery;

    $(document).ready(function (){
        pixflow_headerGrid('true');
        pixflow_widgetDragDrop();
        pixflow_loadVC();
		pixflow_customizerObj().$('.customizer-loading').css('display' , 'none');
        window.onbeforeunload = null;

    });
    $(window).load(function () {
        //pixflow_portfolioItemsPanel();
        pixflow_loadRelatedSidebar();
        //Hide overflow from header icons
        $( "header.top:not(.top-modern) .icons-pack li.icon").wrapAll( "<div class='wrap' />");
        $('header .hidden-tablet').removeClass('hidden-tablet');

    });
}
