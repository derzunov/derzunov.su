/**
 * Created by Erzunov on 16.02.2015.
 */

define([ 'backbone', './defaultView' ], function( Backbone, DefaultView ){
	var Page = DefaultView.extend({
		_show: function() {
			$(this.el).removeClass('g-hidden');
			$(this.el).addClass('is-shown');
		},
		_hide: function() {
			$(this.el).addClass('g-hidden');
			$(this.el).removeClass('is-shown');
		}
	});
	return Page;
});
