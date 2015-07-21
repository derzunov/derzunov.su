#/**
# * Created by Erzunov on 05.05.2015
# */
define(
    [ 'rivets', './DI' ],
    ( Rivets, DI ) ->
        di = new DI()
        Rivets.formatters = {

            eq: ( value, other ) ->
                value == other


            log: ( value ) ->
                console.log value

            isFalse: (value) ->
                return value == false

            gt: (value, comparisson) ->
                return (value or value == 0) and value > Number(comparisson)

            lt: (value, arg) ->
                return (value < arg)


            prop:  (obj, name) ->
                return obj and obj[name]

            isNot: (value, arg) ->
                return (value != arg)


            orEq: (value, arg1, arg2, arg3) ->
                return ((value == arg1) or (value == arg2) or (value == arg3))


            andNot: (value, arg1, arg2, arg3) ->
                return ((value != arg1) and (value != arg2) and (value != arg3))

            isLength: ( value ) ->
                value and value.length > 0

            isNotLength: ( value ) ->
                value and value.length == 0

            loc: ( langCode, key  ) ->
                return di.get('loc').localize key, langCode

        }

        return Rivets
)