var assert = require('assert');
var test = require('tape');
var Handlebars = require('handlebars');
var handlebars_helper = require('../index.js');

handlebars_helper.help( Handlebars );

test( 'HH registers helpers', function( t ){
	t.plan(1);
	t.ok( Handlebars.helpers.replace instanceof Function, 'replace helper is registered' );
});

// String helpers

test( 'lowercase helper', function( t ){
	t.plan(1);
	var tpl = Handlebars.compile('{{lowercase "LIQUID!"}}');
	t.ok( tpl() === 'liquid!', 'makes string lowercase' );
});

test( 'uppercase helper', function( t ){
	t.plan(1);
	var tpl = Handlebars.compile('{{uppercase "brother!"}}');
	t.ok( tpl() === 'BROTHER!', 'makes string uppercase' );
});

test( 'replace helper', function( t ){
	t.plan(1);
	var tpl = Handlebars.compile('{{replace "Liquid Snake" "Liquid" "Solid"}}');
	t.ok( tpl() === 'Solid Snake', 'replaces a string with a string' );
});

// Collection helpers

test( 'length', function( t ){
	t.plan(3);
	var array = [1,2,3];
	var tpl = Handlebars.compile('{{length this}}');
	t.ok( tpl( array ) == 3, 'returns array\'s length' );
	var object = {
		one: 1,
		two: 2,
		three: 3
	};
	t.ok( tpl( object ) == 3, 'returns number of properties in object' );
	var string = 'Metal Gear';
	t.ok( tpl( string ) == 10, 'returns number of characters in string' );
});