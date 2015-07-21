#/**
# * Created by Erzunov on 14.07.2015.
# */
#/*
#* Точка входа инициализация всего.
#* */

define(
    ['backbone'
    'rivets'
    'jquery'
    '../app/helper/DI'
    '../app/router'
    '../app/view/ViewsInit',

    '../app/model/Localization'
    '../app/model/Client'

    '../app/helper/rivetsAdapters',
    '../app/helper/rivetsBinders',
    '../app/helper/rivetsFormatters',
    'bootstrap'], #вконце вещи которые просто реквайрятся, но ничего не отдают в переменную
    (
        Backbone
        Rivets
        $
        DI
        Router
        ViewsInit
        Localization
        Client

    ) ->


        di = new DI()

        window.di = di

        di.set('rivets', Rivets)

        ###
        # * NEWS ---------------------------------------------------------
        ###

        di.set('loc', () ->
            new Localization()
        )
        di.set('client', () ->
            new Client()
        )


        ### Инициализируем все вьюхи, плюс получаем набор этих самых вьюх ###
        views = ViewsInit()

        # Pagelist пригодится для скрытия всех остальных страниц при открытии нужной
        di.set 'pagesList', views.pageList
        di.set 'defaultViews', views.defaultViews


        di.set 'router', new Router()

        Backbone.history.start()


)

