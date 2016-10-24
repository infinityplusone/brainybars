/* 
 * Name: collections.js
 * Description: Object, Array & Loop helpers for Handlebars
 * Dependencies: 
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.4.0
 * Date:       2016-10-24
 * 
 */

define({
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

}); // define
