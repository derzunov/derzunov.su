(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', './helper/DI'], function(Backbone, DI) {
    var Router;
    Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.initialize = function() {
        this.di = new DI();
        return this.di.set('router', this);
      };

      Router.prototype.routes = {
        "": "page",
        "!/": "page",
        "!/pages/:page": "page"
      };

      Router.prototype.page = function(pageId) {
        if (!pageId) {
          pageId = 1;
        }
        if (pageId !== this.currentPageId) {
          _.each(this.di.get('pagesList'), function(page) {
            return page._hide();
          });
        }
        if (this.di.get('pagesList')['Page' + pageId] !== null) {
          this.di.get('pagesList')['Page' + pageId]._show();
          return this.currentPageId = pageId;
        }
      };

      return Router;

    })(Backbone.Router);
    return Router;
  });

}).call(this);
