var lang_js = (function(){
	return {
		en:{
			MESSAGE: 'Infomation!',
			MESSAGE_REQUIRE_LOGIN: 'Bạn chưa đăng nhập.',
			MESSAGE_LOGIN_FACEBOOK: 'Bạn chưa đăng nhập facebook.',
			MESSAGE_REQUIRE_ROLE: 'Bạn không có quyền đề truy cập trang này.',
			EVENT_STOP: 'Thời gian tham gia chương trình đã hết, cảm ơn bạn đã quan tâm EN.',

			MENU_HOME: 'Home',
			MENU_ABOUT: 'About',
			MENU_CONTACT: 'Contact',
			MENU_LANGUAGE: 'Languages',

			DT_SUNDAY: 'Sun',
			DT_MONDAY: 'Mon',
			DT_TUESDAY: 'Tue',
			DT_WEDNESDAY: 'Wed',
			DT_THURSDAY: 'Thu',
			DT_FRIDAY: 'Fri',
			DT_SATURDAY: 'Sat',

			DT_JANUARY: 'Jan',
			DT_FEBRUARY: 'Feb',
			DT_MARCH: 'Mar',
			DT_APRIL: 'Apr',
			DT_MAY: 'May',
			DT_JUNE: 'Jun',
			DT_JULY: 'Jul',
			DT_AUGUST: 'Aug',
			DT_SEPTEMBER: 'Sep',
			DT_OCTOBER: 'Otc',
			DT_NOVEMBER: 'Nov',
			DT_DECEMBER: 'Dec'
		},
		vi:{
			MESSAGE: 'Thông báo!',
			MESSAGE_REQUIRE_LOGIN: 'Bạn chưa đăng nhập.',
			MESSAGE_LOGIN_FACEBOOK: 'Bạn chưa đăng nhập facebook.',
			MESSAGE_REQUIRE_ROLE: 'Bạn không có quyền đề truy cập trang này.',
			EVENT_STOP: 'Thời gian tham gia chương trình đã hết, cảm ơn bạn đã quan tâm.',

			MENU_HOME: 'Trang chủ',
			MENU_ABOUT: 'Giới thiệu',
			MENU_CONTACT: 'Liên hệ',
			MENU_LANGUAGE: 'Ngôn ngữ',

			DT_SUNDAY: 'Cn',
			DT_MONDAY: 'Hai',
			DT_TUESDAY: 'Ba',
			DT_WEDNESDAY: 'Tư',
			DT_THURSDAY: 'Năm',
			DT_FRIDAY: 'Sáu',
			DT_SATURDAY: 'Bảy',

			DT_JANUARY: 'Tháng 1',
			DT_FEBRUARY: 'Tháng 2',
			DT_MARCH: 'Tháng 3',
			DT_APRIL: 'Tháng 4',
			DT_MAY: 'Tháng 5',
			DT_JUNE: 'Tháng 6',
			DT_JULY: 'Tháng 7',
			DT_AUGUST: 'Tháng 8',
			DT_SEPTEMBER: 'Tháng 9',
			DT_OCTOBER: 'Tháng 10',
			DT_NOVEMBER: 'Tháng 11',
			DT_DECEMBER: 'Tháng 12'
		}
	};
})();
/**********************************************************************************************************************
												Cấu hình site web
***********************************************************************************************************************/
var js_setting = (function(){
	'use strict';

	var close_Date = new Date(2018,0,1,23,59,59),
		hostname = window.location.host,
		contruct = {},
		date_current = new Date();
	

	switch(hostname){
		case 'live':
		contruct.google_apiKey = '';
		contruct.base_url_database = 'http://live.com/';
		contruct.google_analytic_ids = [''];
		contruct.google_api_idClient = '';
		contruct.preview_fix = 'upLive';
		contruct.base_url = 'http://live.com/';
		contruct.id_facebookApp = '';
		break;
		default:
		contruct.google_apiKey = 'AIzaSyBkB5GqIi0zwqONIzbePzXWYlBmc9refyk';
		contruct.base_url_database = 'http://localhost:5656/';
		contruct.google_analytic_ids = [''];
		contruct.google_api_idClient = '111608153734-bhae0b9vmsapmbv6dv7djsgsg90iitnt.apps.googleusercontent.com';
		contruct.preview_fix = 'onLocal';
		contruct.base_url = 'http://localhost:9888/';
		contruct.id_facebookApp = '5a3d9c21557eef59fe8234c1d9856f73';
		break;
	}

	return {
		reload_page_on_change_state: false,
		finish_time_storage: undefined,
		enable_html5_mode: true,
		animate_delay: 0,
		preview_fix: contruct.preview_fix,
		base_url: contruct.base_url,
		base_url_database: contruct.base_url_database,
		host_sub_folder: '/',
		api_ver: '',
		stop_campaign: date_current > close_Date,
		facebook: {
			appId: contruct.id_facebookApp,
			version: 'v2.8',
			permissions: 'email',
			cookie: true,
			xfbml: true,
			language: 'vi_VN',
			redirect: contruct.base_url
		},
		language: 'vi',
		loading_visible: true,
		loading_just_once: true,
		routings: [],
		google: {
			api:{
				apiKey: contruct.google_apiKey,
				clientId: contruct.google_api_idClient,
				scope: [
				'https://www.googleapis.com/auth/plus.login'
				]
			},
			ga: {
				ids: contruct.google_analytic_ids
			}
		},
		admin: {
			itemPerPage: '20',
			routings: []
		},
		roles: {
			ALL: '*',
			ADMIN: 'admin',
			EDITOR: 'editor',
			REGISTER: 'register',
			GUEST: 'guest'
		},
		sequence_transition_page: [
		{name_state:'home', transition:'0,0'},
		{name_state:'about', transition:'0,0'},
		{name_state:'contact', transition:'0,0'}
		],
		page_loop_transition: true,
		transition_delay_page: 1500,
		count_page_visible: 5,
		load_preview_resource: [
		]		
	}
})();
(function() {
    'use strict';

    /******************************************************************
                                    Mảng
    *******************************************************************/
    Array.prototype.get_index_by = function(name, value) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][name] == value) {
                return i;
            }
        }
        return -1;
    };

    Array.prototype.remove_e_in_arr = function(index) {
        var b = this.splice(index, 1);
        return b;
    };
    /******************************************************************
                                    Chuỗi
    *******************************************************************/
    String.prototype.format_string = function() {
        var args = arguments;
        return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function(m, n) {
            if (m == '{{') {
                return '{';
            }
            if (m == '}}') {
                return '}';
            }
            return args[n];
        });
    };

    String.prototype.trim_string = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
})();



