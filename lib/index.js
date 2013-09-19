var helpers = {};

module.exports.help = function( Handlebars ){
	for( var name in helpers ){
		Handlebars.registerHelper( name, helpers[name] );
	}
};