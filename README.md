# Handlebars Helper

A collection of Handlebars Helpers for use with Solidus. Not that you can't use it elsewhere, mind you.

## String Helpers

### Lowercase

Converts a string to all lowercase characters.

```handlebars
{{lowercase "LIQUID!"}}

liquid!
```

### Uppercase

Converts a string to all uppercase characters.

```handlebars
{{uppercase "brother!"}}

BROTHER!
```

### Replace

Replaces part of a string with a string.

```handlebars
{{replace "Liquid Snake" "Liquid" "Solid"}}

Solid Snake
```

## Collection Helpers

### Length

Returns the length of the array, string, or object.

```javascript
{
	array: [1,2,3],
	object: {
		one: 1,
		two: 2,
		three: 3
	},
	string: 'Metal Gear'
}
```

```handlebars
Array length: {{length array}}
Object length: {{length object}}
String length: {{length string}}
```

```
Array length: 3
Object length: 3
String length: 10
```

### Contains

Render something if the specified value is in the array, object or string; else render some other thing.

```javascript
{
	array: [ 'Solid', 'Liquid', 'Solidus' ],
	array2: [ 'Chell', 'GLAdOS', 'Wheatley' ],
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
	string2: 'Solid Snake'
}
```

```handlebars
Array contains "Solidus": {{#contains array "Solidus"}}Yup{{else}}Nope{{/contains}}.
Array2 contains "Solidus": {{#contains array2 "Solidus"}}Yup{{else}}Nope{{/contains}}.
Object contains "Solidus": {{#contains object "Solidus"}}Yup{{else}}Nope{{/contains}}.
Object2 contains "Solidus": {{#contains object2 "Solidus"}}Yup{{else}}Nope{{/contains}}.
String contains "Solidus": {{#contains string "Solidus"}}Yup{{else}}Nope{{/contains}}.
String2 contains "Solidus": {{#contains string2 "Solidus"}}Yup{{else}}Nope{{/contains}}.
```

```
Array contains "Solidus": Yup.
Array2 contains "Solidus": Nope.
Object contains "Solidus": Yup.
Object2 contains "Solidus": Nope.
String contains "Solidus": Yup.
String2 contains "Solidus": Nope.
```

### First

Render something with the first item in an array. Or render something with the first `count` items in an array, I won't judge.

```javascript
{
	array: ['Solid', 'Liquid', 'Solidus']
}
```

```handlebars
First item in array: {{#first array}}{{this}} {{/first}}
First two items in array: {{#first array 2}}{{this}} {{/first}}
```

```
First item in array: Solid
First two items in array: Solid Liquid
```

### Last

Render something with the last item in an array. Or render something with the last `count` items in an array, it's cool.

```javascript
{
	array: ['Solid', 'Liquid', 'Solidus']
}
```

```handlebars
Last item in array: {{#last array}}{{this}} {{/last}}
Last two items in array: {{#last array 2}}{{this}} {{/last}}
```

```
Last item in array: Solid
Last two items in array: Liquid Solidus 
```

### Between

Loop through the data in an array between two indexes. Here's a quick run down:

- If only one index is provided, it is treated as the `start` and it will continue to the end of the array.
- These are zero-based indexes, so the first item is `0`, the second is `1`, and so forth.
- This is an inclusive helper, so it not only gets things between two indexes, it includes them as well.
- Indexes can be negative! Negative indexes count backwards from the end of the array.

```javascript
{
	array: ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake']
}
```

```handlebars
Between the 3rd item and the last: {{#between this 2}}{{this}} {{/between}}
Between the 2nd item and the 4th: {{#between this 1 3}}{{this}} {{/between}}
Between the -4th item and the -1st: {{#between this -4 -1}}{{this}} {{/between}}
```

```
Between the 3rd item and the last: Vulcan Raven Decoy Octopus Revolver Ocelot Liquid Snake 
Between the 2nd item and the 4th: Sniper Wolf Vulcan Raven Decoy Octopus
Between the -4th item and the -1st: Vulcan Raven Decoy Octopus Revolver Ocelot
```

### Range

Loop through `amount` data items in an array starting from `index`. Some notes:

- If only the `index` is provided, it will loop through every item from there to the end.
- The index is zero-based, so the first item is `0`, the second is `1`, and so forth.
- This is an inclusive helper, so it gets everything beyond the specified index and the item at `index` itself.
- The `index` can be negative! Negative indexes count backwards from the end of the array.

```javascript
{
	array: ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake']
}
```

```handlebars
Range from 3rd item to the end: {{#range this 2}}{{this}} {{/range}}
Range of 2 items starting from the 2nd item: {{#range this 1 2}}{{this}} {{/range}}
Range of 2 items starting from the -3rd item: {{#range this -3 2}}{{this}} {{/range}}
```

```
Range from 3rd item to the end: Vulcan Raven Decoy Octopus Revolver Ocelot Liquid Snake
Range of 2 items starting from the 2nd item: Sniper Wolf Vulcan Raven
Range of 2 items starting from the -3rd item: Decoy Octopus Revolver Ocelot
```

## Date Helpers

### Ago

Render a human friendly string denoting how long ago the supplied date was.

```javascript
{
	now: new Date,
	earlier: new Date + 1000 * 60 * 60 * 6,
	way_earlier: new Date + 1000 * 60 * 60 * 24 * 30
}
```

```handlebars
Ago for right now: {{ago now}}
Ago for earlier: {{ago earlier}}
Ago for way earlier: {{ago way_earlier}}
```

```
Ago for right now: Just now
Ago for earlier: 6 hours ago
Ago for way earlier: 30 days ago
```

### formatDate

Render a date or date-like value however you wanna. Uses [samsonjs/strftime](https://github.com/samsonjs/strftime) under the hood, so check out its documentation for [the list of format options](https://github.com/samsonjs/strftime#supported-specifiers).

```javascript
{
	dates: [
		'2013-09-30T15:00:00.340Z',
		'2013/09/30 15:00:00 +0000',
		'Mon Sep 30 2013 15:00:00 GMT-0700 (PDT)',
		1380578400000
	]
}
```

```handlebars
{{formatDate dates[0] "%A, %B %o %Y"}}
{{formatDate dates[1] "%b. %o %Y"}}
{{formatDate dates[2] "%A at %-l:%M%p"}}
{{formatDate dates[3] "%v"}}
```

```
Monday, September 30th 2013
Sep. 30th 2013
Monday at 3:00PM
30-Sep-2013
```