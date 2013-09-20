var assert = require('assert');
var test = require('tape');
var Handlebars = require('handlebars');
var handlebars_helper = require('../index.js');

handlebars_helper.help( Handlebars );

test( 'HH registers helpers', function( t ){
	t.plan(1);
	t.ok( Handlebars.helpers.replace instanceof Function, 'replace helper is registered' );
});