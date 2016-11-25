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