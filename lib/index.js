var helpers = {
	// string
	lowercase: require('./helpers/lowercase.js'),
	uppercase: require('./helpers/uppercase.js'),
	replace: require('./helpers/replace.js'),
	encode: require('./helpers/encode.js'),
	// collection
	length: require('./helpers/length.js'),
	contains: require('./helpers/contains.js'),
	first: require('./helpers/first.js'),
	last: require('./helpers/last.js'),
	between: require('./helpers/between.js'),
	range: require('./helpers/range.js'),
	where: require('./helpers/where.js'),
	shuffle: require('./helpers/shuffle.js'),
	reverse: require('./helpers/reverse.js'),
	join: require('./helpers/join.js'),
	// date
	ago: require('./helpers/ago.js'),
	formatDate: require('./helpers/formatDate.js'),
	// equality
	equal: require('./helpers/equal.js'),
	greater: require('./helpers/greater.js'),
	less: require('./helpers/less.js'),
	// numbers
	times: require('./helpers/times.js'),
	add: require('./helpers/add.js'),
	subtract: require('./helpers/subtract.js'),
	multiply: require('./helpers/multiply.js'),
	divide: require('./helpers/divide.js')
};

module.exports.help = function( Handlebars ){
	for( var name in helpers ){
		Handlebars.registerHelper( name, helpers[name] );
	}
};

module.exports.helpers = helpers;
