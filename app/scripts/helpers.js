
var js_frw = (function() {
    'use strict';
    return {
        adjourn_run: adjourn_run,                                   
        adjourn_run_time: adjourn_run_time,                        
        color_hex_to_rgb: color_hex_to_rgb,                         
        catch_event_scroll: catch_event_scroll,                     
        trim_input_file: trim_input_file,                           
        check_content: check_content,                               
        open_popup: open_popup,                                     
        close_popup: close_popup,                                   
        get_query_string_url: get_query_string_url,                 
    };

    function adjourn_run_time(fn, ms, scope) {
        ms || (ms = 250);
        var last,
        deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
            args = arguments;
            if (last && now < last + ms) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, ms);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }

    function color_hex_to_rgb(hex, opacity){
        var h = hex.replace('#', '');
        h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

        for(var i=0; i<h.length; i++){
            h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);
        }

        if (typeof opacity != 'undefined') {
            h.push(opacity);
        }

        return 'rgba('+h.join(',')+')';
    }

    function catch_event_scroll(){
        var previousScroll = 0;

        $(window).on('scroll', function(event) {
            var currentScroll = $(this).scrollTop();
            if (currentScroll > previousScroll){
                console.log('down');
            } else {
                console.log('up');
            }
            previousScroll = currentScroll;
        });
    }


    function trim_input_file(obj) {
        obj.replaceWith(obj.val('').clone(true));
    }

    function check_content(data) {
        var output = true;
        if(!isNaN(data)){
            output = false;
        } else if(data === null){
            output = true;
        } else if(data === undefined){
            output = true;
        } else {
            for(var key in data) {
                if(data.hasOwnProperty(key)){
                    output = false;
                }
            }
        }
        return output;
    }

    function open_popup(params) {
        if (typeof($.magnificPopup) === 'undefined') {
            alert('stPopup: magnificPopup not founOpend!');
            return false;
        } else {
            var o = extend_obj({
                type: 'inline',
                removeDelay: 200,
                closeOnBg: true,
                alignTop: false,
                load_data_priority: true,
                enableEscapeKey: true,
                showCloseBtn: true,
                closeBtnInside: true,
                modal: false,
                effect: 'custom-fromTop',
                overflowY: 'scroll',
                fixedContentPos: 'auto',
                fixedBgPos: true,
                index: null,
                gallery: {
                    enabled:true,
                    tCounter: '%curr%/%total%'
                },
                beforeOpen: function(){},
                open: function(){},
                beforeClose: function(){},
                close: function(){},
                afterClose: function(){},
                imageLoadComplete: function(){},
                buildControls: function(){},
                callbacks: {
                    beforeOpen: function(){
                        this.st.mainClass = o.effect;
                        if(typeof o.beforeOpen === 'function') o.beforeOpen();
                    },
                    open: function(){
                        if(typeof o.open === 'function') o.open();
                    },
                    beforeClose: function(){
                        if(typeof o.beforeClose === 'function') o.beforeClose();
                    },
                    close: function(){
                        this.wrap.removeClass('mfp-image-loaded');
                        if(typeof o.close === 'function') o.close();
                    },
                    afterClose: function(){
                        if(typeof o.afterClose === 'function') o.afterClose();
                    },
                    imageLoadComplete: function(){
                        var self = this;
                        setTimeout(function() {
                            self.wrap.addClass('mfp-image-loaded');
                            if(typeof o.imageLoadComplete === 'function') o.imageLoadComplete();
                        }, 16);
                    },
                    buildControls: function() {
                        try{
                            var contaniner = this.contentContainer;
                            var arrowLeft = this.arrowLeft;
                            var arrowRight = this.arrowRight;
                            contaniner.append(arrowLeft.add(arrowRight));
                            if(typeof o.buildControls === 'function') o.buildControls();
                        }
                        catch(err){

                        }
                    }
                }
            }, params);

            close_popup();

            $.magnificPopup.open(o);
        }
    }

    function close_popup(){
        $.magnificPopup.close();
    }

    function get_query_string_url(url, name) {
        var a = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var regexS = '[\\?&]' + a + '=([^&#]*)';
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        if (results === null) return '';
        else return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function format_unit_money(number, places, symbol, thousand, decimal) {
        number = number || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 0;
        symbol = symbol !== undefined ? symbol : '';
        thousand = thousand || '.';
        decimal = decimal || ',';
        var negative = number < 0 ? '-' : '',
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + '',
        j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '');
    }

    function load_data_priority(fileList, callback){
        var loaded = 0;
        var len = fileList.length;
        if(len){
            for (var i = 0; i < len; i++) {
                var img = new Image();
                img.src = fileList[i];
                img.onload = function(event){
                    check(len);
                    console.info('File loaded: ', event.target.currentSrc);
                };

                img.onerror = function(event){
                    check(len);
                    console.info('Cannot load file: ', event.target.currentSrc);
                };
            };
        } else {
            complete();
        }

        function check(count){
            loaded++;
            if(loaded === count){
                complete();
            }
        }

        function complete(){
            if(typeof callback === 'function'){
                callback();
            }
        }
    }

    function go_element(selector, time, verticalOffset) {
        time = typeof(time) !== 'undefined' ? time : 1000;
        verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
        var offset = $(selector).offset();
        var offsetTop = offset.top + verticalOffset;
        $('html,body,.view-container').animate({ scrollTop: offsetTop }, time);
    }

    function go_top(time) {
        time = typeof(time) !== 'undefined' ? time : 1000;
        $('html,body,.view-container').animate({ scrollTop: 0 }, time);
    }

    function random_float_number(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    function random_int_number(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function on_full_screen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }


    function get_data_local_storage(name) {
        var date = new Date(),
        current = Math.round(+date / 1000),
        storedData = JSON.parse(localStorage.getItem(js_setting.preview_fix + '.' + name)) || {},
        storedTime = storedData.finish_time_storage || 0;

        if (storedTime && storedTime < current) {
            del_local_storage_checked(js_setting.preview_fix + '.' + name);
            return undefined;
        } else {
            return storedData.store;
        }
    }

    function add_data_local_storage(name, value, seconds) {
        var date = new Date(),
        schedule = Math.round((date.setSeconds(date.getSeconds() + seconds)) / 1000),
        data = JSON.stringify({finish_time_storage: schedule, store: value});
        try {
            localStorage.setItem(js_setting.preview_fix + '.' + name, data);
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Quota exceeded!');
            }
        }

        return data;
    }

})();