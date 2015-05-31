/**
 * Created by Erzunov on 16.02.2015.
 */
/*
* Точка входа инициализация всего.
* */

define([
		'backbone',
		'rivets',
		'jquery',
		'../app/router',
		'../app/view/ViewsInit',

		'bootstrap'], //вконце вещи которые просто реквайрятся, но ничего не отдают в переменную
	function(Backbone, Rivets, $, Router, ViewsInit ) {

		/*Для хранения всего создаём приватный DI контейнер получаемый по запросу DI.getContainer()*/
		var views,
			router;


		/* Инициализируем все вьюхи, плюс получаем набор этих самых вьюх */
		views = ViewsInit();

		/* Pagelist пригодится для скрытия всех остальных страниц при открытии нужной */
		window.pagesList = views.pageList;
		window.defaulViews = views.defaultViews;
		router = new Router();

		Backbone.history.start();
		console.log("%c Ну-ка нах*й не крути тут ничего!","font-size: 30px; color: red");
});

