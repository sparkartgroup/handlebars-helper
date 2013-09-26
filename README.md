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

Array length: 3
Object length: 3
String length: 10
```

### Contains

Render something if the specified value is in the array or object, else render some other thing.

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
	}
}
```

```handlebars
Array contains "Solidus": {{#contains array "Solidus"}}Yup{{else}}Nope{{/contains}}.
Array2 contains "Solidus": {{#contains array2 "Solidus"}}Yup{{else}}Nope{{/contains}}.
Object contains "Solidus": {{#contains object "Solidus"}}Yup{{else}}Nope{{/contains}}.
Object2 contains "Solidus": {{#contains object2 "Solidus"}}Yup{{else}}Nope{{/contains}}.

Array contains "Solidus": Yup.
Array2 contains "Solidus": Nope.
Object contains "Solidus": Yup.
Object2 contains "Solidus": Nope.
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

Last item in array: Solid
Last two items in array: Liquid Solidus 
```

### Between

Loop through the data in an array between two indexes. If only one index is provided, it is treated as the `start` and it will continue to the end of the array. By the way, these are zero-based indexes, so the first item is `0`, the second is `1`, and so forth. Furthermore, this is an inclusive helper, so it not only gets things between two indexes, it includes them as well.

```javascript
{
	array: ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake']
}
```

```handlebars
Between the 3rd item and the last: {{#between this 2}}{{this}} {{/between}}
Between the 2nd item and the 4th: {{#between this 1 3}}{{this}} {{/between}}
Between the -4th item and the -1st: {{#between this -4 -1}}{{this}} {{/between}}

Between the 3rd item and the last: Vulcan Raven Decoy Octopus Revolver Ocelot Liquid Snake 
Between the 2nd item and the 4th: Sniper Wolf Vulcan Raven Decoy Octopus
Between the -4th item and the -1st: Vulcan Raven Decoy Octopus Revolver Ocelot
```