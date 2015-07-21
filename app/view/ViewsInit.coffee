
define([
    'backbone'
    './Header'
    './Footer'
    './Page1'
]
(   Backbone
    Header
    Footer
    Page1
) ->
    () ->
        return {
            staticViews: {
                Header: new Header()
                Footer: new Footer()
            },
            pageList: {
                Page1: new Page1()
            }
        }

)