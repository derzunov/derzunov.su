/**
 * Created by Erzunov on 16.02.2015.
 */

define([ 'backbone' ], function( Backbone ){
	var defaultView = Backbone.View.extend({
		render: function () {
			$( this.el ).html( this.template() );
			return this;
		}
	});
	return defaultView;
});
