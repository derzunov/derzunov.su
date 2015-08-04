
define([ 'backbone', './defaultPage', 'jquery.scrollTo', 'in-viewport' ], ( Backbone, DefaultPage ) ->
	class Page1 extends DefaultPage

		el: "#Page1_wrapper"
		template: () -> return $('#Page1').html()

		events: {
			'click .js-main-first-down-next': 'downNext'
			'click .right ': 'right'
			'click .left ': 'left'
		},

		initialize:  () ->
            isMSIE = !!(navigator.userAgent.indexOf('MSIE') + 1)

            @render()
            @di().get( 'rivets' ).bind( @el, {c: @di().get( 'client' )} )

            $( document ).ready(() ->
                $('.carousel-style').height($(window).height())
                $('.js_carousel').carousel({
                    interval: 12000
                })

                if( isMSIE )
                    $('#myModal').modal('show')
            )

            $( window ).on 'resize', () ->
              $('.carousel-style').height($(window).height())

            this.$el.find('.feature__img').inViewport({
                callbackIn: ( $element ) ->

                    setTimeout( () ->
                        $element.removeClass('__before-seen')
                        $element.removeClass('__before-seen__right')
                        $element.addClass('__have-seen')
                    ,
                    100)
            })

            this.$el.find('.js_feature_image').inViewport({
                callbackIn: ( $element ) ->
                    $element.removeClass('__before-seen__right');
                    $element.removeClass('__before-seen');
                    $element.addClass('__have-seen');
            })


		downNext: ( event ) ->
			event.preventDefault()
			$( document.body ).scrollTo('#section-skills', 500)


		right: ( event ) ->
			event.preventDefault()
			$('.carousel-style').carousel( 'next' )


		left: ( event ) ->
			event.preventDefault()
			$('.carousel-style').carousel( 'prev' )



	return Page1;
);