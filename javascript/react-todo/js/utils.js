var app = app || {};

(function() {
  'use strict';

  app.Utils = {
    uuid: function() {
      /*jshin bitwis:false*/
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if ([8, 12, 16, 20].indexOf(i) !== -1) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
          .toString(16);
      }
      return uuid;
    },

    pluralize: function(count, word) {
      return count === 1 ? word : word + 's';
    },

    store: function(namespace, data) {
      if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      }
      var store = localStorage.getItem(namespace);
      return (store && JSON.stringify(store)) || [];
    },

    extend: function() {
      var newObj = {};
      for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
          }
        }
      }
      return newObj;
    }
  };
})();