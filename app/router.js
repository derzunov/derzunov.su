/**
 * Created by Erzunov on 16.02.2015.
 */
define(['backbone'], function() {
	var Router = Backbone.Router.extend({

		initialize: function() {
			this.container = window.DI.getContainer();
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

			_.each(this.container.pagesList, function( page ) {
				page._hide();
			});

			if ( this.container.pagesList['Page' + pageId ] != null ) {
				this.container.pagesList['Page' + pageId ]._show();
			}
		},

		post: function( id ) {
			_.each(this.container.pagesList, function( page ) {
				page._hide();
			});

			if (!id) {
				this.container.pagesList['PageTestapi' ]._show();
			} else {
				this.container.pagesList['PageTestapiitem' ]._show();
			}


		}

	});

	return Router;
});
