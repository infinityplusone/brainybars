/* 
 * Name: brainybars.js
 * Description: A collection of useful helpers for handlebars
 * Dependencies: Handlebars
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.8.0
 * Date:       2017-02-20
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
