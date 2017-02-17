/* 
 * Name: collections.js
 * Description: Object, Array & Loop helpers for Handlebars
 * Dependencies: lodash
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.7.0
 * Date:       2017-02-17
 * 
 */

define([
  'lodash'
], function(_) {

  return {
    /* ------------------------
     *
     * ARRAY HELPERS
     *
     */
    join: function(arr, sep) {
      if(arr) {
        sep = typeof sep==='string' ? sep : ' ';
        return arr.join(sep);
      }
      else {
        return '';
      }
    }, // helper: join

    limit: function(arr, limit) {
      return arr.slice(0, limit);
    }, // helper: limit

    sort: function(arr, key) {
      if(typeof key==='string') {
        return _.sortBy(arr, key.split(','));
      }
      else {
        return _.sortBy(arr);
      }
    }, // helper: sort

    unique: function(arr, key) {
      return _.uniqBy(arr, function(x) {
        return key.split(',').map(function(k) {
          return x[k];
        }).join('-');
      });
    }, // helper: unique

    /* ------------------------
     *
     * LOOPS
     *
     */
    for: function(from, to, incr, block) {
      var accum = '';
      for(var i = from; i < to; i += incr)
          accum += block.fn(i);
      return accum;
    }, // helper: for

    times: function(n, block) {
      var accum = '';
      for(var i = 0; i < n; ++i)
          accum += block.fn(i);
      return accum;
    }, // helper: times

    /* ------------------------
     *
     * MISC
     *
     */
    // stringify
    stringify: function(obj) {
      return JSON.stringify(obj);
    } // helper: stringify
  };

}); // define
