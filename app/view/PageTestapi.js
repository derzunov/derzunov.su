/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage', './PostView', '../models/compiled/Post' ],
	function( Backbone,
			  DefaultPage,
			  PostView,
			  Post
	) {
	var PageTestapi = DefaultPage.extend({

		el: $("#PageTestapi_wrapper"), // DOM элемент widget'а
		template: _.template($('#PageTestapi').html()),

		initialize: function() {
			this.render();
			var postModel = new Post({
					title: 'Одиночный пост',
					content: ' Просто один пост, созданный во вьюхе страницы и отрендереный отсюда же. Надо теперь создать вьюху коллекции и забиндить все.' }),
			postView = new PostView({model: postModel});

			this.$el.append( postView.render().el );
		}

	});
	return PageTestapi;
});