(function() {
  define(['DDIC'], function(DDIC) {
    var DI;
    return DI = (function() {
      var container;

      container = new DDIC();

      function DI() {
        return container;
      }

      return DI;

    })();
  });

}).call(this);
