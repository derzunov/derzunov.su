#/**
# * Created by Erzunov on 14.07.2015.
# */
define(
    ['backbone', './helper/DI'],
    (Backbone, DI) ->
        class Router extends Backbone.Router

            initialize: () ->
                @di = new DI()
                @di.set( 'router', @ )

            routes: {
                "": "page"
                "!/": "page"
                "!/pages/:page": "page"


            },

            page: ( pageId ) ->
                if (!pageId)
                    pageId = 1

                if ( pageId != @currentPageId )
                    _.each( @di.get('pagesList'), ( page ) ->
                        page._hide()
                    )

                if ( @di.get('pagesList')['Page' + pageId ] != null )
                    @di.get('pagesList')['Page' + pageId ]._show()

                    @currentPageId = pageId


        return Router;
)
