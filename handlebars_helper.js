/* Handlebars Helper v0.0.4
   Generated on 2013-11-08 at 23:09:25 */

!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.handlebarshelper=a():"undefined"!=typeof global?global.handlebarshelper=a():"undefined"!=typeof self&&(self.handlebarshelper=a())}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports=a("./lib")},{"./lib":21}],2:[function(a,b){var c=31536e3,d=2592e3,e=86400,f=3600;b.exports=function(a){a=new Date(a);var b=Math.floor((new Date-a)/1e3),g=Math.floor(b/c);return g>1?g+" years ago":(g=Math.floor(b/d),g>1?g+" months ago":(g=Math.floor(b/e),g>1?g+" days ago":(g=Math.floor(b/f),g>1?g+" hours ago":(g=Math.floor(b/60),g>1?g+" minutes ago":Math.floor(b)<=1?"Just now":Math.floor(b)+" seconds ago"))))}},{}],3:[function(a,b){b.exports=function(a,b,c,d){if(d=d||c,"number"==typeof b){c="number"!=typeof c?void 0:c>0?c+1:c,a=a.slice(b,c);for(var e="",f=0;f<a.length;f++)e+=d.fn(a[f]);return e}}},{}],4:[function(a,b){b.exports=function(a,b,c){if("string"==typeof a)return a.search(b)>=0?c.fn():c.inverse();for(var d in a)if(a.hasOwnProperty(d)&&a[d]==b)return c.fn();return c.inverse()}},{}],5:[function(a,b){b.exports=function(a){return encodeURIComponent(a)}},{}],6:[function(a,b){b.exports=function(a,b,c,d){d=d||c,c="exact"===c?!0:!1;var e=c?a===b:a==b;return e?d.fn():d.inverse()}},{}],7:[function(a,b){b.exports=function(a,b,c){c=c||b,b="number"==typeof b?b:1;for(var d="",e=0;e<a.length;e++)if(d+=c.fn(a[e]),e+1==b)return d}},{}],8:[function(a,b){var c=a("strftime").strftimeTZ;b.exports=function(a,b,d){d="number"==typeof d?d:null;var e=new Date(a);return c(b,e,d)}},{strftime:22}],9:[function(a,b){b.exports=function(a,b,c,d){d=d||c,c="equal"===c?!0:!1;var e=c?a>=b:a>b;return e?d.fn():d.inverse()}},{}],10:[function(a,b){b.exports=function(a,b,c){c=c||b,b="number"==typeof b?b:1;for(var d="",e=0;e<a.length;e++)if(d+=c.fn(a[a.length-b+e]),e+1==b)return d}},{}],11:[function(a,b){b.exports=function(a){if(a.length)return a.length;var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b}},{}],12:[function(a,b){b.exports=function(a,b,c,d){d=d||c,c="equal"===c?!0:!1;var e=c?b>=a:b>a;return e?d.fn():d.inverse()}},{}],13:[function(a,b){b.exports=function(a){return(a||"").toLowerCase()}},{}],14:[function(a,b){b.exports=function(a,b,c,d){if(d=d||c,"number"==typeof b){var e="number"!=typeof c?void 0:b+c;a=a.slice(b,e);for(var f="",g=0;g<a.length;g++)f+=d.fn(a[g]);return f}}},{}],15:[function(a,b){b.exports=function(a,b,c){return(a||"").replace(b,c)}},{}],16:[function(a,b){b.exports=function(a,b){for(var c="",d=a.length-1;d>=0;d--)c+=b.fn(a[d]);return c}},{}],17:[function(a,b){var c=function(a){for(var b,c,d=a.length;d;)b=Math.floor(Math.random()*d--),c=a[d],a[d]=a[b],a[b]=c;return a};b.exports=function(a,b){for(var d=c(a),e="",f=0;f<d.length;f++)e+=b.fn(d[f]);return e}},{}],18:[function(a,b){b.exports=function(a,b,c){c=c||b,b="zero"===b?!0:!1;var d,e="";if(b)for(d=0;a>d;d++)e+=c.fn(d);else for(d=1;a>=d;d++)e+=c.fn(d);return e}},{}],19:[function(a,b){b.exports=function(a){return(a||"").toUpperCase()}},{}],20:[function(a,b){b.exports=function(a,b,c,d,e){e=e||d,"number"!=typeof d&&(d=1/0);for(var f=0,g="",h=0;h<a.length;h++)if(a[h][b]===c&&(g+=e.fn(a[h]),f++,f===d))return g;return g}},{}],21:[function(a,b){var c={lowercase:a("./helpers/lowercase.js"),uppercase:a("./helpers/uppercase.js"),replace:a("./helpers/replace.js"),encode:a("./helpers/encode.js"),length:a("./helpers/length.js"),contains:a("./helpers/contains.js"),first:a("./helpers/first.js"),last:a("./helpers/last.js"),between:a("./helpers/between.js"),range:a("./helpers/range.js"),where:a("./helpers/where.js"),shuffle:a("./helpers/shuffle.js"),reverse:a("./helpers/reverse.js"),ago:a("./helpers/ago.js"),formatDate:a("./helpers/formatDate.js"),equal:a("./helpers/equal.js"),greater:a("./helpers/greater.js"),less:a("./helpers/less.js"),times:a("./helpers/times.js")};b.exports.help=function(a){for(var b in c)a.registerHelper(b,c[b])}},{"./helpers/ago.js":2,"./helpers/between.js":3,"./helpers/contains.js":4,"./helpers/encode.js":5,"./helpers/equal.js":6,"./helpers/first.js":7,"./helpers/formatDate.js":8,"./helpers/greater.js":9,"./helpers/last.js":10,"./helpers/length.js":11,"./helpers/less.js":12,"./helpers/lowercase.js":13,"./helpers/range.js":14,"./helpers/replace.js":15,"./helpers/reverse.js":16,"./helpers/shuffle.js":17,"./helpers/times.js":18,"./helpers/uppercase.js":19,"./helpers/where.js":20}],22:[function(a,b){!function(){function a(a){return(a||"").split(" ")}function c(a,b,c){return g(a,b,c)}function d(a,b,c,d){return"number"==typeof c&&null==d&&(d=c,c=void 0),g(a,b,c,{timezone:d})}function e(a,b,c){return g(a,b,c,{utc:!0})}function f(a){return function(b,d,e){return c(b,d,a,e)}}function g(a,b,c,d){d=d||{},b&&!i(b)&&(c=b,b=void 0),b=b||new Date,c=c||o,c.formats=c.formats||{};var e=b.getTime();return(d.utc||"number"==typeof d.timezone)&&(b=h(b)),"number"==typeof d.timezone&&(b=new Date(b.getTime()+6e4*d.timezone)),a.replace(/%([-_0]?.)/g,function(a,f){var h,i;if(2==f.length){if(h=f[0],"-"==h)i="";else if("_"==h)i=" ";else{if("0"!=h)return a;i="0"}f=f[1]}switch(f){case"A":return c.days[b.getDay()];case"a":return c.shortDays[b.getDay()];case"B":return c.months[b.getMonth()];case"b":return c.shortMonths[b.getMonth()];case"C":return j(Math.floor(b.getFullYear()/100),i);case"D":return g(c.formats.D||"%m/%d/%y",b,c);case"d":return j(b.getDate(),i);case"e":return b.getDate();case"F":return g(c.formats.F||"%Y-%m-%d",b,c);case"H":return j(b.getHours(),i);case"h":return c.shortMonths[b.getMonth()];case"I":return j(k(b),i);case"j":var n=new Date(b.getFullYear(),0,1),o=Math.ceil((b.getTime()-n.getTime())/864e5);return j(o,3);case"k":return j(b.getHours(),null==i?" ":i);case"L":return j(Math.floor(e%1e3),3);case"l":return j(k(b),null==i?" ":i);case"M":return j(b.getMinutes(),i);case"m":return j(b.getMonth()+1,i);case"n":return"\n";case"o":return String(b.getDate())+l(b.getDate());case"P":return b.getHours()<12?c.am:c.pm;case"p":return b.getHours()<12?c.AM:c.PM;case"R":return g(c.formats.R||"%H:%M",b,c);case"r":return g(c.formats.r||"%I:%M:%S %p",b,c);case"S":return j(b.getSeconds(),i);case"s":return Math.floor(e/1e3);case"T":return g(c.formats.T||"%H:%M:%S",b,c);case"t":return"	";case"U":return j(m(b,"sunday"),i);case"u":var o=b.getDay();return 0==o?7:o;case"v":return g(c.formats.v||"%e-%b-%Y",b,c);case"W":return j(m(b,"monday"),i);case"w":return b.getDay();case"Y":return b.getFullYear();case"y":var n=String(b.getFullYear());return n.slice(n.length-2);case"Z":if(d.utc)return"GMT";var p=b.toString().match(/\((\w+)\)/);return p&&p[1]||"";case"z":if(d.utc)return"+0000";var q="number"==typeof d.timezone?d.timezone:-b.getTimezoneOffset();return(0>q?"-":"+")+j(Math.abs(q/60))+j(q%60);default:return f}})}function h(a){var b=6e4*(a.getTimezoneOffset()||0);return new Date(a.getTime()+b)}function i(a){var b=0,c=p.length;for(b=0;c>b;++b)if("function"!=typeof a[p[b]])return!1;return!0}function j(a,b,c){"number"==typeof b&&(c=b,b="0"),null==b&&(b="0"),c=c||2;var d=String(a);if(b)for(;d.length<c;)d=b+d;return d}function k(a){var b=a.getHours();return 0==b?b=12:b>12&&(b-=12),b}function l(a){var b=a%10,c=a%100;if(c>=11&&13>=c||0===b||b>=4)return"th";switch(b){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function m(a,b){b=b||"sunday";var c=a.getDay();"monday"==b&&(0==c?c=6:c--);var d=new Date(a.getFullYear(),0,1),e=(a-d)/864e5,f=(e+7-c)/7;return Math.floor(f)}var n;n="undefined"!=typeof b?b.exports=c:function(){return this||(1,eval)("this")}();var o={days:a("Sunday Monday Tuesday Wednesday Thursday Friday Saturday"),shortDays:a("Sun Mon Tue Wed Thu Fri Sat"),months:a("January February March April May June July August September October November December"),shortMonths:a("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"),AM:"AM",PM:"PM",am:"am",pm:"pm"};n.strftime=c,n.strftimeTZ=c.strftimeTZ=d,n.strftimeUTC=c.strftimeUTC=e,n.localizedStrftime=c.localizedStrftime=f;var p=["getTime","getTimezoneOffset","getDay","getDate","getMonth","getFullYear","getYear","getHours","getMinutes","getSeconds"]}()},{}]},{},[1])(1)});