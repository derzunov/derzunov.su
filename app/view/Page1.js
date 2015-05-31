/**
 * Created by Erzunov on 16.02.2015.
 */
define([ 'backbone', './defaultPage', 'jquery.scrollTo', 'in-viewport' ], function( Backbone, DefaultPage ) {
	var Page1 = DefaultPage.extend({

		el: $("#Page1_wrapper"), // DOM элемент widget'а
		template: _.template($('#Page1').html()),

		events: {
			'click .js-main-first-down-next': 'downNext',
			'click .right ': 'right',
			'click .left ': 'left'
		},

		initialize: function () {
			var self = this,
				isMSIE = !!(navigator.userAgent.indexOf('MSIE') + 1);

			this.render();

			$( document ).ready(function() {
				$('.carousel-style').height($(window).height());
				$('.js_carousel').carousel();

				console.log(isMSIE);
				if( isMSIE ) {

					$('#myModal').modal('show');
				}

			});

			this.$el.find('.feature__img').inViewport({
				callbackIn: function( $element ) {
					setTimeout(function(){
						$element.removeClass('__before-seen');
						$element.removeClass('__before-seen__right');
						$element.addClass('__have-seen');
					}, 100)

				}
			});

			this.$el.find('.js_feature_image').inViewport({
				callbackIn: function( $element ) {
					$element.removeClass('__before-seen__right');
					$element.removeClass('__before-seen');
					$element.addClass('__have-seen');

				}
			})
		},

		downNext: function( event ) {
			event.preventDefault();
			$( document.body ).scrollTo('#section-skills', 500);
		},

		right: function( event ) {
			event.preventDefault();
			$('.carousel-style').carousel( 'next' );
		},

		left: function( event ) {
			event.preventDefault();
			$('.carousel-style').carousel( 'prev' );
		}

	});
	return Page1;
});