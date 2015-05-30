/**
 * Create jQuery plugin from class
 * @param {function} Class
 */
function createJQPlugin( Class, name ) {

    var className = Class.toString().match(/^function ([^(]+)/)[1],
        pluginName = className.slice(0,1).toLowerCase() + className.slice(1),
        dataName = name || pluginName;

    $.fn[pluginName] = function(options) {
        var args;
        args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var obj;

            obj = $(this).data( dataName );

            if (!(obj instanceof Class)) {
                obj = new Class( $(this), options );
                $(this).data( dataName, obj );
            }

            if ( obj[options] !== undefined ) {
                return obj[options].apply(obj, args);
            }

            return obj;
        });
    }
}