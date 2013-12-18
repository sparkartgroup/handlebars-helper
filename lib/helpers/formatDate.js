var strftimeTZ = require('strftime').strftimeTZ;
var newDate = require('new-date');

module.exports = function( date_string, format, offset ){
	offset = ( typeof offset === 'number' ) ? offset : null;
	var date = newDate( date_string );
	return strftimeTZ( format, date, offset );
};