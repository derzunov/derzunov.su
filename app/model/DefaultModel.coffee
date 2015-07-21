define(
    [ 'backbone', 'jquery', 'cppFunctions', '../helper/DI' ],
    ( Backbone, $, cppFunctions, DI )  ->
        class DefaultModel extends Backbone.Model

            initialize: () ->
                @di = new DI()
)