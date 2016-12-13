/* 
 * Name: brainybars.js
 * Description: A collection of useful helpers for handlebars
 * Dependencies: Handlebars
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.5.1
 * Date:       2016-12-13
 * 
 * ------------------------------------------
 *
 * WHAT'S INSIDE?
 *
 * ARRAY & LOOP HELPERS
 * DATE/TIME HELPERS
 * MISCELLANEOUS/CONVENIENCE HELPERS
 * OPERATOR & CONDITIONAL HELPERS
 * STRING HELPERS
 *
 *
 * ------------------------------------------
 *
 */

define([
  'handlebars',
  './lib/collections',
  './lib/datetime',
  './lib/misc',
  './lib/operators',
  './lib/string'
], function(Handlebars, collectionsHelpers, datetimeHelpers, miscHelpers, operatorsHelpers, stringHelpers) {

  [collectionsHelpers, datetimeHelpers, miscHelpers, operatorsHelpers, stringHelpers].forEach(function(helpers) {
    Handlebars.registerHelper(helpers);
  });

  return Handlebars;

}); // define
