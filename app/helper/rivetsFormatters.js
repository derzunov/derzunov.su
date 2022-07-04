(function() {
  define(['rivets', './DI'], function(Rivets, DI) {
    var di;
    di = new DI();
    Rivets.formatters = {
      eq: function(value, other) {
        return value === other;
      },
      log: function(value) {
        return console.log(value);
      },
      isFalse: function(value) {
        return value === false;
      },
      gt: function(value, comparisson) {
        return (value || value === 0) && value > Number(comparisson);
      },
      lt: function(value, arg) {
        return value < arg;
      },
      prop: function(obj, name) {
        return obj && obj[name];
      },
      isNot: function(value, arg) {
        return value !== arg;
      },
      orEq: function(value, arg1, arg2, arg3) {
        return (value === arg1) || (value === arg2) || (value === arg3);
      },
      andNot: function(value, arg1, arg2, arg3) {
        return (value !== arg1) && (value !== arg2) && (value !== arg3);
      },
      isLength: function(value) {
        return value && value.length > 0;
      },
      isNotLength: function(value) {
        return value && value.length === 0;
      },
      loc: function(langCode, key) {
        return di.get('loc').localize(key, langCode);
      }
    };
    return Rivets;
  });

}).call(this);
