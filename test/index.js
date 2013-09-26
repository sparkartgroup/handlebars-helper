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

test( 'contains', function( t ){
	t.plan(4);
	var array = ['Solid', 'Liquid', 'Solidus'];
	var tpl = Handlebars.compile('{{#contains this "Solidus"}}Yup{{else}}Nope{{/contains}}.');
	t.ok( tpl( array ) === 'Yup.', 'renders data within block when item is in array' );
	var array2 = ['Chell', 'GLaDOS', 'Wheatley'];
	t.ok( tpl( array2 ) === 'Nope.', 'renders data within else block when item is not in array' );
	var object = {
		one: 'Solid',
		two: 'Liquid',
		three: 'Solidus'
	};
	t.ok( tpl( object ) === 'Yup.', 'renders data within block when item is in object' );
	var object2 = {
		one: 'Chell',
		two: 'GLaDOS',
		three: 'Wheatley'
	};
	t.ok( tpl( object2 ) === 'Nope.', 'renders data within else block when item is not in object' );
});

test( 'first', function( t ){
	t.plan(2);
	var array = ['Solid', 'Liquid', 'Solidus'];
	var tpl = Handlebars.compile('{{#first this}}{{this}} {{/first}}');
	t.ok( tpl( array ) == 'Solid ', 'renders data within block one time with first item as context' );
	var tpl2 = Handlebars.compile('{{#first this 2}}{{this}} {{/first}}');
	t.ok( tpl2( array ) == 'Solid Liquid ', 'renders data within block twice with first two items as context' );
});

test( 'last', function( t ){
	t.plan(2);
	var array = ['Solid', 'Liquid', 'Solidus'];
	var tpl = Handlebars.compile('{{#last this}}{{this}} {{/last}}');
	t.ok( tpl( array ) == 'Solidus ', 'renders data within block one time with last item as context' );
	var tpl2 = Handlebars.compile('{{#last this 2}}{{this}} {{/last}}');
	t.ok( tpl2( array ) == 'Liquid Solidus ', 'renders data within block twice with last two items as context' );
});

test( 'between', function( t ){
	t.plan(3);
	var array = ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'];
	var tpl = Handlebars.compile('{{#between this 2}}{{this}} {{/between}}');
	t.ok( tpl( array ) == array[2] +' '+ array[3] +' '+ array[4] +' '+ array[5] +' ', 'renders data within block with the last four items as contexts' );
	var tpl2 = Handlebars.compile('{{#between this 1 3}}{{this}} {{/between}}');
	t.ok( tpl2( array ) == array[1] +' '+ array[2] +' '+ array[3] +' ', 'renders data within block with items between index 1 and 3' );
	var tpl3 = Handlebars.compile('{{#between this -4 -1}}{{this}} {{/between}}');
	t.ok( tpl3( array ) == array[2] +' '+ array[3] +' '+ array[4] +' ', 'renders data within block with items between index -4 and -1' );
});