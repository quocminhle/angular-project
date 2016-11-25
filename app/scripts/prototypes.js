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


