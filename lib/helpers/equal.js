module.exports = function( left, right, exact, options ){
	options = options || exact;
	exact = ( typeof exact === 'boolean' ) ? exact : false;
	var is_equal = exact ? ( left === right ) : ( left == right );
	if( is_equal ) return options.fn();
	return options.inverse();
};