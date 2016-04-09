###
 * Created by Erzunov on 21.07.2015.
###
define(
    ['backbone', 'jquery', './DefaultModel', '../locs/Ru', '../locs/En', '../locs/Es'],
    ( Backbone, $, DefaultModel, ru, en, es )  ->
        class Localization extends DefaultModel

            initialize: () ->
                @set 'languages', {
                    ru: 'Русский'
                    en: 'English'
                    es: 'Espanol'
                }
                @set 'dics', {
                    ru: ru
                    en: en
                    es: es
                }

            localize: ( key, langCode ) ->
                currentDic = @get('dics')[langCode]
                if currentDic and currentDic[key]
                    return currentDic[key]
                else
                    return "no locs for #{key}"

        Localization
)