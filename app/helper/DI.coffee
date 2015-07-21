#Singletone

define(
    [ 'DDIC' ],
    ( DDIC ) ->
        class DI
            container = new DDIC()
            constructor: () ->
                return container
)

