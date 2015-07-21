define(
    [ 'backbone', './defaultView' ],
    ( Backbone, DefaultView ) ->
        class FooterView extends DefaultView

            el: '#Footer_wrapper',
            template: () ->
                $( '#Footer' ).html()

            events: {
                'click .js-go-to-top': 'toTop'
                'click .js-go-to-skills': 'toSkills'
                'click .js-go-to-history': 'toHistory'
                'click .js-go-to-contacts': 'toContacts'
            }

            initialize: () ->
                @render()
                @di().get( 'rivets' ).bind( @el, {c: @di().get( 'client' )} )

            toTop: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo 0, 500

            toSkills: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo '#section-skills', 500

            toHistory: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo '#section-history', 500

            toContacts: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo '#section-contacts', 500

        return FooterView;
);