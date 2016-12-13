/* 
 * Name: datetime.js
 * Description: Datetime helpers for Handlebars
 * Dependencies: Handlebars, moment, brain
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.5.1
 * Date:       2016-12-13
 * 
 */

define([
  'moment'
], function(moment) {

  var DATE_FORMATS = {
    // for date and time format options, see: http://momentjs.com/docs/#/displaying/format/
    DATE: 'MMM D, YYYY',                        // Jan 1, 2015
    DATEFULL: 'dddd, MMMM D, YYYY',             // Thursday, January 1, 2015
    DATELONG: 'MMMM D, YYYY',                   // January 1, 2015
    DATESHORT: 'MMM D YYYY',                    // Jan 1 2015
    TIME: 'h:mma',                              // 4:30pm
    DATETIME: 'MMM D, YYYY h:mma',              // Jan 1, 2015 4:30pm
    DATETIMEFULL: 'dddd, MMMM D, YYYY h:mma',   // Thursday, January 1, 2015 4:30pm
    DATETIMELONG: 'MMMM D, YYYY h:mma',         // January 1, 2015 4:30pm
    DATETIMESHORT: 'MMM D YYYY h:mma',          // Jan 1 2015 4:30pm
    DATETIMEISO: 'YYYY-MM-DDTHH:mm',            // 2015-01-01T16:30 (useful for the datetime attr of the <time> element, for ex)
    FROMNOW: 'FROMNOW'                          // this is stupid but it makes the code below simpler :)
  };

  /* ------------------------
   *
   * DATE/TIME HELPERS
   *
   */

  // format an ISO date using Moment.js (http://momentjs.com/)
  // based on https://gist.github.com/stephentcannon/3409103
  // args:
  //    datetime (optional):
  //        must be a valid js date object, or iso date string ex: datetime="2015-02-28T14:35".
  //        if ommitted, default is current datetime
  //    format (optional):
  //        if ommitted, default is DATE_FORMATS.DATETIME

  return {
    dateFormat: function(args) {
      var d = new Date(),
          f = DATE_FORMATS.DATEIME;

      if(args.hash) {
        if(args.hash.datetime) {
          d = args.hash.datetime;
        }
        if(args.hash.format) {
          f = !!DATE_FORMATS[args.hash.format] ? DATE_FORMATS[args.hash.format] : args.hash.format;
        }
      }

      if(f==='FROMNOW') {
        return moment(d).fromNow();
      }
      return moment(d).format(f);
    } // helper: dateFormat
  };

}); // define
