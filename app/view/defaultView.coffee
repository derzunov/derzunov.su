define(
    [ 'backbone', '../helper/DI' ],
    ( Backbone, DI ) ->
        class defaultView extends Backbone.View
            #Get DI container in any view
            di: () ->
                new DI()

            render: () ->
                @$el.html( this.template() )
                return @

        return defaultView;

)