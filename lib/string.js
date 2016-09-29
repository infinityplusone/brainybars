/* 
 * Name: string.js
 * Description: String helpers for handlebars
 * Dependencies: lodash, lodash-inflection
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.3.0
 * Date:       2016-09-29
 * 
 */

define([
  'lodash',
  'lodash-inflection'
], function(_) {

  return {
    // capitalize
    capitalize: function(str) {
      return _.capitalize(str);
    }, // capitalize

    // hyphenize
    hyphenize: function(str) {
      return _.kebabCase(str);
    }, // hyphenize

    // lowercase
    lowercase: function(str) {
      return _.lowerCase(str);
    }, // lowercase

    // pluralize
    pluralize: function(str, num) {
      return _.pluralize(str, num);
    }, // pluralize

    // split
    split: function(str, sep) {
      return str.split(sep ? sep : /,\s*/g);
    } // split
  };

}); // define
