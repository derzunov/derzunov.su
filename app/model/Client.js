
/*
 * Created by Erzunov on 21.07.2015.
 */

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', './DefaultModel'], function(Backbone, $, DefaultModel) {
    var Client;
    Client = (function(_super) {
      __extends(Client, _super);

      function Client() {
        return Client.__super__.constructor.apply(this, arguments);
      }

      Client.prototype.defaults = {
        lc: 'en'
      };

      Client.prototype.initialize = function() {
        window.client = this;
        if (localStorage) {
          if (localStorage.getItem('lc')) {
            return this.set('lc', localStorage.getItem('lc'));
          }
        }
      };

      Client.prototype.setLang = function(lc) {
        this.set('lc', lc);
        if (localStorage) {
          return localStorage.setItem('lc', lc);
        }
      };

      return Client;

    })(DefaultModel);
    return Client;
  });

}).call(this);
