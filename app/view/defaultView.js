(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', '../helper/DI'], function(Backbone, DI) {
    var defaultView;
    defaultView = (function(_super) {
      __extends(defaultView, _super);

      function defaultView() {
        return defaultView.__super__.constructor.apply(this, arguments);
      }

      defaultView.prototype.di = function() {
        return new DI();
      };

      defaultView.prototype.render = function() {
        this.$el.html(this.template());
        return this;
      };

      return defaultView;

    })(Backbone.View);
    return defaultView;
  });

}).call(this);
