/* 
 * Name: operators.js
 * Description: Operator & Conditional helpers for Handlebars
 * Dependencies:
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.2.0
 * Date:       2016-09-29
 * 
 */

define({
  // logical operator helpers (use with `if`)
  // Found here: http://stackoverflow.com/a/31632215/5166702
  and: function(v1, v2) {
    return v1 && v2;
  },
  empty: function(obj) {
    return Object.keys(obj).length===0;
  },
  eq: function(v1, v2) {
    return v1 === v2;
  },
  gt: function(v1, v2) {
    return v1 > v2;
  },
  in: function(haystack, needle) {
    if(typeof haystack!=='object') {
      return false;
    }
    if(Array.isArray(haystack)) {
      return haystack.indexOf(needle)>=0;
    }
    else {
      return Object.keys(haystack).indexOf(needle)>=0;
    }
  },
  is_a: function(obj, objType) {
    switch(objType) {
      case 'array':
        return Array.isArray(obj);
      case 'range':
        return (Array.isArray(obj) && obj.length===2 && Number.isFinite(obj[0]) && Number.isFinite(obj[1]));
      default:
        return (typeof obj===objType || obj===objType);
    }
  },
  lt: function(v1, v2) {
    return v1 < v2;
  },
  lte: function(v1, v2) {
    return v1 <= v2;
  },
  gte: function(v1, v2) {
    return v1 >= v2;
  },
  ne: function(v1, v2) {
    return v1 !== v2;
  },
  or: function(v1, v2) {
    for(var i=0, len=arguments.length-1; i<len; i++) {
      if(arguments[i]) {
        return true;
      }
    }
    return false;
  }
}); // define
