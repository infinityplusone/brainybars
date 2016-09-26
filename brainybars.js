/* 
 * Name: brainybars.js
 * Description: A collection of useful helpers for handlebars
 * Dependencies: Handlebars
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.1.0
 * Date:       2016-09-26
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

requirejs.config({
  paths: {
    // these come from bower
    'handlebars':           'bower_components/handlebars/handlebars',
    'lodash':               'bower_components/lodash/dist/lodash.min',
    'lodash-inflection':    'bower_components/lodash-inflection/lib/lodash-inflection',
    'moment':               'bower_components/moment/moment',

    // these come from infinityplusone
    'brainybars':            'bower_components/brainybars/brainybars'
  }
});

define([
  'handlebars',
  './lib/array',
  './lib/datetime',
  './lib/misc',
  './lib/operators',
  './lib/string'
], function(Handlebars, arrayHelpers, datetimeHelpers, miscHelpers, operatorsHelpers, stringHelpers) {

  [arrayHelpers, datetimeHelpers, miscHelpers, operatorsHelpers, stringHelpers].forEach(function(helpers) {
    Handlebars.registerHelper(helpers);
  });

  return Handlebars;

}); // define
