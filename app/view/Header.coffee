define(
    [ 'backbone', './defaultView' ],
    ( Backbone, DefaultView ) ->
        class HeaderView extends DefaultView

            el: '#Header_wrapper',
            template: () ->
                $( '#Header' ).html()

            events: {
                'click .js-top-menu-toggle': 'toggleMenu'
                'click .js-go-to-skills': 'toSkills'
                'click .js-go-to-history': 'toHistory'
                'click .js-go-to-contacts': 'toContacts'
                'click .js_language_toggle': 'langToggle'
            }

            initialize: () ->
                @render()
                @di().get( 'rivets' ).bind( @el, {c: @di().get( 'client' )} )

                @di().set 'header', @
                @client = @di().get('client');

            toggleMenu: ( event ) ->
                event.preventDefault()
                $topMenu = $('.js-top-menu')
                $topMenu.toggleClass('top-menu_list-hidden')

            toTop: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo('#section-skills', 500)

            toSkills: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo('#section-skills', 500)

            toHistory: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo('#section-history', 500)

            toContacts: ( event ) ->
                event.preventDefault()
                $( document.body ).scrollTo('#section-contacts', 500)

            langToggle: ( event ) ->
                event.preventDefault()

                if (@client.get 'lc') == 'ru'
                    @client.setLang 'en'
                else
                    @client.setLang 'ru'

        return HeaderView;
);