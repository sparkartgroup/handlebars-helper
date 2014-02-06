var assert = require('assert');
var test = require('tape');
var Handlebars = require('handlebars');
var handlebars_helper = require('../index.js');

var YEAR = 60 * 60 * 24 * 365 * 1000;
var MONTH = 60 * 60 * 24 * 30 * 1000;
var DAY = 60 * 60 * 24 * 1000;
var HOUR = 60 * 60 * 1000;
var MINUTE = 60 * 1000;
var SECOND = 1000;

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

test( 'encode helper', function( t ){
	t.plan(1);
	var tpl = Handlebars.compile('{{encode "http://sparkart.com"}}');
	t.ok( tpl() === 'http%3A%2F%2Fsparkart.com', 'URI encodes string' );
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
	t.plan(7);
	var data = {
		array: ['Solid', 'Liquid', 'Solidus'],
		array2: ['Chell', 'GLaDOS', 'Wheatley'],
		object: {
			one: 'Solid',
			two: 'Liquid',
			three: 'Solidus'
		},
		object2: {
			one: 'Chell',
			two: 'GLaDOS',
			three: 'Wheatley'
		},
		string: 'Solidus Snake',
		string2: 'Solid Snake',
		context: 'confirmed'
	};
	var tpl = Handlebars.compile('{{#contains this "Solidus"}}Yup{{else}}Nope{{/contains}}.');
	t.ok( tpl( data.array ) === 'Yup.', 'renders data within block when item is in array' );
	t.ok( tpl( data.array2 ) === 'Nope.', 'renders else block when item is not in array' );
	t.ok( tpl( data.object ) === 'Yup.', 'renders data within block when item is in object' );
	t.ok( tpl( data.object2 ) === 'Nope.', 'renders else block when item is not in object' );
	t.ok( tpl( data.string ) === 'Yup.', 'renders data within block when substring is in string' );
	t.ok( tpl( data.string2 ) === 'Nope.', 'renders else block when substring is not in string' );
	var tpl_context = Handlebars.compile('{{#contains this.array "Solidus"}}{{context}}{{/contains}}');
	t.ok( tpl_context( data ) === 'confirmed', 'executes block in parent context' );
});

test( 'first', function( t ){
	t.plan(5);
	var array = ['Solid', 'Liquid', 'Solidus'];
	var tpl = Handlebars.compile('{{#first this}}{{this}} {{/first}}');
	t.ok( tpl( array ) == 'Solid ', 'renders data within block one time with first item as context' );
	var tpl2 = Handlebars.compile('{{#first this 2}}{{this}} {{/first}}');
	t.ok( tpl2( array ) == 'Solid Liquid ', 'renders data within block twice with first two items as context' );
	var tpl3 = Handlebars.compile('{{#first this 5}}{{this}} {{/first}}');
	t.ok( tpl3( array ) == 'Solid Liquid Solidus ', 'renders data within block even if count is higher than length' );
	var object = {
		one: 'Solid',
		two: 'Liquid',
		three: 'Solidus'
	};
	t.ok( tpl( object ) == 'Solid ', 'renders data within block one time with first item as context, object' );
	t.ok( tpl2( object ) == 'Solid Liquid ', 'renders data within block twice with first two items as context, object' );
});

