(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', '../helper/DI'], function(Backbone, $, DI) {
    var DefaultModel;
    DefaultModel = (function(_super) {
      __extends(DefaultModel, _super);

      function DefaultModel() {
        return DefaultModel.__super__.constructor.apply(this, arguments);
      }

      DefaultModel.prototype.initialize = function() {
        return this.di = new DI();
      };

      return DefaultModel;

    })(Backbone.Model);
    return DefaultModel;
  });

}).call(this);
