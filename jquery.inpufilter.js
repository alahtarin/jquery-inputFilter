(function($) { 
    var filter = {
        opts: undefined,
        type: undefined,

        initOpts: function(opts) {
            filter.opts = opts;

            if (opts == undefined) {
                filter.type = 'all';
            } else if (typeof(opts) == 'string') {
                filter.type = opts;
            } else if (typeof(opts) == 'object') {
                filter.type = opts.type;
            } else {
                return false;
            }

            if (filter['f' + filter.type] == undefined) {
                return false;
            } 

            return true;
        },

        initEl: function($el) {
            if ($el.prop('tagName').toLowerCase() != 'input') return;

            $el.on('keypress', {type: filter.type}, filter.onKeyDown);
        },

        onKeyDown: function(e) {
            var key = (event.which) ? event.which : event.keyCode;
            return filter.filter(e.data.type, key);
        },

        filter: function(type, key) {
            return filter['f' + type](key);
        },

        /* filters */

        ftext: function(key) {
            return /^[a-zA-Zа-яА-Я]$/.test(filter._char(key))
        },
        
        fname: function(key) {
            return /^[a-zA-Zа-яА-Я-]$/.test(filter._char(key))
        },

        femail: function(key) {
            return /^[a-zA-Z0-9!#$%&'*+-\/=?^_`~.]$/.test(filter._char(key))
        },

        fnumber: function(key) {
            return /^[0-9]$/.test(filter._char(key))
        },

        fphone: function(key) {
            return /^[0-9-+]$/.test(filter._char(key))
        },

        fall: function(key) {
            return true;
        },

        /* helpers */
        
        _char: function(key) {
            return String.fromCharCode(key);
        }
    };

    $.fn.inputFilter = function(opts) {
        if (filter.initOpts(opts)) {
            return this.each(function() {
                filter.initEl(jQuery(this));
            });   
        } else {
            console.error ('Cannot initialize inputFilter with the given options');
        }
    };
})(jQuery);