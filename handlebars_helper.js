(function(e){if("function"==typeof bootstrap)bootstrap("handlebars_helper",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeHandlebarshelper=e}else"undefined"!=typeof window?window.handlebarshelper=e():global.handlebarshelper=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./lib');
},{"./lib":11}],2:[function(require,module,exports){
module.exports = function( collection, start, end, options ){
	options = options || end;
	if( typeof start !== 'number' ) return;
	end = ( typeof end !== 'number' ) ? undefined : ( end > 0 )? end + 1 : end;
	collection = collection.slice( start, end );
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[i] );
	}
	return result;
};
},{}],3:[function(require,module,exports){
module.exports = function( collection, item, options ){
	for( var prop in collection ){
		if( collection.hasOwnProperty( prop ) ){
			if( collection[prop] == item ) return options.fn();
		}
	}
	return options.inverse();
};
},{}],4:[function(require,module,exports){
module.exports = function( collection, count, options ){
	options = options || count;
	count = ( typeof count === 'number' ) ? count : 1;
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[i] );
		if( i + 1 == count ) return result;
	}
};
},{}],5:[function(require,module,exports){
module.exports = function( collection, count, options ){
	options = options || count;
	count = ( typeof count === 'number' ) ? count : 1;
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[collection.length-count+i] );
		if( i + 1 == count ) return result;
	}
};
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
module.exports = function( string ){
	return ( string || '' ).toLowerCase();	
};
},{}],8:[function(require,module,exports){
module.exports = function( collection, start, amount, options ){
	options = options || amount;
	if( typeof start !== 'number' ) return;
	var end = ( typeof amount !== 'number' ) ? undefined : start + amount;
	collection = collection.slice( start, end );
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[i] );
	}
	return result;
};
},{}],9:[function(require,module,exports){
module.exports = function( string, to_replace, replacement ){
	return ( string || '' ).replace( to_replace, replacement );
};
},{}],10:[function(require,module,exports){
module.exports = function( string ){
	return ( string || '' ).toUpperCase();
};
},{}],11:[function(require,module,exports){
var helpers = {
	// string
	lowercase: require('./helpers/lowercase.js'),
	uppercase: require('./helpers/uppercase.js'),
	replace: require('./helpers/replace.js'),
	// collection
	length: require('./helpers/length.js'),
	contains: require('./helpers/contains.js'),
	first: require('./helpers/first.js'),
	last: require('./helpers/last.js'),
	between: require('./helpers/between.js'),
	range: require('./helpers/range.js')
};

module.exports.help = function( Handlebars ){
	for( var name in helpers ){
		Handlebars.registerHelper( name, helpers[name] );
	}
};
},{"./helpers/between.js":2,"./helpers/contains.js":3,"./helpers/first.js":4,"./helpers/last.js":5,"./helpers/length.js":6,"./helpers/lowercase.js":7,"./helpers/range.js":8,"./helpers/replace.js":9,"./helpers/uppercase.js":10}],12:[function(require,module,exports){
handlebars_helper = require('../index.js');
},{"../index.js":1}]},{},[12])(12)
});
;