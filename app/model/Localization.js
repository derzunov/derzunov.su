
/*
 * Created by Erzunov on 21.07.2015.
 */

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', './DefaultModel', '../locs/Ru', '../locs/En', '../locs/Es'], function(Backbone, $, DefaultModel, ru, en, es) {
    var Localization;
    Localization = (function(_super) {
      __extends(Localization, _super);

      function Localization() {
        return Localization.__super__.constructor.apply(this, arguments);
      }

      Localization.prototype.initialize = function() {
        this.set('languages', {
          ru: 'Русский',
          en: 'English',
          es: 'Espanol'
        });
        return this.set('dics', {
          ru: ru,
          en: en,
          es: es
        });
      };

      Localization.prototype.localize = function(key, langCode) {
        var currentDic;
        currentDic = this.get('dics')[langCode];
        if (currentDic && currentDic[key]) {
          return currentDic[key];
        } else {
          return "no locs for " + key;
        }
      };

      return Localization;

    })(DefaultModel);
    return Localization;
  });

}).call(this);
