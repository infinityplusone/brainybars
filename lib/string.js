/* 
 * Name: string.js
 * Description: String helpers for handlebars
 * Dependencies: lodash, lodash-inflection
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.7.0
 * Date:       2017-02-17
 * 
 */

define([
  'lodash',
  'lodash-inflection'
], function(_, LodashInflection) {

  _.mixin(require('lodash-inflection'));

  return {
    // capitalize
    capitalize: function(str) {
      return _.capitalize(str);
    }, // capitalize

    // concat
    concat: function() {
      return Array.prototype.slice.call(arguments).filter(function(a) { return typeof a==='string' || typeof a==='number'; }).join('');
    }, // concat

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