test( 'last', function( t ){
	t.plan(5);
	var array = ['Solid', 'Liquid', 'Solidus'];
	var tpl = Handlebars.compile('{{#last this}}{{this}} {{/last}}');
	t.ok( tpl( array ) == 'Solidus ', 'renders data within block one time with last item as context' );
	var tpl2 = Handlebars.compile('{{#last this 2}}{{this}} {{/last}}');
	t.ok( tpl2( array ) == 'Liquid Solidus ', 'renders data within block twice with last two items as context' );
	var tpl3 = Handlebars.compile('{{#last this 5}}{{this}} {{/last}}');
	t.ok( tpl3( array ) == 'Solid Liquid Solidus ', 'renders data within block even if count is higher than length' );
	var object = {
		one: 'Solid',
		two: 'Liquid',
		three: 'Solidus'
	};
	t.ok( tpl( object ) === 'Solidus ', 'renders data within block one time with last item as context, object' );
	t.ok( tpl2( object ) === 'Liquid Solidus ', 'renders data within block twice with last two items as context, object');
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

test( 'range', function( t ){
	t.plan(3);
	var array = ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'];
	var tpl = Handlebars.compile('{{#range this 2}}{{this}} {{/range}}');
	t.ok( tpl( array ) == array[2] +' '+ array[3] +' '+ array[4] +' '+ array[5] +' ', 'renders data within block with items 2 through the end' );
	var tpl2 = Handlebars.compile('{{#range this 1 2}}{{this}} {{/range}}');
	t.ok( tpl2( array ) == array[1] +' '+ array[2] +' ', 'renders data within block with 2 items starting from index 1' );
	var tpl3 = Handlebars.compile('{{#range this -3 2}}{{this}} {{/range}}');
	t.ok( tpl3( array ) == array[3] +' '+ array[4] +' ', 'renders data within block with 2 items starting from index -3' );
});

test( 'where', function( t ){
	t.plan(3);
	var array = [{
		title: 'Metal Gear Solid',
		system: 'Playstation',
		release_year: 1998
	}, {
		title: 'Metal Gear Solid 2',
		system: 'Playstation 2',
		release_year: 2001
	}, {
		title: 'Metal Gear Solid 3',
		system: 'Playstation 2',
		release_year: 2004
	}];
	var tpl = Handlebars.compile('{{#where this "release_year" 1998}}{{title}}{{/where}}');
	t.ok( tpl( array ) === array[0].title, 'renders data within block with items matching key/value pair' );
	var tpl2 = Handlebars.compile('{{#where this "system" "Playstation 2"}}{{title}} {{/where}}');
	t.ok( tpl2( array ) === array[1].title +' '+ array[2].title +' ', 'renders data within block with items matching key/value pair' );
	var tpl3 = Handlebars.compile('{{#where this "system" "Playstation 2" 1}}{{title}}{{/where}}');
	t.ok( tpl3( array ) === array[1].title, 'renders data within block with one item matching key/value pair' );
});

test( 'shuffle', function( t ){
	t.plan(1);
	var array = ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'];
	var tpl = Handlebars.compile('{{#shuffle this}}{{this}},{{/shuffle}}');
	var result = tpl( array );
	var result_array = result.substring( 0, result.length - 1 ).split(',');
	result_array.sort();
	array.sort();
	t.ok( result_array.join() == array.join(), 'shuffled collection contains same elements as original collection' );
});

test( 'reverse', function( t ){
	t.plan(1);
	var array = ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'];
	var tpl = Handlebars.compile('{{#reverse this}}{{this}} {{/reverse}}');
	t.ok( tpl( array ) === array.reverse().join(' ') +' ', 'renders data within block with items in reverse order' );
});

test( 'join', function( t ){
	t.plan(2);
	var array = ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'];
	var object = { '1': 'Psycho Mantis', '2': 'Sniper Wolf', '3': 'Vulcan Raven', '4': 'Decoy Octopus', '5': 'Revolver Ocelot', '6': 'Liquid Snake' };
	var tpl = Handlebars.compile('{{join this ", "}}');
	t.ok( tpl( array ) === array.join(', '), 'renders joined data from array' );
	t.ok( tpl( object ) === array.join(', '), 'renders joined data from object' );
});

// Date helpers

test( 'ago', function( t ){
	t.plan(8);
	var now = new Date;
	var seconds_ago = new Date( now - SECOND * 30 );
	var minutes_ago = new Date( now - MINUTE * 30 );
	var hours_ago = new Date( now - HOUR * 12 );
	var days_ago = new Date( now - DAY * 10 );
	var months_ago = new Date( now - MONTH * 6 );
	var year_ago = new Date( now - YEAR * 2 );
	var tpl = Handlebars.compile('{{ago this}}');
	t.ok( tpl( now ) === 'Just now', 'renders "Just now" for a date within a second of now' );
	t.ok( tpl( seconds_ago ) === '30 seconds ago', 'renders "30 seconds ago" for a date 30 seconds in the past' );
	t.ok( tpl( minutes_ago ) === '30 minutes ago', 'renders "30 minutes ago" for a date 30 minutes in the past' );
	t.ok( tpl( hours_ago ) === '12 hours ago', 'renders "12 hours ago" for a date 12 hours in the past' );
	t.ok( tpl( days_ago ) === '10 days ago', 'renders "10 days ago" for a date 10 days in the past' );
	t.ok( tpl( months_ago ) === '6 months ago', 'renders "6 months ago" for a date 6 months in the past' );
	t.ok( tpl( year_ago ) === '2 years ago', 'renders "2 years ago" for a date 2 years in the past' );
	t.ok( tpl( year_ago.getTime().toString() ) === '2 years ago', 'renders "2 years ago" for a date 2 years in the past (string)' );
});

test( 'formatDate', function( t ){
	t.plan(6);
	var dates = [
		'2013-09-30T15:00:00.340Z',
		'2013/09/30 15:00:00 +0000',
		'Mon Sep 30 2013 15:00:00 GMT-0700 (PDT)',
		1380578400000,
		'1380578400000'
	];
	var tpl = Handlebars.compile('{{formatDate this "%A, %B %o %Y"}}');
	t.ok( tpl( dates[0] ) === 'Monday, September 30th 2013', 'date successfully formatted' );
	var tpl2 = Handlebars.compile('{{formatDate this "%b. %o %Y"}}');
	t.ok( tpl2( dates[1] ) === 'Sep. 30th 2013', 'date successfully formatted' );
	var tpl3 = Handlebars.compile('{{formatDate this "%A at %-l:%M%p" 0 }}');
	t.ok( tpl3( dates[2] ) === 'Monday at 10:00PM', 'date successfully formatted' );
	var tpl4 = Handlebars.compile('{{formatDate this "%A at %-l:%M%p" -120 }}');
	t.ok( tpl4( dates[2] ) === 'Monday at 8:00PM', 'date successfully formatted' );
	var tpl5 = Handlebars.compile('{{formatDate this "%v"}}');
	t.ok( tpl5( dates[3] ) === '30-Sep-2013', 'date successfully formatted' );
	t.ok( tpl5( dates[4] ) === '30-Sep-2013', 'date successfully formatted' );
});

// Equality helpers

test( 'equal', function( t ){
	t.plan(7);
	var data = {
		pairs: [{
			left: 1,
			right: 1
		}, {
			left: 1,
			right: '1'
		}, {
			left: 1,
			right: 2
		}],
		context: 'confirmed'
	};
	var tpl = Handlebars.compile('{{#equal left right}}Yup.{{else}}Nope.{{/equal}}');
	t.ok( tpl( data.pairs[0] ) === 'Yup.', 'Renders positive block when items are equal' );
	t.ok( tpl( data.pairs[1] ) === 'Yup.', 'Renders positive block when items are equal, of different types' );
	t.ok( tpl( data.pairs[2] ) === 'Nope.', 'Renders inverse block when items are inequal' );
	var tpl2 = Handlebars.compile('{{#equal left right "exact"}}Yup.{{else}}Nope.{{/equal}}');
	t.ok( tpl2( data.pairs[0] ) === 'Yup.', 'Renders positive block when items are equal, exact check' );
	t.ok( tpl2( data.pairs[1] ) === 'Nope.', 'Renders inverse block when items are equal, of different types, exact check' );
	var tpl3 = Handlebars.compile('{{^equal left right}}Yup.{{else}}Nope.{{/equal}}');
	t.ok( tpl3( data.pairs[2] ) === 'Yup.', 'Renders inverse block when items are inequal, inverse is used' );
	var tpl_context = Handlebars.compile('{{#equal 1 1}}{{context}}{{/equal}}');
	t.ok( tpl_context( data ) === 'confirmed', 'executes block in parent context' );
});

test( 'greater', function( t ){
	t.plan(8);
	var data = {
		pairs: [{
			left: 2,
			right: 1
		}, {
			left: 1,
			right: 2
		}, {
			left: 2,
			right: 2
		}],
		context: 'confirmed'
	};
	var tpl = Handlebars.compile('{{#greater left right}}Yup.{{else}}Nope.{{/greater}}');
	t.ok( tpl( data.pairs[0] ) === 'Yup.', 'Renders positive block when left is greater' );
	t.ok( tpl( data.pairs[1] ) === 'Nope.', 'Renders inverse block when left is less' );
	t.ok( tpl( data.pairs[2] ) === 'Nope.', 'Renders inverse block when left and right are equal' );
	var tpl2 = Handlebars.compile('{{#greater left right "equal"}}Yup.{{else}}Nope.{{/greater}}');
	t.ok( tpl2( data.pairs[0] ) === 'Yup.', 'Renders positive block when left is greater, or equal check' );
	t.ok( tpl2( data.pairs[2] ) === 'Yup.', 'Renders positive block when left and right are equal, or equal check' );
	var tpl3 = Handlebars.compile('{{^greater left right}}Yup.{{else}}Nope.{{/greater}}');
	t.ok( tpl3( data.pairs[1] ) === 'Yup.', 'Renders positive block when left is less, inverse is used' );
	t.ok( tpl3( data.pairs[2] ) === 'Yup.', 'Renders positive block when left and right are equal, inverse is used' );
	var tpl_context = Handlebars.compile('{{#greater 2 1}}{{context}}{{/greater}}');
	t.ok( tpl_context( data ) === 'confirmed', 'executes block in parent context' );
});

test( 'less', function( t ){
	t.plan(8);
	var data = {
		pairs: [{
			left: 1,
			right: 2
		}, {
			left: 2,
			right: 1
		}, {
			left: 2,
			right: 2
		}],
		context: 'confirmed'
	};
	var tpl = Handlebars.compile('{{#less left right}}Yup.{{else}}Nope.{{/less}}');
	t.ok( tpl( data.pairs[0] ) === 'Yup.', 'Renders positive block when left is less' );
	t.ok( tpl( data.pairs[1] ) === 'Nope.', 'Renders inverse block when left is less' );
	t.ok( tpl( data.pairs[2] ) === 'Nope.', 'Renders inverse block when left and right are equal' );
	var tpl2 = Handlebars.compile('{{#less left right "equal"}}Yup.{{else}}Nope.{{/less}}');
	t.ok( tpl2( data.pairs[0] ) === 'Yup.', 'Renders positive block when left is less, or equal check' );
	t.ok( tpl2( data.pairs[2] ) === 'Yup.', 'Renders positive block when left and right are equal, or equal check' );
	var tpl3 = Handlebars.compile('{{^less left right}}Yup.{{else}}Nope.{{/less}}');
	t.ok( tpl3( data.pairs[1] ) === 'Yup.', 'Renders positive block when left is less, inverse is used' );
	t.ok( tpl3( data.pairs[2] ) === 'Yup.', 'Renders positive block when left and right are equal, inverse is used' );
	var tpl_context = Handlebars.compile('{{#less 1 2}}{{context}}{{/less}}');
	t.ok( tpl_context( data ) === 'confirmed', 'executes block in parent context' );
});

// Number helpers

test( 'times', function( t ){
	t.plan(4);
	var tpl = Handlebars.compile('{{#times this}}{{this}} {{/times}}');
	t.ok( tpl(1) === '1 ', 'Renders block 1 times' );
	t.ok( tpl(5) === '1 2 3 4 5 ', 'Renders block 5 times' );
	var tpl2 = Handlebars.compile('{{#times this "zero"}}{{this}} {{/times}}');
	t.ok( tpl2(1) === '0 ', 'Renders block 1 times, zero based' );
	t.ok( tpl2(5) === '0 1 2 3 4 ', 'Renders block 5 times, zero based' );
});