/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage' ], function( Backbone, DefaultPage ) {
	var Page1 = DefaultPage.extend({

		el: $("#Page1_wrapper"), // DOM элемент widget'а
		template: _.template($('#Page1').html()),
		initialize: function () {
			var self = this;
			this.client = window.DI.getContainer().client;
			var rdata = {
				installPercents: self.client.get('installPercents')
			};

			this.client.on('change:installPercents', function(){
				rdata.installPercents = self.client.get('installPercents');
			});
			this.render();
			window.DI.getContainer().rivets.bind($('#Page1_wrapper'), {rdata: rdata});
		}

	});
	return Page1;
});