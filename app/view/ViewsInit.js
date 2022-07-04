(function() {
  define(['backbone', './Header', './Footer', './Page1'], function(Backbone, Header, Footer, Page1) {
    return function() {
      return {
        staticViews: {
          Header: new Header(),
          Footer: new Footer()
        },
        pageList: {
          Page1: new Page1()
        }
      };
    };
  });

}).call(this);
