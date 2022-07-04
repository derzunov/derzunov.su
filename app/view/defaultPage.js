(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './defaultView'], function(Backbone, DefaultView) {
    var Page;
    Page = (function(_super) {
      __extends(Page, _super);

      function Page() {
        return Page.__super__.constructor.apply(this, arguments);
      }

      Page.prototype.pageName = 'default';

      Page.prototype._show = function() {
        $(this.el).removeClass('g-hidden');
        $(this.el).addClass('is-shown');
        if ($('#menu-item-' + this.pageName + ' a').length) {
          return this.di().get('header').activateMenuItem($('#menu-item-' + this.pageName + ' a'));
        }
      };

      Page.prototype._hide = function() {
        $(this.el).addClass('g-hidden');
        return $(this.el).removeClass('is-shown');
      };

      return Page;

    })(DefaultView);
    return Page;
  });

}).call(this);
