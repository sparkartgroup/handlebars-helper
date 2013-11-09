var strftimeTZ = require('strftime').strftimeTZ;
	
module.exports = function( date_string, format, offset ){
	offset = ( typeof offset === 'number' ) ? offset : null;
	console.log( offset );
	var date = new Date( date_string );
	return strftimeTZ( format, date, offset );
};