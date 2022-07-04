(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './defaultView'], function(Backbone, DefaultView) {
    var FooterView;
    FooterView = (function(_super) {
      __extends(FooterView, _super);

      function FooterView() {
        return FooterView.__super__.constructor.apply(this, arguments);
      }

      FooterView.prototype.el = '#Footer_wrapper';

      FooterView.prototype.template = function() {
        return $('#Footer').html();
      };

      FooterView.prototype.events = {
        'click .js-go-to-top': 'toTop',
        'click .js-go-to-skills': 'toSkills',
        'click .js-go-to-history': 'toHistory',
        'click .js-go-to-contacts': 'toContacts'
      };

      FooterView.prototype.initialize = function() {
        this.render();
        return this.di().get('rivets').bind(this.el, {
          c: this.di().get('client')
        });
      };

      FooterView.prototype.toTop = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo(0, 500);
      };

      FooterView.prototype.toSkills = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-skills', 500);
      };

      FooterView.prototype.toHistory = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-history', 500);
      };

      FooterView.prototype.toContacts = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-contacts', 500);
      };

      return FooterView;

    })(DefaultView);
    return FooterView;
  });

}).call(this);
