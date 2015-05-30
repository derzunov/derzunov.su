/**
 * Created by Erzunov on 16.02.2015.
 */
define(['backbone'], function() {
	var Router = Backbone.Router.extend({

		initialize: function() {

		},

		routes: {
			"": "page", //
			"!/": "page", //
			"!/pages/:page": "page", //
			"!/post/:id": "post", //
			"!/post": "post" //
		},

		page: function( pageId ) {

			if (!pageId) {
				pageId = 1;
			}

			_.each(window.pagesList, function( page ) {
				page._hide();
			});

			if ( window.pagesList['Page' + pageId ] != null ) {
				window.pagesList['Page' + pageId ]._show();
			}
		},

		post: function( id ) {
			_.each(window.pagesList, function( page ) {
				page._hide();
			});


			if (!id) {
				window.pagesList['PageTestapi' ]._show();
			} else {
				window.pagesList['PageTestapiitem' ]._show();
			}
		}

	});

	return Router;
});
