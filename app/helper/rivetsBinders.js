(function() {
  define(['rivets'], function(Rivets) {
    Rivets.binders['style-bi'] = function(el, value) {
      return el.style.setProperty('background-image', 'url("' + value + '")');
    };
    Rivets.binders['style-*'] = function(el, value) {
      return el.style.setProperty(this.args[0], value);
    };
    return Rivets;
  });

}).call(this);
