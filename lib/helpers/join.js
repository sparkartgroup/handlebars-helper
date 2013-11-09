module.exports = function( collection, separator ){
	separator = ( typeof separator === 'string' ) ? separator : '';
	// if the collectoin is an array this is easy
	if( collection.join ) return collection.join( separator );
	// if it's not we actually have to write code.
	var result = '';
	for( var property in collection ){
		if( collection.hasOwnProperty(property) ){
			result += collection[property] + separator;
		}
	}
	return result.slice( 0, -separator.length );
};