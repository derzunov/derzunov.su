###
 * Created by Erzunov on 08.12.2014.
###

define(
    [
        '$',
        'backbone'],
($, Backbone) ->
    class MockApp extends Backbone.Model

        defaults: {
            scanPercents: 0
            updatePercents: 0
        }

        constructor: () ->
            super
            @client = @registry.acquire('Client')
            window.FakeApp = @

        Close: () ->
            console.log('close');
)