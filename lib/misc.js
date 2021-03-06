/* 
 * Name: misc.js
 * Description: Miscellaneous helpers for handlebars
 * Dependencies: lodash
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.8.0
 * Date:       2017-02-20
 * 
 */

define([
  'lodash'
], function(_) {

  /* ------------------------
   *
   * CONVENIENCE HELPERS
   *
   */
  return {
    randomInt: function() {
      return _.random.apply(null, Array.prototype.slice.call(arguments).filter(function(n) { return typeof n==='number'; }));
    } // helper: randomInt
  };
}); // define
