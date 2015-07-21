define(
    [ 'backbone', 'jquery', '../helper/DI' ],
    ( Backbone, $, DI )  ->

        class DefaultModel extends Backbone.Model

            initialize: () ->
                @di = new DI()
        return DefaultModel
)