(function(e){if("function"==typeof bootstrap)bootstrap("handlebars_helper",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeHandlebarshelper=e}else"undefined"!=typeof window?window.handlebarshelper=e():global.handlebarshelper=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./lib');
},{"./lib":9}],2:[function(require,module,exports){
module.exports = function( collection, item, options ){
	for( var prop in collection ){
		if( collection.hasOwnProperty( prop ) ){
			if( collection[prop] == item ) return options.fn();
		}
	}
	return options.inverse();
};
},{}],3:[function(require,module,exports){
module.exports = function( collection, count, options ){
	options = options || count;
	count = ( typeof count === 'number' ) ? count : 1;
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[i] );
		if( i + 1 == count ) return result;
	}
};
},{}],4:[function(require,module,exports){
module.exports = function( collection, count, options ){
	options = options || count;
	count = ( typeof count === 'number' ) ? count : 1;
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[collection.length-(i+1)] );
		if( i + 1 == count ) return result;
	}
};
},{}],5:[function(require,module,exports){
module.exports = function( collection ){
	if( collection.length ) return collection.length;
	var length = 0;
	for( var prop in collection ){
		if( collection.hasOwnProperty( prop ) ){
			length++;
		}
	}
	return length;
};
},{}],6:[function(require,module,exports){
module.exports = function( string ){
	return ( string || '' ).toLowerCase();	
};
},{}],7:[function(require,module,exports){
module.exports = function( string, to_replace, replacement ){
	return ( string || '' ).replace( to_replace, replacement );
};
},{}],8:[function(require,module,exports){
module.exports = function( string ){
	return ( string || '' ).toUpperCase();
};
},{}],9:[function(require,module,exports){
var helpers = {
	// string
	lowercase: require('./helpers/lowercase.js'),
	uppercase: require('./helpers/uppercase.js'),
	replace: require('./helpers/replace.js'),
	// collection
	length: require('./helpers/length.js'),
	contains: require('./helpers/contains.js'),
	first: require('./helpers/first.js'),
	last: require('./helpers/last.js')
};

module.exports.help = function( Handlebars ){
	for( var name in helpers ){
		Handlebars.registerHelper( name, helpers[name] );
	}
};
},{"./helpers/contains.js":2,"./helpers/first.js":3,"./helpers/last.js":4,"./helpers/length.js":5,"./helpers/lowercase.js":6,"./helpers/replace.js":7,"./helpers/uppercase.js":8}],10:[function(require,module,exports){
handlebars_helper = require('../index.js');
},{"../index.js":1}]},{},[10])(10)
});
;