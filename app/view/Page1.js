(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './defaultPage', 'jquery.scrollTo', 'in-viewport'], function(Backbone, DefaultPage) {
    var Page1;
    Page1 = (function(_super) {
      __extends(Page1, _super);

      function Page1() {
        return Page1.__super__.constructor.apply(this, arguments);
      }

      Page1.prototype.el = "#Page1_wrapper";

      Page1.prototype.template = function() {
        return $('#Page1').html();
      };

      Page1.prototype.events = {
        'click .js-main-first-down-next': 'downNext',
        'click .right ': 'right',
        'click .left ': 'left'
      };

      Page1.prototype.initialize = function() {
        var isMSIE;
        isMSIE = !!(navigator.userAgent.indexOf('MSIE') + 1);
        this.render();
        this.di().get('rivets').bind(this.el, {
          c: this.di().get('client')
        });
        $('.carousel-style').height($(window).height());
        $(document).ready(function() {
          $('.carousel-style').height($(window).height());
          $('.js_carousel').carousel({
            interval: 12000
          });
          if (isMSIE) {
            return $('#myModal').modal('show');
          }
        });
        $(window).on('resize', function() {
          return $('.carousel-style').height($(window).height());
        });
        this.$el.find('.feature__img').inViewport({
          callbackIn: function($element) {
            return setTimeout(function() {
              return $element.addClass('slideUp');
            }, 100);
          }
        });
        return this.$el.find('.js_feature_image').inViewport({
          callbackIn: function($element) {
            return $element.addClass('bigEntrance');
          }
        });
      };

      Page1.prototype.downNext = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-skills', 500);
      };

      Page1.prototype.right = function(event) {
        event.preventDefault();
        return $('.carousel-style').carousel('next');
      };

      Page1.prototype.left = function(event) {
        event.preventDefault();
        return $('.carousel-style').carousel('prev');
      };

      return Page1;

    })(DefaultPage);
    return Page1;
  });

}).call(this);
