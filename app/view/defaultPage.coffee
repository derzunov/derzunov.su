define(
    [ 'backbone', './defaultView' ],
    ( Backbone, DefaultView ) ->
        class Page extends DefaultView

            pageName: 'default'
            
            _show: () ->
                $(this.el).removeClass('g-hidden')
                $(this.el).addClass('is-shown')

                if $( '#menu-item-' + @.pageName + ' a' ).length
                    #todo сделать вместо такого обращения к хэдеру самостоятельный компонент navigate-menu
                    @di().get('header').activateMenuItem $( '#menu-item-' + @.pageName + ' a' )

            _hide: () ->
                $(this.el).addClass('g-hidden')
                $(this.el).removeClass('is-shown')

        return Page
)
