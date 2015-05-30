/**
 * Created by Erzunov on 16.02.2015.
 */
/*
* Точка входа инициализация всего.
* */

define([
		'backbone',
		'rivets',
		'pimple',
		'jquery',
		'../app/router',
		'../app/view/ViewsInit',

		'bootstrap'], //вконце вещи которые просто реквайрятся, но ничего не отдают в переменную
	function(Backbone, Rivets, Pimple, $, Router, ViewsInit ) {

		/*Для хранения всего создаём приватный DI контейнер получаемый по запросу DI.getContainer()*/
		var DI = function() {
			var DIContainer = new Pimple({foundation:'backbone'});
			this.getContainer = function() {
					return DIContainer;
				};
			},
			container,
			views;

		window.DI = new DI();
		container = window.DI.getContainer();

		container.set('rivets', Rivets);

		window.posts = container.get( 'posts' );
		/* Инициализируем все вьюхи, плюс получаем набор этих самых вьюх */
		views = ViewsInit();

		/* Pagelist пригодится для скрытия всех остальных страниц при открытии нужной */
		container.pagesList = views.pageList;
		container.defaulViews = views.defaultViews;
		container.router = new Router();

		Backbone.history.start();
});