/*************************************************************************************************************************
												Các phương thức tự định nghĩa
*************************************************************************************************************************/
var create_js = (function(){
    return {
    };
})();
/*************************************************************************************************************************
                                                    Các phương thức tiện ích
*************************************************************************************************************************/
var js_frw = (function() {
    'use strict';
    return {
        adjourn_run: adjourn_run,                                   // Làm trễ việc thực thi hàm
        adjourn_run_time: adjourn_run_time,                         // Làm trễ việc thực thi hàm theo thời gian mà developer đặt
        color_hex_to_rgb: color_hex_to_rgb,                         // Chuyển đổi màu từ Hex sang RGB
        catch_event_scroll: catch_event_scroll,                     // Kiểm tra sự kiện đang scroll lên hay scroll xuống
        trim_input_file: trim_input_file,                           // Làm rỗng input type file
        check_content: check_content,                               // Kiểm tra dữ liệu có rỗng hay không
        open_popup: open_popup,                                     // Mở popup
        close_popup: close_popup,                                   // Đóng popup
        get_query_string_url: get_query_string_url,                 // Lấy phần query string của URL (tham số)
        format_unit_money: format_unit_money,                       // Định dạng đơn vị tiền tệ
        load_data_priority: load_data_priority,                     // Các tài nguyên sẽ được load trước
        go_element: go_element,                                     // Scroll tới thành phần
        go_top: go_top,                                             // Scroll lên đầu top
        random_float_number: random_float_number,                   // Lấy 1 số thực ngẫu nhiên
        random_int_number: random_int_number,                       // Lấy 1 số nguyên ngẫu nhiên
        on_full_screen: on_full_screen,                             // Điều chỉnh xem toàn màn hình
        exit_full_screen: exit_full_screen,                         // Tắt chế độ xem toàn màn hình
        del_local_storage: del_local_storage,                       // Làm trống Cookie Storages
        del_local_storage_checked: del_local_storage_checked,       // Xóa Cookie Storages được chọn
        get_data_local_storage: get_data_local_storage,             // Lấy dữ liệu trong Cookie Storages
        add_data_local_storage: add_data_local_storage,             // Thêm dữ liệu vào Cookie Storages
        extend_obj: extend_obj                                      // Kế thừa object
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

    function exit_full_screen() {
        if (document.exit_full_screen) {
            document.exit_full_screen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitexit_full_screen) {
            document.webkitexit_full_screen();
        }
    }

    function del_local_storage() {
        localStorage.clear();
    }

    function del_local_storage_checked(name) {
        localStorage.removeItem(js_setting.preview_fix + '.' + name);
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

    function adjourn_run(fn, ms) {
        var timer = null;
        return function() {
            var context = this,
            args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, ms);
        };
    }

    function extend_obj(a, b){
        for(var key in b){
            if(b.hasOwnProperty(key)){
                a[key] = b[key];
            }
        }
        return a;
    }
})();
(function() {
    'use strict';
    $.fn.accordion = function(autoCollapse, expandFirstItem) {
        var $accord = this.find('.item');
        if (expandFirstItem) {
            $accord.first().find('.question').addClass('expanded');
            $accord.first().find('.answer').show();
        }
        $accord.find('.question').click(function() {
            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
                $(this).parent().find('.answer').slideUp(200);
            } else {
                if (autoCollapse) {
                    $.each($accord.find('.question'), function(i, o) {
                        $(o).removeClass('expanded');
                        $(o).parent().find('.answer').slideUp(200);
                    });
                }
                $(this).addClass('expanded');
                $(this).parent().find('.answer').slideDown(200);
            }
        });
    };
})();
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

 var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    timezoneClip = /[^-+\dA-Z]/g,
    pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = '0' + val;
        return val;
    };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == '[object String]' && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError('invalid date');

        mask = String(dF.masks[mask] || mask || dF.masks['default']);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == 'UTC:') {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? 'getUTC' : 'get',
        d = date[_ + 'Date'](),
        D = date[_ + 'Day'](),
        m = date[_ + 'Month'](),
        y = date[_ + 'FullYear'](),
        H = date[_ + 'Hours'](),
        M = date[_ + 'Minutes'](),
        s = date[_ + 'Seconds'](),
        L = date[_ + 'Milliseconds'](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
            d:    d,
            dd:   pad(d),
            ddd:  dF.i18n.dayNames[D],
            dddd: dF.i18n.dayNames[D + 7],
            m:    m + 1,
            mm:   pad(m + 1),
            mmm:  dF.i18n.monthNames[m],
            mmmm: dF.i18n.monthNames[m + 12],
            yy:   String(y).slice(2),
            yyyy: y,
            h:    H % 12 || 12,
            hh:   pad(H % 12 || 12),
            H:    H,
            HH:   pad(H),
            M:    M,
            MM:   pad(M),
            s:    s,
            ss:   pad(s),
            l:    pad(L, 3),
            L:    pad(L > 99 ? Math.round(L / 10) : L),
            t:    H < 12 ? 'a'  : 'p',
            tt:   H < 12 ? 'am' : 'pm',
            T:    H < 12 ? 'A'  : 'P',
            TT:   H < 12 ? 'AM' : 'PM',
            Z:    utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
            o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
            S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    'default':      'ddd mmm dd yyyy HH:MM:ss',
    shortDate:      'm/d/yy',
    mediumDate:     'mmm d, yyyy',
    longDate:       'mmmm d, yyyy',
    fullDate:       'dddd, mmmm d, yyyy',
    shortTime:      'h:MM TT',
    mediumTime:     'h:MM:ss TT',
    longTime:       'h:MM:ss TT Z',
    isoDate:        'yyyy-mm-dd',
    isoTime:        'HH:MM:ss',
    isoDateTime:    'yyyy-mm-dd\'T\'HH:MM:ss',
    isoUtcDateTime: 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\''
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};


/**************************************************************************************************************************
                                            Các hàm thời gian tiện ích
***************************************************************************************************************************/
var date_time_frw = (function(){
	'use strict';

	return {
        check_day: check_day,                                       // Kiểm tra ngày có nằm giữa 2 mốc thời gian mà người dùng nhập vào hay không
        day_of_arr: day_of_arr,                                     // Kiểm tra ngày có nằm trong mảng ngày cho trước hay không
        date_info: date_info,                                       // Lấy đầy đủ thông tin ngày người dùng nhập vào (Thứ, ngày, tháng, năm,...)
        convert_timestamp_to_date: convert_timestamp_to_date,       // Chuyển đổi định dạng thời gian timestamp sang Date()
        convert_date_to_timestamp: convert_date_to_timestamp,       // Chuyển đổi định dạng thời gian Date() sang timestamp
        convert_iso_to_date: convert_iso_to_date,                   // Chuyển đổi định dạng thời gian ISODate sang Date()
        count_day_of_month: count_day_of_month,                     // Lấy tổng số ngày trong tháng
		date_count: date_count,                                     // Đếm số ngày giữa 2 mốc thời gian do người dùng nhập vào
        month_count: month_count,                                   // Đếm số tháng giữa 2 mốc thời gian do người dùng nhập vào
        count_age: count_age                                        // Đếm tuổi dựa vào ngày sinh
    };

    function check_day(date, startDate, endDate) {
        return date >= startDate && date <= endDate;
    }

    function day_of_arr(date, dateArray) {
        var result = dateArray.filter(function(value){
            return new Date(value).toDateString() === date.toDateString();
        });
        return result.length !== 0;
    }

    function date_info(date, lang) {
        var lang = lang || 'en';
        var dateNameArr = [
        lang_js[lang].DT_SUNDAY,
        lang_js[lang].DT_MONDAY,
        lang_js[lang].DT_TUESDAY,
        lang_js[lang].DT_WEDNESDAY,
        lang_js[lang].DT_THURSDAY,
        lang_js[lang].DT_FRIDAY,
        lang_js[lang].DT_SATURDAY
        ];
        var monthNameArr = [
        lang_js[lang].DT_JAN,
        lang_js[lang].DT_JANUARY,
        lang_js[lang].DT_FEBRUARY,
        lang_js[lang].DT_MARCH,
        lang_js[lang].DT_APRIL,
        lang_js[lang].DT_MAY,
        lang_js[lang].DT_JUNE,
        lang_js[lang].DT_JULY,
        lang_js[lang].DT_AUGUST,
        lang_js[lang].DT_SEPTEMBER,
        lang_js[lang].DT_OCTOBER,
        lang_js[lang].DT_NOVEMBER,
        lang_js[lang].DT_DECEMBER
        ];
        var dayOfWeek = date.getDay();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var dayName = dateNameArr[dayOfWeek];
        var monthName = monthNameArr[month];

        return {
            day: day,
            month: parseInt(month + 1),
            year: year,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            dateString: (day < 10 ? '0' + day : day) + '/' + (parseInt(month + 1) < 10 ? '0' + parseInt(month + 1) : parseInt(month + 1)) + '/' + year,
            timeString: (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes),
            dayName: dayName,
            monthName: monthName,
            date_count: date_count(date, new Date())
        }
    }

    function convert_timestamp_to_date(timestamp){
        var date = new Date(timestamp * 1000);
        return date_info(date);
    }

    function convert_date_to_timestamp(date){
        return date.getTime() / 1000;
    }

    function convert_iso_to_date(isoString){
        var dtstr = isoString;
        dtstr = dtstr.replace(/\D/g,' ');
        var arr = dtstr.split(' ');
        arr[1]--;
        var result = new Date(Date.UTC(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]));
        return result;
    }

    function count_day_of_month(month){
        var date = new Date();
        return new Date(date.getFullYear(), month, 0).getDate();
    }

    function date_count(date1, date2) {
    	var oneDay = 1000 * 60 * 60 * 24;
    	return Math.round((date2.getTime() - date1.getTime()) / oneDay);
    }

    function month_count(date1, date2) {
    	return (date1.getMonth()) - (date2.getMonth()) + (12 * (date1.getFullYear() - date2.getFullYear())) + 1;
    }

    function count_age(birthday) {
    	var today = new Date();
    	var thisYear = 0;
    	if (today.getMonth() < birthday.getMonth()) {
    		thisYear = 1;
    	} else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
    		thisYear = 1;
    	}
    	var age = today.getFullYear() - birthday.getFullYear() - thisYear;
    	return age;
    }
})();
(function(){
    'use strict';

    angular
    .module('webMyApp', [
        'ngSanitize',
        'ngAnimate',
        'ngMessages',
        'ngResource',
        'mdlCore',
        'stRouter',
        'angular-google-analytics',
        'angular-cache',
        'toastr'
        ])
    .config(config);

    function config(
        $httpProvider,
        $locationProvider,
        AnalyticsProvider,
        CacheFactoryProvider,
        toastrConfig
        ){
        // Configs Google Analytics
        var gaAcc = [];
        for (var i = 0; i < js_setting.google.ga.ids.length; i++) {
            gaAcc.push({tracker: js_setting.google.ga.ids[i], name: 'gaId' + i, trackEvent: true});
        };
        AnalyticsProvider.setAccount(gaAcc);
        
        // Configs popup toastr
        angular.extend(toastrConfig, {
            extendedTimeOut: 1000,
            timeOut: 1000,
            newestOnTop: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            tapToDismiss: true,
            allowHtml: true,
            closeButton: true,
            target: 'body'
        });

        // Configs cache
        angular.extend(CacheFactoryProvider.defaults, {
            maxAge: 24 * 60 * 60 * 1000,
            deleteOnExpire:'aggressive',
            storageMode:'localStorage'
        });

        // Configs HTML5 API Pushstate
        $locationProvider.html5Mode(js_setting.enable_html5_mode).hashPrefix('!');
        $httpProvider.defaults.headers.post['Content-Type'] = 'text/plain; charset=UTF-8';
        $httpProvider.interceptors.push('httpRequestTimeout');
    }
})();
var appRouter = (function(){
	'use strict';

	angular
	.module('webMyApp')
	.run(run);

	function run(routerHelper){
		routerHelper.configureStates(js_setting.routings, '/');
	}

	var resolve = {
		/* @ngInject */
		beforeStateChange: function($q, accountSv, resourceSv){
			return $q.when()
			.then(function(){
				var defer = $q.defer();

				if (!accountSv.isSignedIn()) {
					accountSv.siteLogin(function(resp){
						defer.resolve(resp);
					});
				} else {
					defer.resolve(accountSv.getProfile());
				}

				return defer.promise;
			})
			.then(function(profile){
				var defer = $q.defer();

				resourceSv.api('views/account/json/email.json').get(function(resp){
					defer.resolve({profile: profile, mail: resp.toJSON()});
				});

				return defer.promise;
			});
		}
	};

    return {
        resolve: resolve
    };
})();
(function(){
    'use strict';

    angular
    .module('webMyApp')
    .run(run);

    function run(
        $rootScope,
        $window,
        accountSv,
        valueSv){
        // Global variables
        $rootScope.pageData = {};
        $rootScope.pageData.language = js_frw.get_query_string_url($window.location.href, 'lang') || js_setting.language;
        $rootScope.pageData.host_sub_folder = js_setting.host_sub_folder;
        $rootScope.pageData.account = accountSv;
        $rootScope.pageData.loader = valueSv;
    }
})();
(function(){
    'use strict';

    angular
    .module('webMyApp')
    .run(run);

    function run(
        $rootScope,
        $q,
        $timeout,
        $window,
        $state,
        accountSv,
        valueSv,
        resourceSv){
        // Global methods
        $rootScope.pageMethods = {};
        $rootScope.pageMethods.showLoading = showLoading;
        $rootScope.pageMethods.hideLoading = hideLoading;
        $rootScope.pageMethods.redirect = redirect;

        function showLoading(){
            if(js_setting.loading_visible){
                valueSv.loading = js_setting.loading_just_once ? valueSv.loadCounter === 0 : true;
            }
        }

        function hideLoading(){
            valueSv.loadCounter++;
            valueSv.loading = false;
        }

        function redirect(state, params, notify){
            $state.go(state, params);

            // $state.go(state, params || {}, {notify: false})
            // .then(function(){
            //     //if(js_setting.reload_page_on_change_state){
            //         $timeout(function(){
            //             //$window.location.reload();
            //             $state.reload();
            //         },200);
            //     //} else {
            //     //    $state.reload();
            //     //}
            // });
        }
    }
})();
(function(){
    'use strict';

    angular
    .module('webMyApp')
    .run(run);

    function run(
        $rootScope,
        $window,
        $document,
        $state,
        Analytics,
        httpPendingRequests
        ){
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.pageData.title = toState.data.title;
            $rootScope.pageData.className = toState.name;
            $rootScope.pageData.menuType = toState.data.menuType;

            $rootScope.pageMethods.showLoading();
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            // if (toState.name !== fromState.name) {
            //     httpPendingRequests.cancelAll();
            // }

            $window.scrollTop = $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;

            $rootScope.pageData.currentState = toState;
            $rootScope.pageData.currentParams = toParams;

            Analytics.trackPage($state.href(toState, toParams));

            $rootScope.pageMethods.hideLoading();
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.info('$stateChangeError:', error);
        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            console.info('$stateNotFound:', unfoundState);
        });
    }
})();
(function(){
	'use strict';

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['webMyApp']);
	});
})();
(function(){
	'use strict';

	angular
	.module('mdlCore', [])
	.value('valueSv', {
		loading: false,
		loadCounter: 0
	})
	.constant('stEvents', {
		media:{
			PLAY: 'st:play',
			PAUSE: 'st:pause',
			STOP: 'st:stop',
			SEEK: 'st:seek',
			VOLUME: 'st:volume',
			FULLSCREEN: 'st:FullScreen',
			ENTER_FULLSCREEN: 'st:onEnterFullscreen',
			EXIT_FULLSCREEN: 'st:onExitFullscreen',
			ENDED: 'st:ended',
			STATUS: 'st:status'
		}
	});
})();
(function(){
	'use strict';

	angular
	.module('mdlCore')
	.filter('ftTrustHtml', ftTrustHtml)						// Chỉ hiển thị dữ liệu dạng html
	.filter('ftTrustResource', ftTrustResource)				// Chỉ hiển thị dữ liệu có đường dẫn
	.filter('ftFormatCurrency', ftFormatCurrency)			// Định dạng tiền tệ
	.filter('ftHexToRgb', ftHexToRgb)						// Đổi mã màu hex sang Rgb
	.filter('ftTripHtml', ftTripHtml)						// 
	.filter('ftFormatDate', ftFormatDate)					// Định dạng ngày tháng
	.filter('ftTimestampToDate', ftTimestampToDate)			// Chuyển đổi ngày tháng sang kiểu Date
	.filter('ftFirstPage', ftFirstPage);					// Chuyển hướng đến trang bắt đầu

	function ftTrustHtml($sce) {
		return function (data) {
			return $sce.trustAsHtml(data);
		};
	}
	function ftTrustResource($sce) {
		return function (data) {
			return $sce.trustAsResourceUrl(data);
		};
	}
	function ftFormatCurrency(){
		return function (data) {
			return js_frw.format_unit_money(data);
		};
	}

	function ftHexToRgb(){
		return function (data, alpha) {
			return js_frw.color_hex_to_rgb(data, alpha);
		};
	}

	function ftTripHtml(){
		return function (data) {
			return String(data).replace(/<[^>]+>/gm, '');
		};
	}

	function ftFormatDate(){
		return function (data, format) {
			var date = new Date(data.replace(/-/g,'/'));
			var output = $.datepicker.formatDate(format, date);
			return output;
		};
	}

	function ftTimestampToDate(){
		return function (data, format) {
			var date = new Date(data * 1000);
			var output = $.datepicker.formatDate(format, date);
			return output;
		};
	}

	function ftFirstPage() {
		return function(data, start) {
			start = +start;
			if(angular.isArray(data)){
				return data.slice(start);
			} else {
				return data;
			}
		};
	}
})();
(function(){
	'use strict';

	angular
	.module('mdlCore')
	.service('stUtilsSv', stUtilsSv)
	.service('stNotificationSv', stNotificationSv)
	.service('resourceSv', resourceSv)
	.service('stPopupSv', stPopupSv)
	.service('httpPendingRequests', httpPendingRequests)
	.factory('httpRequestTimeout', httpRequestTimeout)
	.factory('stPreloadSv', stPreloadSv)
	.factory('stDelaySv', stDelaySv);

	function stUtilsSv(){
		function recusive(data, parentId, seperator){
			var output;
			var tmp = [];
			seperator = seperator || '';
			if(angular.isArray(data)){
				var items = data.filter(function(item){ return item.parentId === parentId });
				if(items.length){
					for (var i = 0; i < items.length; i++) {
						items[i].name = seperator + items[i].name;

						tmp.push(items[i]);

						var subs = recusive(data, items[i].id, seperator + "—");

						for (var j = 0; j < subs.length; j++) {
							tmp.push(subs[j]);
						}
					}
				}
				output = tmp;
			} else {
				output = data;
			}
			return output;
		}

		return {
			recusive: recusive
		};
	}

	function stNotificationSv($rootScope){
		function process(){

		}

		return {
		};
	}

	function resourceSv($resource){
		return {
			api: api
		};

		function api(apiName, params, methods){
			methods = methods || {};
			methods.get = js_frw.extend_obj({
			}, methods.get);

			methods.query = js_frw.extend_obj({
				isArray: true
			}, methods.query);

			methods.update = js_frw.extend_obj({
				method:'PUT'
			}, methods.update);

			methods.upload = js_frw.extend_obj({
				method: 'POST',
				headers: { 'Content-Type': undefined },
				transformRequest: angular.identity
			}, methods.upload);


			var apiString = '';

			if(apiName.indexOf('.json') > -1 || apiName.indexOf('http://') > -1 || apiName.indexOf('https://') > -1){
				apiString = apiName;
			} else {
				apiString = js_setting.base_url_database + js_setting.api_ver + apiName;
			}

			return $resource(apiString, params, methods);
		}
	}

	function stPopupSv($timeout, $q, $rootScope, $http, $compile, $templateCache, toastr){
		var isAdmin = window.location.href.indexOf('/admin/') > 0;

		return {
			close: closePopup,
			open: openPopup,
			toastr: toastrPopup,
			message: messagePopup
		};

		function closePopup(){
			var magnificPopup = $.magnificPopup.instance;
			magnificPopup.close();
		}

		function openPopup(options){
			options = js_frw.extend_obj({}, options);
			return loadPopup(options);
		}

		function toastrPopup(options){
			var deferred = $q.defer();

			options = js_frw.extend_obj({
				timeout: 3000
			}, options);

			switch(options.type){
				case 'success':
				deferred = toastr.success(options.data.message, options.data.title, {timeOut: options.timeout}).open;
				break;
				case 'error':
				deferred = toastr.error(options.data.message, options.data.title, {timeOut: options.timeout}).open;
				break;
				case 'warning':
				deferred = toastr.warning(options.data.message, options.data.title, {timeOut: options.timeout}).open;
				break;
				default:
				deferred = toastr.info(options.data.message, options.data.title, {timeOut: options.timeout}).open;
			}

			return deferred.promise;
		}

		function messagePopup(options){
			options = js_frw.extend_obj({
				templateUrl: (isAdmin ? '../' : '') + 'views/popup/message/view.tpl'
			}, options);

			return loadPopup(options);
		}

		function loadPopup(options) {
			var defer = $q.defer(),
			promise,
			tplData = '',
			options = js_frw.extend_obj({
				effect: 'custom-fromTop'
			}, options),
			cached = $templateCache.get(options.templateUrl);

			if(cached !== undefined){
				tplData = cached;
				processPopup(tplData);
				defer.resolve(cached);
				promise = defer.promise;
			} else {
				promise = $http.get(options.templateUrl)
				.success(function (resp) {
					tplData = $templateCache.put(options.templateUrl, resp);
					processPopup(tplData);
				});
			}

			function processPopup(markup){
				var tTcope = js_frw.check_content(options.scope) ? $rootScope : options.scope,
				content = $compile(markup)(tTcope);

				options.items = {
					src: content
				};

				tTcope.popupScope = js_frw.extend_obj({}, options.data);
				tTcope.ok = ok;
				tTcope.cancel = cancel;

				$timeout(function(){
					js_frw.open_popup(options);
				},200);

				function ok(){
					var param = tTcope.popupScope.props.btnOkEvent;

					if(angular.isFunction(param)){
						param(arguments);
					} else if(angular.isString(param) && param.length){
						$rootScope.$broadcast(param, tTcope.popupScope.data);
					}
					$timeout(closePopup, options.removeDelay);
				}

				function cancel(){
					var param = tTcope.popupScope.props.btnCancelEvent;

					if(angular.isFunction(param)){
						param();
					} else if(angular.isString(param) && param.length){
						$rootScope.$broadcast(param, tTcope.popupScope.data);
					}
					$timeout(closePopup, options.removeDelay);
				}
			}

			return promise;
		}
	}

	function httpPendingRequests ($q) {
		var cancelPromises = [];

		function newTimeout() {
			var cancelPromise = $q.defer();
			cancelPromises.push(cancelPromise);
			return cancelPromise.promise;
		}

		function cancelAll() {
			angular.forEach(cancelPromises, function (cancelPromise) {
				cancelPromise.promise.isGloballyCancelled = true;
				cancelPromise.resolve();
			});
			cancelPromises.length = 0;
		}

		return {
			newTimeout: newTimeout,
			cancelAll: cancelAll
		};
	}

	function httpRequestTimeout ($q, httpPendingRequests) {
		return {
			request: function (config) {
				config = config || {};
				if (config.timeout === undefined && !config.noCancelOnRouteChange) {
					config.timeout = httpPendingRequests.newTimeout();
				}
				return config;
			}
		};
	}

	function stPreloadSv($q){
		return {
			load: function(list){
				var defer = $q.defer();
				js_frw.load_data_priority(list, function(){
					defer.resolve();
				});
				return defer.promise;
			}
		};
	}

	function stDelaySv($q, $timeout){
		return {
			delay: function(ms){
				var defer = $q.defer();
				$timeout(function() {
					defer.resolve();
				}, ms);
				return defer.promise;
			}
		};
	}
})();
(function() {
    'use strict';
    angular
    .module('mdlCore')
    .directive('stLoadingProgress', stLoadingProgress)
    .directive('stCalendar', stCalendar)
    .directive('stTimePicker', stTimePicker)
    .directive('stPlaceholder', stPlaceholder)
    .directive('stFileModel', stFileModel)
    .directive('stInputControls', stInputControls)                         // Sự kiện cuộn chuột giữa và nhấn phím mũi tên
    .directive('stValidPasswordMatch', stValidPasswordMatch)               // Kiểm tra mật khẩu trùng khớp
    .directive('stValidPassword', stValidPassword)                         // Kiểm tra độ an toàn của mật khẩu
    .directive('stPasswordStrength', stPasswordStrength)                   // Kiểm tra mật khẩu (Ký tự đặc biệt, in hoa, thường, ký tự số)
    .directive('stWordCount', stWordCount)                                 // Giới hạn số từ được nhập
    .directive('stValidExist', stValidExist)                               // Kiểm tra dữ liệu trong database
    .directive('stValidFileInput', stValidFileInput)                       // Kiểm tra tập tin upload
    .directive('stSubmit', stSubmit)                                       // Nút submit có trạng thái loading
    .directive('stPageTransition', stPageTransition)                       // Hiệu ứng chuyển trang
    .directive('stDatePicker', stDatePicker)                               // Popup chọn ngày
    .directive('stMedia', stMedia)                                         // Điều khiển HTML5 Audio, video
    .directive('stLoading', stLoading)                                     // Trạng thái loading
    .directive('stCustomScrollbar', stCustomScrollbar)                     // Giao diện scrollbar
    .directive('stRepeatCompleted', stRepeatCompleted)                     // Sự kiện khi ng-repeat hoàn thành
    .directive('stPager', stPager)                                         // Tạo phân trang cho dữ liệu
    .directive('stParallax', stParallax)                                   // Hiệu ứng parallax
    .directive('stFancybox', stFancybox)                                   // Lightbox
    .directive('stInfinityScroll', stInfinityScroll)
    .directive('stFullframe', stFullframe)
    .directive('stTag', stTag)
    .directive('stInputNumber', stInputNumber);

    function stLoadingProgress(){
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="custom-progressbar">' +
            '<div></div>' +
            '</div>',
            link: function(scope, iElement, iAttrs) {
                scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    setTimeout(function(){
                        iElement.find('>div').css('width', 0);
                        iElement.fadeIn(200);
                    }, 500);

                    run(0);

                    function run(value){
                        setTimeout(function(){
                            if(value < 90){
                                var randomVal = js_frw.random_int_number(value, value + 10);
                                iElement.find('>div').css('width', randomVal + '%');
                                value += randomVal;
                                run(value);
                            }
                        }, js_frw.random_int_number(200, 500));
                    }
                });

                scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    iElement.find('>div').css('width', '100%');
                    setTimeout(function(){
                        iElement.fadeOut(200);
                    }, 500);
                });
            }
        };
    }

    function stCalendar(){
        return {
            link: function(scope, iElement, iAttrs) {
                var cBody = iElement.find('.c-body');
                var output = '';

                var curDt = new Date(2016,7,16);
                var curDay = curDt.getDate();
                var curMonth = curDt.getMonth();
                var curYear = curDt.getFullYear();
                var curDayOfWeek = curDt.getDay();
                var curDaysInMonth = new Date(curYear, curMonth + 1, 0).getDate();

                var preDt = new Date();
                preDt.setMonth(curMonth - 1);
                var preMonth = preDt.getMonth();
                var preYear = preDt.getFullYear();
                var preDaysInMonth = new Date(preYear, preMonth + 1, 0).getDate();

                var nextDt = new Date();
                nextDt.setMonth(curMonth + 1);
                var nextMonth = nextDt.getMonth();
                var nextYear = nextDt.getFullYear();
                var nextDaysInMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

                //console.log(preDaysInMonth)
                //console.log(curDaysInMonth)
                //console.log(nextDaysInMonth)
                // for (var i = 0; i < curDayOfWeek - 1; i++) {
                //     output += '<a>&nbsp;</a>';
                // }

                for (var i = 0; i < curDaysInMonth; i++) {
                    var cls = (((curDayOfWeek + i)) % 7 === 0) ? 'weekend' : '';
                    output += '<a class="' + cls + '">' + (i + 1) + '</a>';
                }

                // for (var i = 0; i <= 42 - curDaysInMonth - curDayOfWeek; i++) {
                //     output += '<a class="next">' + (i + 1) + '</a>';
                // }

                cBody.html(output);
            }
        };
    }

    function stTimePicker(){
        return {
            replace: true,
            restrict: 'E',
            require: 'ngModel',
            template: '<div>' +
            '<input class="form-control st-time-picker" type="text" />' +
            '<div class="time-controls">' +
            '<div>' +
            '</div>' +
            '</div>',
            link: function(scope, iElement, iAttrs, ngModel) {
                scope.time = 'aaa';
                console.log(iElement);
            }
        };
    }



    function stPlaceholder(){
        return {
            replace: true,
            transclude: true,
            template: '<div>' +
            '<img ng-src="{{icon}}" />' +
            '<span>{{caption}}</span>' +
            '</div>',
            link: function(scope, iElement, iAttrs) {
                var input = angular.element(iAttrs.for);
                scope.caption = iAttrs.caption;
                scope.icon = iAttrs.icon;

                iElement.on('click', function(event) {
                    iElement.hide();
                    input.focus();
                });

                input.on('focus', function(event) {
                    iElement.hide();
                });

                input.on('blur', function(event) {
                    var val = input.val();

                    if(!val.length){
                        iElement.show();
                    }
                });
            }
        };
    }

    function stFileModel($parse){
        return {
            link: function(scope, iElement, iAttrs) {
                var model = $parse(iAttrs.stFileModel);
                var modelSetter = model.assign;

                iElement.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, iElement[0].files);
                    });
                });
            }
        };
    }

    function stInputControls($state, $timeout) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                var len = js_setting.sequence_transition_page.length - 1,
                currentPage = '',
                direction = '',
                currentIdx = 0;

                scope.allowInputControls = true;

                scope.$on('st:allowInputControls', function(event, data) {
                    scope.allowInputControls = data;
                });

                scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    currentPage = toState.name;
                    currentIdx = js_setting.sequence_transition_page.get_index_by('name_state', currentPage);

                    $timeout(function() {
                        scope.allowInputControls = true;
                    }, js_setting.transition_delay_page);
                });

                iElement.on('keydown', function(event) {
                    currentPage = $state.current.name;
                    if (event.keyCode === 38 || event.keyCode === 39) {
                        direction = 'down';
                        gotoPage(currentPage, direction);
                    }
                    if (event.keyCode === 37 || event.keyCode === 40) {
                        direction = 'up';
                        gotoPage(currentPage, direction);
                    }
                });

                iElement.mousewheel(function(event, delta, deltaX, deltaY) {
                    direction = delta > 0 ? 'down' : 'up';
                    gotoPage(currentPage, direction);
                });

                function gotoPage(page, dir) {
                    if (scope.allowInputControls) {
                        scope.allowInputControls = false;
                        if (dir === 'up') {
                            currentIdx++;
                        } else {
                            currentIdx--;
                        }
                        if (js_setting.page_loop_transition) {
                            if (currentIdx > len) currentIdx = 0;
                            if (currentIdx < 0) currentIdx = len;
                        } else {
                            if (currentIdx > len) currentIdx = len;
                            if (currentIdx < 0) currentIdx = 0;
                            $timeout(function() {
                                scope.allowInputControls = true;
                            }, js_setting.transition_delay_page);
                        }
                        $state.go(js_setting.sequence_transition_page[currentIdx].name_state);
                    }
                }
            }
        };
    }

    function stValidPasswordMatch() {
        return {
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                var pw = $(iAttrs.stValidPasswordMatch);

                ngModel.$parsers.push(function(value) {
                    ngModel.$setValidity('match', value === pw[0].value);
                    return value;
                });
            }
        };
    }

    function stPasswordStrength() {
        return {
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                var PASSWORD_PATTERN = [/[^\w\s]+/, /[A-Z]+/, /\w+/, /\d+/];
                var element = $(iAttrs.stPasswordStrength);

                iElement.on('focus', function(event) {
                    element.show();
                });

                iElement.on('blur', function(event) {
                    element.hide();
                });

                ngModel.$parsers.push(function(value) {
                    var level = 0;
                    if (value.length >= 8) {
                        angular.forEach(PASSWORD_PATTERN, function(regex) {
                            if (regex.test(value)) {
                                level++;
                            }
                        });
                        scope.passwordStrength = level;
                    }
                });
            }
        };
    }

    function stWordCount() {
        return {
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                var maxW = parseInt(iAttrs.maxWords);
                var minW = parseInt(iAttrs.minWords) || 0;
                var wordCount = 0;

                ngModel.$parsers.push(function(value) {
                    wordCount = value.trim().replace(/(\r\n|\n|\r)/gm, ' ').replace(/\.\s+/g, ' ').split(' ').length;
                    ngModel.$setValidity('mixwords', wordCount >= minW);
                    ngModel.$setValidity('maxwords', wordCount <= maxW);
                    return value;
                });
            }
        };
    }

    function stValidExist($resource) {
        return {
            require: 'ngModel',
            scope: {
                stValidExist: '='
            },
            link: function(scope, iElement, iAttrs, ngModel) {
                var data = scope.stValidExist;
                iElement.on('focus', function(event) {
                    $(data.selector).hide();
                });

                iElement.on('blur', function(event) {
                    data.value = ngModel.$viewValue;
                    var User = $resource(data.url);
                    var userInfo = new User(data);

                    userInfo.$save(function(resp) {
                        //ngModel.$setValidity('recordexist', !resp.status);
                        if (resp.status) {
                            $(data.selector).show();
                        }
                    });

                    scope.$apply();
                });
            }
        };
    }

    function stValidPassword() {
        var PASSWORD_FORMATS = [/[^\w\s]+/, /[A-Z]+/, /\w+/, /\d+/];
        return {
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    var status = true;

                    angular.forEach(PASSWORD_FORMATS, function(regex) {
                        status = status && regex.test(value);
                    });

                    ngModel.$setValidity('passwordcharacters', status);
                    return value;
                });
            }
        };
    }

    function stValidFileInput($parse) {
        return {
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                var fileSelected = [],
                fileSize = iAttrs.fileSize,
                fileType = iAttrs.fileType.split(',');

                var model = $parse(iAttrs.ngModel);
                var modelSetter = model.assign;

                scope.$on('st:clearInputTypeFile', function(){
                    ngModel.$setViewValue(null);
                    ngModel.$render();
                    iElement.val('');
                });

                iElement.on('change', function() {
                    scope.$apply(function() {
                        fileSelected = iElement[0].files;
                        modelSetter(scope, iElement[0].files);

                        customValidator(iElement.val());
                    });
                });

                function customValidator(value) {
                    var ouputSize = [];
                    var ouputType = [];

                    for (var i = 0; i < fileSelected.length; i++) {
                        if (fileSelected[i].size > fileSize) {
                            ouputSize.push(fileSelected[i]);
                        }
                        if (fileType.indexOf(fileSelected[i].type) === -1) {
                            ouputType.push(fileSelected[i]);
                        }
                    }

                    ngModel.$setValidity('filesize', ouputSize.length === 0);
                    ngModel.$setValidity('filetype', ouputType.length === 0);

                    return value;
                }
            }
        };
    }

    function stSubmit() {
        return {
            replace: true,
            transclude: true,
            template: '<button>' +
            '<ng-transclude></ng-transclude>' +
            '<div class="circle fade-animation" ng-if="type===\'circle\'"></div>' +
            '<div class="bar fade-animation" ng-if="type===\'bar\'">' +
            '<div class="rect1"></div>' +
            '<div class="rect2"></div>' +
            '<div class="rect3"></div>' +
            '</div>' +
            '</button>',
            link: function(scope, iElement, iAttrs) {
                scope.type = iAttrs.loadingIcon || 'circle';
            }
        };
    }

    function stPageTransition($animate, valueSv) {
        return {
            link: function(scope, iElement, iAttrs) {
                var inClass = '', outClass = '';
                var curAnim = iAttrs.stPageTransition.split(',');

                scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                    var uiView = $('.content-view');

                    if (valueSv.loadCounter > 1) {
                        if (is.desktop()) {
                            var animFrom = 0, animTo = 0;

                            if (toState.name === fromState.name) {
                                animData(0);
                                uiView.eq(0).addClass(inClass);
                                uiView.eq(1).addClass(outClass);
                            } else {
                                for (var i = 0; i < js_setting.sequence_transition_page.length; i++) {
                                    if (js_setting.sequence_transition_page[i].name_state === fromState.name) {
                                        animFrom = i;
                                    }
                                    if (js_setting.sequence_transition_page[i].name_state === toState.name) {
                                        animTo = i;
                                    }
                                }

                                uiView.removeClass(inClass + ' ' + outClass);

                                // Next
                                if (animFrom < animTo){
                                    animData(parseInt(curAnim[0]));
                                    uiView.eq(0).addClass(inClass);
                                    uiView.eq(1).addClass(outClass);
                                }
                                // Prev
                                if (animFrom > animTo){
                                    animData(parseInt(curAnim[1]));
                                    uiView.eq(0).addClass(inClass);
                                    uiView.eq(1).addClass(outClass);
                                }
                            }
                        }

                        $animate.on('enter', uiView.eq(0), function(element, phase){
                            if(phase === 'close'){
                                scope.$broadcast('st:pageTransitionCompleted', '');
                            }
                        });
                    } else {
                        animData(0);
                        uiView.eq(0).addClass(inClass);
                        uiView.eq(1).addClass(outClass);
                    }
                });

                function animData(index){
                    switch(index) {
                        case 0:
                        outClass = 'pt-page-fadeOut';
                        inClass = 'pt-page-fadeIn';
                        break;
                        case 1:
                        outClass = 'pt-page-moveToLeft';
                        inClass = 'pt-page-moveFromRight';
                        break;
                        case 2:
                        outClass = 'pt-page-moveToRight';
                        inClass = 'pt-page-moveFromLeft';
                        break;
                        case 3:
                        outClass = 'pt-page-moveToTop';
                        inClass = 'pt-page-moveFromBottom';
                        break;
                        case 4:
                        outClass = 'pt-page-moveToBottom';
                        inClass = 'pt-page-moveFromTop';
                        break;
                        case 5:
                        outClass = 'pt-page-fade';
                        inClass = 'pt-page-moveFromRight pt-page-ontop';
                        break;
                        case 6:
                        outClass = 'pt-page-fade';
                        inClass = 'pt-page-moveFromLeft pt-page-ontop';
                        break;
                        case 7:
                        outClass = 'pt-page-fade';
                        inClass = 'pt-page-moveFromBottom pt-page-ontop';
                        break;
                        case 8:
                        outClass = 'pt-page-fade';
                        inClass = 'pt-page-moveFromTop pt-page-ontop';
                        break;
                        case 9:
                        outClass = 'pt-page-moveToLeftFade';
                        inClass = 'pt-page-moveFromRightFade';
                        break;
                        case 10:
                        outClass = 'pt-page-moveToRightFade';
                        inClass = 'pt-page-moveFromLeftFade';
                        break;
                        case 11:
                        outClass = 'pt-page-moveToTopFade';
                        inClass = 'pt-page-moveFromBottomFade';
                        break;
                        case 12:
                        outClass = 'pt-page-moveToBottomFade';
                        inClass = 'pt-page-moveFromTopFade';
                        break;
                        case 13:
                        outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                        inClass = 'pt-page-moveFromRight';
                        break;
                        case 14:
                        outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                        inClass = 'pt-page-moveFromLeft';
                        break;
                        case 15:
                        outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                        inClass = 'pt-page-moveFromBottom';
                        break;
                        case 16:
                        outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                        inClass = 'pt-page-moveFromTop';
                        break;
                        case 17:
                        outClass = 'pt-page-scaleDown';
                        inClass = 'pt-page-moveFromRight pt-page-ontop';
                        break;
                        case 18:
                        outClass = 'pt-page-scaleDown';
                        inClass = 'pt-page-moveFromLeft pt-page-ontop';
                        break;
                        case 19:
                        outClass = 'pt-page-scaleDown';
                        inClass = 'pt-page-moveFromBottom pt-page-ontop';
                        break;
                        case 20:
                        outClass = 'pt-page-scaleDown';
                        inClass = 'pt-page-moveFromTop pt-page-ontop';
                        break;
                        case 21:
                        outClass = 'pt-page-scaleDown';
                        inClass = 'pt-page-scaleUpDown pt-page-delay300';
                        break;
                        case 22:
                        outClass = 'pt-page-scaleDownUp';
                        inClass = 'pt-page-scaleUp pt-page-delay300';
                        break;
                        case 23:
                        outClass = 'pt-page-moveToLeft pt-page-ontop';
                        inClass = 'pt-page-scaleUp';
                        break;
                        case 24:
                        outClass = 'pt-page-moveToRight pt-page-ontop';
                        inClass = 'pt-page-scaleUp';
                        break;
                        case 25:
                        outClass = 'pt-page-moveToTop pt-page-ontop';
                        inClass = 'pt-page-scaleUp';
                        break;
                        case 26:
                        outClass = 'pt-page-moveToBottom pt-page-ontop';
                        inClass = 'pt-page-scaleUp';
                        break;
                        case 27:
                        outClass = 'pt-page-scaleDownCenter';
                        inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                        break;
                        case 28:
                        outClass = 'pt-page-rotateRightSideFirst';
                        inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                        break;
                        case 29:
                        outClass = 'pt-page-rotateLeftSideFirst';
                        inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                        break;
                        case 30:
                        outClass = 'pt-page-rotateTopSideFirst';
                        inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                        break;
                        case 31:
                        outClass = 'pt-page-rotateBottomSideFirst';
                        inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                        break;
                        case 32:
                        outClass = 'pt-page-flipOutRight';
                        inClass = 'pt-page-flipInLeft pt-page-delay500';
                        break;
                        case 33:
                        outClass = 'pt-page-flipOutLeft';
                        inClass = 'pt-page-flipInRight pt-page-delay500';
                        break;
                        case 34:
                        outClass = 'pt-page-flipOutTop';
                        inClass = 'pt-page-flipInBottom pt-page-delay500';
                        break;
                        case 35:
                        outClass = 'pt-page-flipOutBottom';
                        inClass = 'pt-page-flipInTop pt-page-delay500';
                        break;
                        case 36:
                        outClass = 'pt-page-rotateFall pt-page-ontop';
                        inClass = 'pt-page-scaleUp';
                        break;
                        case 37:
                        outClass = 'pt-page-rotateOutNewspaper';
                        inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                        break;
                        case 38:
                        outClass = 'pt-page-rotatePushLeft';
                        inClass = 'pt-page-moveFromRight';
                        break;
                        case 39:
                        outClass = 'pt-page-rotatePushRight';
                        inClass = 'pt-page-moveFromLeft';
                        break;
                        case 40:
                        outClass = 'pt-page-rotatePushTop';
                        inClass = 'pt-page-moveFromBottom';
                        break;
                        case 41:
                        outClass = 'pt-page-rotatePushBottom';
                        inClass = 'pt-page-moveFromTop';
                        break;
                        case 42:
                        outClass = 'pt-page-rotatePushLeft';
                        inClass = 'pt-page-rotatePullRight pt-page-delay180';
                        break;
                        case 43:
                        outClass = 'pt-page-rotatePushRight';
                        inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                        break;
                        case 44:
                        outClass = 'pt-page-rotatePushTop';
                        inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                        break;
                        case 45:
                        outClass = 'pt-page-rotatePushBottom';
                        inClass = 'pt-page-rotatePullTop pt-page-delay180';
                        break;
                        case 46:
                        outClass = 'pt-page-rotateFoldLeft';
                        inClass = 'pt-page-moveFromRightFade';
                        break;
                        case 47:
                        outClass = 'pt-page-rotateFoldRight';
                        inClass = 'pt-page-moveFromLeftFade';
                        break;
                        case 48:
                        outClass = 'pt-page-rotateFoldTop';
                        inClass = 'pt-page-moveFromBottomFade';
                        break;
                        case 49:
                        outClass = 'pt-page-rotateFoldBottom';
                        inClass = 'pt-page-moveFromTopFade';
                        break;
                        case 50:
                        outClass = 'pt-page-moveToRightFade';
                        inClass = 'pt-page-rotateUnfoldLeft';
                        break;
                        case 51:
                        outClass = 'pt-page-moveToLeftFade';
                        inClass = 'pt-page-rotateUnfoldRight';
                        break;
                        case 52:
                        outClass = 'pt-page-moveToBottomFade';
                        inClass = 'pt-page-rotateUnfoldTop';
                        break;
                        case 53:
                        outClass = 'pt-page-moveToTopFade';
                        inClass = 'pt-page-rotateUnfoldBottom';
                        break;
                        case 54:
                        outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                        inClass = 'pt-page-rotateRoomLeftIn';
                        break;
                        case 55:
                        outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                        inClass = 'pt-page-rotateRoomRightIn';
                        break;
                        case 56:
                        outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                        inClass = 'pt-page-rotateRoomTopIn';
                        break;
                        case 57:
                        outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                        inClass = 'pt-page-rotateRoomBottomIn';
                        break;
                        case 58:
                        outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                        inClass = 'pt-page-rotateCubeLeftIn';
                        break;
                        case 59:
                        outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                        inClass = 'pt-page-rotateCubeRightIn';
                        break;
                        case 60:
                        outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                        inClass = 'pt-page-rotateCubeTopIn';
                        break;
                        case 61:
                        outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                        inClass = 'pt-page-rotateCubeBottomIn';
                        break;
                        case 62:
                        outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                        inClass = 'pt-page-rotateCarouselLeftIn';
                        break;
                        case 63:
                        outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                        inClass = 'pt-page-rotateCarouselRightIn';
                        break;
                        case 64:
                        outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                        inClass = 'pt-page-rotateCarouselTopIn';
                        break;
                        case 65:
                        outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                        inClass = 'pt-page-rotateCarouselBottomIn';
                        break;
                        case 66:
                        outClass = 'pt-page-rotateSidesOut';
                        inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                        break;
                        case 67:
                        outClass = 'pt-page-rotateSlideOut';
                        inClass = 'pt-page-rotateSlideIn';
                        break;
                    }
                }
            }
        };
    }

    function stDatePicker($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, iElement, iAttrs, ngModel) {
                var curDate = new Date();
                var options = {
                    changeMonth: iAttrs.changeMonth == 'true',
                    changeYear: iAttrs.changeYear == 'true',
                    minDate: iAttrs.dateMin,
                    maxDate: iAttrs.dateMax,
                    yearRange: iAttrs.yearRange || 'c-80:c+10',
                    dateFormat: iAttrs.dateFormat || 'dd/mm/yy',
                    onChangeMonthYear: function(y, m, i) {
                        var date = new Date(y, m - 1, i.selectedDay);

                        scope.$apply(function() {
                            var val = date.format('dd/mm/yy');
                            val += ' ' + date.format('HH:mm:ss');

                            ngModel.$setViewValue(val);
                            ngModel.$render();
                        });
                    },
                    onSelect: function(date, data) {
                        scope.$apply(function() {
                            ngModel.$setViewValue(date);
                        });
                    },
                    onClose: function(selectedDate){
                        scope.$apply(function() {
                            if(!js_frw.check_content(iAttrs.dateRangeTarget) && !js_frw.check_content(iAttrs.dateRangeParam)){
                                angular.element(iAttrs.dateRangeTarget).datepicker( 'option', iAttrs.dateRangeParam, selectedDate);
                            }
                        });
                    }
                };

                iElement.on('keypress paste', function(event) {
                    event.preventDefault();
                });

                $timeout(function(){
                    iElement.datepicker(options);
                },300);
            }
        };
    }

    function stMedia(stEvents) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                var player = iElement[0];
                registerEvents();

                scope.$on(stEvents.media.PLAY, function() {
                    play();
                });

                scope.$on(stEvents.media.PAUSE, function() {
                    pause();
                });

                scope.$on(stEvents.media.STOP, function() {
                    stop();
                });

                scope.$on(stEvents.media.SEEK, function(event, data) {
                    seek(data);
                });

                scope.$on(stEvents.media.VOLUME, function(event, data) {
                    setVolume(data);
                });

                scope.$on(stEvents.media.FULLSCREEN, function(event, data) {
                    console.log('request Fullscreen');
                    if (data) {
                        js_frw.on_full_screen(player);
                    } else {
                        js_frw.exit_full_screen();
                    }
                });

                scope.$on(stEvents.media.ENTER_FULLSCREEN, function(event) {
                    console.log('enter Fullscreen');
                });

                scope.$on(stEvents.media.EXIT_FULLSCREEN, function(event) {
                    console.log('exit Fullscreen');
                });

                function registerEvents() {
                    document.addEventListener("fullscreenchange", onFullscreenChange, false);
                    document.addEventListener("webkitfullscreenchange", onFullscreenChange, false);
                    document.addEventListener("mozfullscreenchange", onFullscreenChange, false);
                    document.addEventListener("MSFullscreenChange", onFullscreenChange, false);
                    player.addEventListener('webkitendfullscreen', onFullscreenChange, false);
                    iElement.on('ended', function(event) {
                        onEnded();
                    });
                }

                function play() {
                    player.play();
                }

                function pause() {
                    player.pause();
                }

                function stop() {
                    player.pause();
                    player.currentTime = 0;
                }

                function seek(value) {
                    player.currentTime = value;
                }

                function setVolume(value) {
                    player.volume = value;
                }

                function onEnded() {
                    scope.$emit(stEvents.media.ENDED);
                }

                function onFullscreenChange() {
                    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                    if (fullscreenElement) {
                        scope.$emit(stEvents.media.ENTER_FULLSCREEN);
                    } else {
                        scope.$emit(stEvents.media.EXIT_FULLSCREEN);
                    }
                }
            }
        };
    }

    function stLoading() {
        return {
            restrict: 'E',
            templateUrl: 'views/shared/partials/loading.tpl',
            replace: true,
            link: function(scope, iElement, iAttrs) {
                iElement.find(iAttrs.loadingType).show();
            }
        };
    }

    function stCustomScrollbar($timeout) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                var o = {
                    selector: iElement[0],
                    theme: iAttrs.scrollbarTheme || 'light',
                    scrollbarPosition: iAttrs.scrollbarPosition || 'inside',
                    mouseWheel: {
                        scrollAmount: 20
                    },
                    scrollButtons: {
                        enable: iAttrs.scrollbarArrow === 'true'
                    }
                };

                scope.$on('st:CustomScrollbarRender', function(){
                    render();
                });

                $timeout(function() {
                    render();
                }, 500);

                function render(){
                    $(o.selector).mCustomScrollbar(o);
                }
            }
        };
    }

    function stRepeatCompleted() {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                var arrEvents = iAttrs.stRepeatCompleted.split(',');
                if (scope.$last) {
                    for (var i = 0; i < arrEvents.length; i++) {
                        scope.$emit(arrEvents[i]);
                    }
                }
            }
        };
    }

    function stPager($state) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                pageParams: '=',
                pageState: '@'
            },
            template: '<div class="custom-pager">' +
            '<a class="prev" ng-if="pageParams.page > 1" ui-sref="{{pageState}}({page: pageParams.page - 1 < 1 ? 1 : pageParams.page - 1})"><<</a>' +
            '<a class="first" ng-if="pageParams.page > 3" ui-sref="{{pageState}}({page: 1})">1</a>' +
            '<a class="dot" ng-if="pageParams.page > 3">...</a>' +
            '<a class="num" ng-class="{active: page === pageParams.page}" ng-href="{{toHref(page)}}" ng-repeat="page in pageVisible">{{page}}</a>' +
            '<a class="dot" ng-if="pageParams.page < pageParams.pageCount - 2">...</a>' +
            '<a class="last" ng-if="pageParams.page < pageParams.pageCount - 2" ui-sref="{{pageState}}({page: pageParams.pageCount})">{{pageParams.pageCount}}</a>' +
            '<a class="next" ng-if="pageParams.page < pageParams.pageCount" ui-sref="{{pageState}}({page: (pageParams.page > pageParams.pageCount) ? pageParams.pageCount : (pageParams.page + 1)})">>></a>' +
            '</div>',
            link: function(scope, iElement, iAttrs) {
                scope.pageParams.page = parseInt(scope.pageParams.page);

                scope.toHref = toHref;

                processPage();

                scope.$on('st:pageRefresh', function(event, data) {
                    scope.pageParams.pageCount = data;
                    processPage();
                });

                function toHref(page){
                    return $state.href(scope.pageState, {page: page});
                };

                function processPage() {
                    scope.pageVisible = [];
                    var pageMin = Math.ceil(Math.min(Math.max(1, scope.pageParams.page - (js_setting.count_page_visible / 2)), Math.max(1, scope.pageParams.pageCount - js_setting.count_page_visible + 1)));
                    var pageMax = Math.ceil(Math.min(scope.pageParams.pageCount, pageMin + js_setting.count_page_visible - 1));
                    for (var i = pageMin; i <= pageMax; i++) {
                        scope.pageVisible.push(i);
                    }
                }
            }
        };
    }

    function stParallax($timeout) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                if (is.desktop()) {
                    scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                        $timeout(function() {
                            iElement.find(iAttrs.stParallax).parallax();
                        }, 1000);
                    });

                    scope.$on('$destroy', function() {
                        iElement.find(iAttrs.stParallax).parallax('disable');
                    });
                }
            }
        };
    }

    function stFancybox($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                if (js_frw.check_content(iAttrs.stFancybox)) {
                    scope.$on('st:fancyBox', function() {
                        fancyBox();
                    });
                } else if (iAttrs.stFancybox === 'static') {
                    fancyBox();
                }

                function fancyBox() {
                    iElement.find('a.fancybox').fancybox({
                        beforeLoad: function() {
                            $rootScope.$broadcast('st:allowInputControls', false);
                        },
                        beforeClose: function() {
                            $rootScope.$broadcast('st:allowInputControls', true);
                        }
                    });
                }
            }
        }
    }

    function stInfinityScroll(){
        return {
            restrict: 'A',
            scope: {
                stInfinityScroll: '&',
                stInfinityBottom: '@'
            },
            link: function (scope, iElement, iAttrs) {
                var win = $(window);
                scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    if(fromState.name !== toState.name){
                        win.off('scroll.infinity');
                    }
                });

                win.on('scroll.infinity', js_frw.adjourn_run(function(event) {
                    var offset = isNaN(scope.stInfinityBottom) ? $(scope.stInfinityBottom).position().top : parseInt(scope.stInfinityBottom);
                    if (win.scrollTop() + win.height() >= $(document).height() - offset) {
                        scope.stInfinityScroll();
                    }
                },500));
            }
        };
    }

    function stFullframe(){
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                var jRes = jRespond([
                    {label: 'handheld',enter: 0,exit: 1023},
                    {label: 'desktop', enter: 1024, exit: 10000}
                    ]);

                jRes.addFunc({
                    breakpoint: 'handheld',
                    enter: function() {
                        $('html').removeClass(iAttrs.stFullframe);
                    }
                });

                jRes.addFunc({
                    breakpoint: 'desktop',
                    enter: function() {
                        $('html').addClass(iAttrs.stFullframe);
                    }
                });
            }
        };
    }

    function stTag(){
        return {
            require: '?ngModel',
            replace:true,
            template: '<div class="custom-tag form-control"><ul><li ng-repeat="key in keys">{{key}}<i class="glyphicon glyphicon-remove" ng-click="remove($index)"></i></li></ul><input type="text" placeholder="Enter để thêm từ khoá" /><div class="clearfix"></div></div>',
            link: function (scope, iElement, iAttrs, ngModel) {
                scope.keys = [];

                ngModel.$render = function() {
                    scope.keys = ngModel.$viewValue;
                };
                scope.remove = remove;

                iElement.find('input').on('keypress', function(event) {
                    if(event.keyCode === 13){
                        var text = $.trim($(this).val());

                        if(scope.keys.indexOf(text) === -1 && text.length > 0){
                            scope.keys.push(text);
                            $(this).val('');
                            ngModel.$setViewValue(scope.keys);
                        }

                        scope.$apply();
                        event.preventDefault();
                    }
                });

                function remove(index){
                    scope.keys.splice(index, 1);
                    ngModel.$setViewValue(scope.keys);
                }
            }
        };
    }

    function stInputNumber(){
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                iElement.on('keypress', function(event) {
                    if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
                        return false;
                    }
                });
            }
        };
    }
})();
(function(){
	'use strict';

	angular
	.module('stRouter', ['ui.router'])
	.provider('routerHelper', routerHelperProvider);

	function routerHelperProvider($stateProvider, $urlRouterProvider) {
		/* jshint validthis:true */
		this.$get = RouterHelper;

		function RouterHelper($state) {
			var hasOtherwise = false;

			return {
				configureStates: configureStates,
				getStates: getStates
			};

			function configureStates(states, otherwisePath) {
				states.forEach(function(state) {
					state.config.params = state.config.params || {};
					state.config.params.lang = js_frw.get_query_string_url(window.location.href, 'lang') || js_setting.language;
					$stateProvider.state(state.state, state.config);
				});
				if (otherwisePath && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise(otherwisePath);
				}
			}

			function getStates() {
				return $state.get();
			}
		}
	}
})();
(function(){
	'use strict';
	angular
	.module('webMyApp')
	.directive('stCropper', stCropper);

	function stCropper($state, $timeout){
		return {
			replace: true,
			templateUrl: 'views/popup/cropper/crop.tpl',
			link: function (scope, iElement, iAttrs) {
				var cropper = null,
				flipCircle = 0,
				fileInput = iElement.find('#cropper-input-file'),
				imgCrop = iElement.find('#cropper-img');

				scope.showButtonCrop = false;
				scope.loading = false;

				scope.getImage = getImage;
				scope.setImage = setImage;
				scope.fileTrigger = fileTrigger;
				scope.zoom = zoom;
				scope.rotate = rotate;
				scope.scale = scale;

				scope.$on('$destroy', function(){
					cropper.cropper('destroy');
				});

				if(iAttrs.cropImage){
					scope.loading = true;
					imgCrop[0].crossOrigin = 'anonymous';
					imgCrop[0].src = iAttrs.cropImage;

					$timeout(function(){
						scope.showButtonCrop = true;
						initCropper();
					},1000);

				} else {
					initCropper();
				}

				function fileTrigger(){
					fileInput.click();
				}

				function zoom(val){
					cropper.cropper('zoom', val);
				}

				function rotate(val){
					if(val){
						cropper.cropper('rotate', val);
					} else {
						cropper.cropper('rotate', 90)
					}
				}

				function scale(val){
					if(val){
						cropper.cropper('scale', val);
					} else {
						flipCircle++;
						switch(flipCircle){
							case 1: cropper.cropper('scale', -1,1); break;
							case 2: cropper.cropper('scale', 1,-1); break;
							case 3: cropper.cropper('scale', -1,-1); break;
							case 4: cropper.cropper('scale', 1,1); flipCircle = 0; break;
						}
					}
				}

				function initCropper(){
					cropper = imgCrop.cropper({
						aspectRatio: iAttrs.cropRatio,
						guides: false
					});
					scope.loading = false;
				}

				function setImage(obj) {
					var URL = window.URL || window.webkitURL,
					blobURL;

					if (URL) {
						blobURL = URL.createObjectURL(obj.files[0]);
						imgCrop.one('built.cropper', function () {
							URL.revokeObjectURL(blobURL);
						}).cropper('reset').cropper('replace', blobURL);

						scope.$apply(function(){
							scope.showButtonCrop = true;
						});
					}
				}

				function getImage(){
					var canvasData = cropper.cropper('getCroppedCanvas', {
						width: iAttrs.cropWidth,
						height: iAttrs.cropHeight
					});

					var imgCropped = canvasData.toDataURL(iAttrs.cropMime);

					scope.$root.$broadcast(iAttrs.cropEvent, {image:imgCropped});
				}
			}
		};
	}
})();
(function(){
	'use strict';

	angular
	.module('webMyApp')
	.service('accountSv', accountSv);

	function accountSv($q, resourceSv, valueSv){
		return {
			getProfile: getProfile,
			setProfile: setProfile,
			isSignedIn: isSignedIn,
			siteLogin: siteLogin,
			siteLogout: siteLogout
		};

		function getProfile(){
			var profileData = js_frw.get_data_local_storage(js_setting.preview_fix + 'stp');
			return profileData;
		}

		function setProfile(data){
			js_frw.add_data_local_storage(js_setting.preview_fix + 'stp', data, js_setting.finish_time_storage);
			js_frw.add_data_local_storage(js_setting.preview_fix + 'stl', true, js_setting.finish_time_storage);
			return data;
		}

		function isSignedIn(){
			var log = js_frw.get_data_local_storage(js_setting.preview_fix + 'stl');
			return log ? true : false;
		}

		function siteLogin(callback){
			var defer = $q.defer();

			if(isSignedIn()){
				defer.resolve(getProfile());
			} else {
				resourceSv.api('views/account/json/profile.json').get(function(resp){
					if(angular.isFunction(callback)){
						callback(resp.data);
					}
					setProfile(resp.data);
					defer.resolve(resp.data);
				});
			}

			return defer.promise;
		}

		function siteLogout(callback){
			resourceSv.api('site-logout').get(function(){
				if(resp.status){
					setProfile(undefined);
					callback();
				}
			});
		}
	}
})();
js_setting.routings.push({
    state: 'register-success',
    config: {
        url: '/register-success.html',
        data: {
            title: 'Register success',
            menuType: 'register'
        },
        templateUrl: 'views/register-success/view.tpl',
        /* @ngInject */
        onEnter: function(){

        },
        /* @ngInject */
        onExit: function(){

        }
    }
});
js_setting.routings.push({
    state: 'notfound',
    config: {
        url: '/page-not-found',
        data: {
            title: '404',
            menuType: '404'
        },
        params:{
        },
        templateUrl: 'views/404/view.tpl'
    }
});
(function(){
	'use strict';

	angular
	.module('webMyApp')
	.directive('stPullMenu', stPullMenu)
	.directive('stDesktopMenu', stDesktopMenu)
	.directive('stMobileMenu', stMobileMenu);

	function stPullMenu(valueSv){
		return {
			link: function(scope, iElement, iAttrs) {
				var openClass = 'is-open',
				closeClass = 'is-close',
				mobileMenu = $('.menu-mob'),
				viewContainer = $('.view-container');

				scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
					if(valueSv.loadCounter > 0){
						close();
					}
				});

				iElement.on('click', function(event) {
					event.preventDefault();
					if($(this).hasClass(openClass)){
						close();
					} else {
						open();
					}
				});

				function open(){
					iElement.removeClass(closeClass).addClass(openClass);
					$('html').addClass('hidden-scroll-y');
					switch(iAttrs.stPullMenu){
						case 'left-side':
						TweenMax.to(viewContainer,0.3,{x:230});
						TweenMax.to(mobileMenu,0.3,{x:0});
						break;
						case 'right-side':
						TweenMax.to(viewContainer,0.3,{x:-230});
						TweenMax.to(mobileMenu,0.3,{x:0});
						break;
						case 'full':
						TweenMax.set(mobileMenu,{visibility:'visible'});
						TweenMax.to(mobileMenu,0.4,{opacity:1});
						TweenMax.staggerTo(mobileMenu.find('>ul>li'),0.5,{opacity:1, x:0, ease:Back.easeOut}, 0.04);
						break;
					}
				}

				function close(){
					iElement.removeClass(openClass).addClass(closeClass);
					$('html').removeClass('hidden-scroll-y');
					switch(iAttrs.stPullMenu){
						case 'left-side':
						TweenMax.to(viewContainer,0.3,{x:0});
						TweenMax.to(mobileMenu,0.3,{x:-230});
						break;
						case 'right-side':
						TweenMax.to(viewContainer,0.3,{x:0});
						TweenMax.to(mobileMenu,0.3,{x:230});
						break;
						case 'full':
						TweenMax.to(mobileMenu,0.4,{delay:0.5, opacity:0, onComplete: function(){
							TweenMax.set(mobileMenu,{clearProps:'opacity x', visibility:'hidden'});
						}});
						TweenMax.staggerTo(mobileMenu.find('>ul>li'),0.5,{opacity:0, x:-200, ease:Back.easeIn}, 0.04);
						break;
					}
				}
			}
		};
	}

	function stDesktopMenu(){
		return {
			link: function(scope, iElement, iAttrs) {
				var li = iElement.find('li'),
				menuDesk = iElement.find('.menu-desk'),
				fadeSpeedEffect = 100,
				subMegaClass = 'mega',
				subListClass = 'list',
				hasSubClass = 'has-sub',
				hoverClass = 'hover',
				activeClass = 'active',
				subCurrent = '';

				showArrow();

				scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
					autoActive();
				});

				li.on('mouseenter', function(){
					$(this).addClass(hoverClass).find('>ul,>div').stop().fadeIn(fadeSpeedEffect);
				}).on('mouseleave', function(){
					$(this).removeClass(hoverClass).find('>ul,>div').stop().fadeOut(fadeSpeedEffect);
				});

				function showArrow(){
					li.has('ul,div').addClass(hasSubClass).find('>a').append('<i>&nbsp</i>');
				}

				function autoActive(){
					var liActive = li.filter('.'+activeClass);
					liActive.parents('li').addClass(activeClass);
				}
			}
		};
	}

	function stMobileMenu(){
		return {
			link: function(scope, iElement, iAttrs) {

			}
		};
	}
})();
var homeCtrl = (function() {
    'use strict';

    angular
    .module('webMyApp')
    .controller('homeCtrl', homeCtrl);

    function homeCtrl($scope, $state, $stateParams, valueSv, stPopupSv, getData1, getData2) {
        /* jshint validthis: true */
        var home = this;
        home.queryParams = $stateParams;
        home.queryParams.pageCount = 10;

        home.popupVideo = popupVideo;
        home.popupGalleryImage = popupGalleryImage;
        home.popupGalleryInline = popupGalleryInline;

        function popupVideo() {
            js_frw.open_popup({
                items: {
                    src: 'http://www.youtube.com/watch?v=7eo8XpT4CmM'
                },
                type: 'iframe',
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        }
                    },
                    srcAction: 'iframe_src',
                }
            });
        }

        function popupGalleryImage(){
            var imageData = [{
                title: 'Hình 1 <span>abc</span>',
                src: 'http://placehold.it/800x800'
            }, {
                title: 'Hình 2',
                src: 'http://placehold.it/800x600'
            }];

            js_frw.open_popup({
                items: imageData,
                type: 'image',
                effect: 'custom-zoom',
                image: {
                    cursor: null,
                    tError: '<a href="%url%">The image</a> could not be loaded.',
                    markup:
                    '<div class="custom-popup custom-popupAnimation" style="max-width:800px">' +
                    '<div class="pop-head">' +
                    '<h3>&nbsp;</h3>' +
                    '</div>' +
                    '<button class="mfp-close"></button>' +
                    '<div class="pop-content">' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '<div class="clearfix"></div>' +
                    '</div>' +
                    '</div>',
                    verticalFit: true
                }
            });
        }

        function popupGalleryInline(){
            var inlineData = [{
                username: 'Tin Trần',
                userLocation: 'Nha Trang'
            },{
                username: 'Đình Quí',
                userLocation: 'Ninh Hòa'
            },{
                username: 'Minh Toàn',
                userLocation: 'Ninh Hòa'
            }];

            js_frw.open_popup({
                items:inlineData,
                effect: 'custom-zoom',
                inline: {
                    markup:
                    '<div class="custom-popup custom-popupAnimation" style="max-width:800px">' +
                    '<div class="pop-content">' +
                    '<h2 class="mfp-username"></h2>' +
                    '<div class="mfp-userLocation"></div>' +
                    '<div>' +
                    '</div>'
                }
            });
        }

        console.log('pageData1', getData1);
        console.log('pageData2', getData2);
    }

    var resolve = {
        /* @ngInject */
        animationIn: function(stDelaySv) {
            return stDelaySv.delay(js_setting.animate_delay);
        },
        /* @ngInject */
        preload: function(stPreloadSv) {
            return stPreloadSv.load(js_setting.load_preview_resource);
        },
        /* @ngInject */
        getData1: function($q){
            return $q.when('page');
        },
        /* @ngInject */
        getData2: function($q){
            return $q.when('home');
        }
    };

    return {
        resolve: resolve
    };
})();
(function(){
	'use strict';

	angular
	.module('webMyApp')
	.directive('home', home);

	function home(){
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {

			}
		};
	}
})();
js_setting.routings.push({
    state: 'home',
    config: {
        url: '/?code&page',
        data: {
            title: 'Home',
            menuType: 'home'
        },
        params:{
            page: '1'
        },
        templateUrl: 'views/home/view.tpl',
        controller: 'homeCtrl',
        controllerAs: 'home',
        //resolve: angular.extend(homeCtrl.resolve || {}, appRouter.resolve || {}),
        resolve: homeCtrl.resolve,
        /* @ngInject */
        onEnter: function(){

        },
        /* @ngInject */
        onExit: function(){

        }
    }
});
var aboutCtrl = (function(){
	'use strict';

	angular
	.module('webMyApp')
	.controller('aboutCtrl', aboutCtrl);

	function aboutCtrl($scope, $stateParams, getData){
		/* jshint validthis: true */
		var about = this;
		about.queryParams = $stateParams;

		console.log('pageData', getData);
	}

	var resolve = {
		/* @ngInject */
		animationIn: function(stDelaySv) {
			return stDelaySv.delay(js_setting.animate_delay);
		},
		/* @ngInject */
		preload: function(stPreloadSv) {
			return stPreloadSv.load(js_setting.load_preview_resource);
		},
        /* @ngInject */
        getData: function($q, $timeout){
            var output = {
                a: '',
                b: ''
            };

            return $q.when()
            .then(function(){
                var defer = $q.defer();
                $timeout(function () {
                    output.a = 'page';
                    defer.resolve();
                }, 0);
                return defer.promise;
            })
            .then(function(){
                var defer = $q.defer();
                $timeout(function () {
                    output.b = 'about';
                    defer.resolve(output);
                }, 0);
                return defer.promise;
            });
        }
	};

	return {
		resolve : resolve
	};
})();
js_setting.routings.push({
	state: 'about',
	config: {
		url: '/about',
		data: {
			title: 'About',
			menuType: 'about'
		},
		params:{
		},
		templateUrl: 'views/about/view.tpl',
		controller: 'aboutCtrl',
		controllerAs: 'about',
		//resolve: angular.extend(aboutCtrl.resolve || {}, appRouter.resolve || {}),
		resolve: aboutCtrl.resolve,
		/* @ngInject */
		onEnter: function(){

		},
		/* @ngInject */
		onExit: function(){

		}
	}
});
var contactCtrl = (function(){
	'use strict';

	angular
	.module('webMyApp')
	.controller('contactCtrl', contactCtrl);

	function contactCtrl($scope, $stateParams, resourceSv, getData){
		/* jshint validthis: true */
		var contact = this;
		contact.queryParams = $stateParams;

		contact.submit = submit;

		init_dataFormZz();

		function init_dataFormZz(){
			contact.lockForm = false;
			contact.submitted = false;

			contact.formData = {
				firstname: 'Tin',
				lastname: 'Trần',
				gender: 'male',
				phone: '0972989392',
				email: 'tindl88@gmail.com',
				attachment: null,
				message:'Nội dung thông điệp nhập vào đây đây',
				created: new Date().getTime() / 1000
			};
		}

		function submit(isValid) {
			contact.submitted = true;

			if(!contact.lockForm && isValid){
				contact.lockForm = true;

				//uploadFile(saveInfo);
				saveInfo();
			}

			function uploadFile(callback){
				var count = 0;
				var fileUploaded = [];
				for (var i = 0; i < contact.formData.attachment.length; i++) {
					var fd = new FormData();
					fd.append('uploadFile', contact.formData.attachment[i]);

					resourceSv.api('contactupload')
					.upload({}, fd, function(resp){
						count++;

						fileUploaded.push(resp[0]);

						if(count === contact.formData.attachment.length){
							contact.formData.attachment = fileUploaded;

							if(typeof callback === 'function'){
								callback();
							}

							$scope.$broadcast('st:trim_input_file', '');
						}
					});
				}
			}

			function saveInfo(){
				resourceSv.api('contacts')
				.save({},contact.formData, function(resp){
					init_dataFormZz();
				});
			}
		}

		console.log('pageData', getData);
	}

	var resolve = {
		/* @ngInject */
		animationIn: function(stDelaySv) {
			return stDelaySv.delay(js_setting.animate_delay);
		},
		/* @ngInject */
		preload: function(stPreloadSv) {
			return stPreloadSv.load(js_setting.load_preview_resource);
		},
        /* @ngInject */
        getData: function($q, $timeout){
            var output = {
                a: '',
                b: ''
            };

            return $q.when()
            .then(function(){
                var defer = $q.defer();
                $timeout(function () {
                    output.a = 'page';
                    defer.resolve();
                }, 0);
                return defer.promise;
            })
            .then(function(){
                var defer = $q.defer();
                $timeout(function () {
                    output.b = 'contact';
                    defer.resolve(output);
                }, 0);
                return defer.promise;
            });
        }
	};

	return {
		resolve : resolve
	};
})();
js_setting.routings.push({
	state: 'contact',
	config: {
		url: '/contact',
		data: {
			title: 'Contact',
			menuType: 'contact'
		},
		params:{
		},
		templateUrl: 'views/contact/view.tpl',
		controller: 'contactCtrl',
		controllerAs: 'contact',
		//resolve: angular.extend(contactCtrl.resolve || {}, appRouter.resolve || {}),
		resolve: contactCtrl.resolve,
		/* @ngInject */
		onEnter: function(){

		},
		/* @ngInject */
		onExit: function(){

		}
	}
});