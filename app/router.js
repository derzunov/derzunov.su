/**
 * Created by Erzunov on 16.02.2015.
 */
define(['backbone'], function() {
	var Router = Backbone.Router.extend({

		initialize: function() {
			this.container = window.DI.getContainer();
		},

		routes: {
			"": "page", // Пустой hash-тэг
			"!/": "page", // Начальная страница
			"!/pages/:page": "page" // Блок ошибки
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
		}

	});

	return Router;
});
