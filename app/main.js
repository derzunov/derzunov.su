(function() {
  define(['backbone', 'rivets', 'jquery', '../app/helper/DI', '../app/router', '../app/view/ViewsInit', '../app/model/Localization', '../app/model/Client', '../app/helper/rivetsAdapters', '../app/helper/rivetsBinders', '../app/helper/rivetsFormatters', 'bootstrap'], function(Backbone, Rivets, $, DI, Router, ViewsInit, Localization, Client) {
    var di, views;
    di = new DI();
    window.di = di;
    di.set('rivets', Rivets);

    /*
     * * NEWS ---------------------------------------------------------
     */
    di.set('loc', function() {
      return new Localization();
    });
    di.set('client', function() {
      return new Client();
    });

    /* Инициализируем все вьюхи, плюс получаем набор этих самых вьюх */
    views = ViewsInit();
    di.set('pagesList', views.pageList);
    di.set('defaultViews', views.defaultViews);
    di.set('router', new Router());
    Backbone.history.start();
    return console.log('%c Ну-ка нах не крути тут ничего!', 'font-size: 30px; color: red');
  });

}).call(this);
