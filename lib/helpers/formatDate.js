var strftime = require('strftime');

module.exports = function( date_string, format ){
	var date = new Date( date_string );
	return strftime( format, date );
};