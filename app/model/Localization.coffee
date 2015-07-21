###
 * Created by Erzunov on 21.07.2015.
###
define(
    ['backbone', 'jquery', './DefaultModel'],
    (Backbone, $, cppFunctions, DefaultModel)  ->
        class Client extends DefaultModel
            defaults:
                languageCode: 'ru' # Например, 1 - Русский


            initialize: () ->
                @


)