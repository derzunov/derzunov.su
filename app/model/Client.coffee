###
 * Created by Erzunov on 21.07.2015.
###
define(
    ['backbone', 'jquery', './DefaultModel'],
    (Backbone, $, DefaultModel)  ->

        class Client extends DefaultModel
            defaults:
                lc: 'ru' # Language Code

            initialize: () ->
                window.client = @
                if localStorage
                    if localStorage.getItem('lc')
                        @set 'lc', localStorage.getItem('lc')

            setLang: (lc) ->
                @set 'lc', lc
                if localStorage
                    localStorage.setItem('lc', lc)

        return Client
)