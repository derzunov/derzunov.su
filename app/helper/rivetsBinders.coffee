#/**
# * Created by Erzunov on 05.05.2015
# */
define(
    [ 'rivets' ],
    ( Rivets ) ->
        Rivets.binders['style-bi'] = ( el, value ) ->
            el.style.setProperty('background-image', 'url("' + value + '")');

        Rivets.binders['style-*'] = (el, value) ->
            el.style.setProperty(this.args[0], value)

        return Rivets
)