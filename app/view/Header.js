(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './defaultView'], function(Backbone, DefaultView) {
    var HeaderView;
    HeaderView = (function(_super) {
      __extends(HeaderView, _super);

      function HeaderView() {
        return HeaderView.__super__.constructor.apply(this, arguments);
      }

      HeaderView.prototype.el = '#Header_wrapper';

      HeaderView.prototype.template = function() {
        return $('#Header').html();
      };

      HeaderView.prototype.events = {
        'click .js-top-menu-toggle': 'toggleMenu',
        'click .js-go-to-skills': 'toSkills',
        'click .js-go-to-history': 'toHistory',
        'click .js-go-to-contacts': 'toContacts',
        'click .js_language_toggle': 'langToggle'
      };

      HeaderView.prototype.initialize = function() {
        this.render();
        this.di().get('rivets').bind(this.el, {
          c: this.di().get('client')
        });
        this.di().set('header', this);
        return this.client = this.di().get('client');
      };

      HeaderView.prototype.toggleMenu = function(event) {
        var $topMenu;
        event.preventDefault();
        $topMenu = $('.js-top-menu');
        return $topMenu.toggleClass('top-menu_list-hidden');
      };

      HeaderView.prototype.toTop = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-skills', 500);
      };

      HeaderView.prototype.toSkills = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-skills', 500);
      };

      HeaderView.prototype.toHistory = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-history', 500);
      };

      HeaderView.prototype.toContacts = function(event) {
        event.preventDefault();
        return $(document.body).scrollTo('#section-contacts', 500);
      };

      HeaderView.prototype.langToggle = function(event) {
        event.preventDefault();
        if ((this.client.get('lc')) === 'ru') {
          return this.client.setLang('en');
        } else if ((this.client.get('lc')) === 'en') {
          return this.client.setLang('es');
        } else {
          return this.client.setLang('ru');
        }
      };

      return HeaderView;

    })(DefaultView);
    return HeaderView;
  });

}).call(this);
