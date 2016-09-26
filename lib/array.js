/* 
 * Name: array.js
 * Description: Array & Loop helpers for Handlebars
 * Dependencies: 
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.1.0
 * Date:       2016-09-26
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

  // times
  times: function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
  } // helper: times
}); // define
