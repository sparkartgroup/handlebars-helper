module.exports = function( string, to_replace, replacement ){
	string = string || '';
	string = string.replace( to_replace, replacement );
	return string;
};