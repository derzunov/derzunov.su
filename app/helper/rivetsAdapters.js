(function() {
  define(['rivets'], function(Rivets) {
    Rivets.adapters[':'] = {
      observe: function(obj, keypath, callback) {
        return obj.on("change:" + keypath, callback);
      },
      unobserve: function(obj, keypath, callback) {
        return obj.off("change:" + keypath, callback);
      },
      get: function(obj, keypath) {
        return obj.get(keypath);
      },
      set: function(obj, keypath, value) {
        return obj.set(keypath, value);
      }
    };
    return Rivets;
  });

}).call(this);
