#/**
# * Created by Erzunov on 05.05.2015
# */
define(
    [ 'rivets' ],
    ( Rivets ) ->
        Rivets.adapters[':'] =
            observe: (obj, keypath, callback ) ->
                obj.on "change:" + keypath, callback

            unobserve: (obj, keypath, callback ) ->
                obj.off "change:" + keypath, callback

            get: (obj, keypath ) ->
                obj.get keypath

            set: (obj, keypath, value ) ->
                obj.set keypath, value
        return Rivets
)