###
 * Created by Erzunov on 21.07.2015.
###
define(
    ['backbone', 'jquery', './DefaultModel'],
    (Backbone, $, DefaultModel)  ->
        
        class Localization extends DefaultModel
            defaults:
                languageCode: 'ru' # Например, 1 - Русский


            initialize: () ->
                @

        return Localization
)