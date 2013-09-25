module.exports = function( collection, count, options ){
	options = options || count;
	count = ( typeof count === 'number' ) ? count : 1;
	var result = '';
	for( var i = 0; i < collection.length; i++ ){
		result += options.fn( collection[collection.length-count+i] );
		if( i + 1 == count ) return result;
	}
};