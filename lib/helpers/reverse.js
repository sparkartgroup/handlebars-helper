module.exports = function( collection, options ){
	var result = '';
	collection = collection || [];
	for( var i = collection.length - 1; i >= 0; i-- ){
		result += options.fn( collection[i] );
	}
	return result;
};
