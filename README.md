# Handlebars Helper

A collection of Handlebars Helpers for use with Solidus. Not that you can't use it elsewhere, mind you.

[![browser support](https://ci.testling.com/SparkartGroupInc/handlebars-helper.png)](https://ci.testling.com/SparkartGroupInc/handlebars-helper)

## String Helpers

### Lowercase

Converts a string to all lowercase characters.

```handlebars
{{lowercase "LIQUID!"}}
```

```
liquid!
```

### Uppercase

Converts a string to all uppercase characters.

```handlebars
{{uppercase "brother!"}}
```

```
BROTHER!
```

### Replace

Replaces part of a string with a string.

```handlebars
{{replace "Liquid Snake" "Liquid" "Solid"}}
```

```
Solid Snake
```

### Encode

URI encodes a string. Useful for links that use URLs as query parameters.

```handlebars
{{encode "http://sparkart.com"}}
```

```
http%3A%2F%2Fsparkart.com
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

This can also display the "first" `count` items in an object. Use with caution, as browsers don't always agree on what the "first" item in an object is.

```javascript
{
	array: ['Solid', 'Liquid', 'Solidus'],
	object: {
		one: 'Solid',
		two: 'Liquid',
		three: 'Solidus'
	}
}
```

```handlebars
First item in array: {{#first array}}{{this}} {{/first}}
First two items in array: {{#first array 2}}{{this}} {{/first}}
First item in object: {{#first object}}{{this}} {{/first}}
First two items in object: {{#first object 2}}{{this}} {{/first}}
```

```
First item in array: Solid
First two items in array: Solid Liquid
First item in object: Solid
First two items in object: Solid Liquid
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

### Where

Loop through an array of objects and render when the `value` at `key` matches the supplied values. You can also provide a `limit` to stop looping after you've had enough.

```javascript
{
	array: [{
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
	}]
}
```

```handlebars
Where release_year is 1998: {{#where this "release_year" 1998}}{{title}}{{/where}}
Where system is "Playstation 2": {{#where this "system" "Playstation 2"}}{{title}} {{/where}}
Where system is "Playstation 2", limit 1: {{#where this "system" "Playstation 2" 1}}{{title}}{{/where}}
```

```
Where release_year is 1998: Metal Gear Solid
Where system is "Playstation 2": Metal Gear Solid 2 Metal Gear Solid 3 
Where system is "Playstation 2", limit 1: Metal Gear Solid 2
```

### Shuffle

Loop through an array, but in random order.

```javascript
{
	array: ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake']
}
```

```handlebars
Shuffled array: {{#shuffle array}}{{this}} {{/shuffle}}
```

```
Shuffled array: Vulcan Raven Psycho Mantis Revolver Ocelot Liquid Snake Sniper Wolf Decoy Octopus
```

### Reverse

Loop through an array in reverse order.

```javascript
{
	array: ['Psycho Mantis','Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake']
}
```

```handlebars
Reversed array: {{#reverse array}}{{this}} {{/reverse}}
```

```
Reversed array: Liquid Snake Revolver Ocelot Decoy Octopus Vulcan Raven Sniper Wolf Psycho Mantis
```

### Join

Join a collection together with the specified separator. If run on an object, it just joins the values together (ignoring keys).

```javascript
{
	array: ['Psycho Mantis', 'Sniper Wolf', 'Vulcan Raven', 'Decoy Octopus', 'Revolver Ocelot', 'Liquid Snake'],
	object: { '1': 'Psycho Mantis', '2': 'Sniper Wolf', '3': 'Vulcan Raven', '4': 'Decoy Octopus', '5': 'Revolver Ocelot', '6': 'Liquid Snake' }
}
```

```handlebars
Joined array: {{join array ", "}}
Joined object: {{join object ", "}}
```

```
Joined array: Psycho Mantis, Sniper Wolf, Vulcan Raven, Decoy Octopus, Revolver Ocelot, Liquid Snake
Joined object: Psycho Mantis, Sniper Wolf, Vulcan Raven, Decoy Octopus, Revolver Ocelot, Liquid Snake
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

I should also add that this is using `strftimeTZ`, which allows us to **specify an offset from GMT in minutes**. This is especially useful when using Handlebars Helper server side, as the server will likely use an arbitrary time zone by default. 

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
{{formatDate dates[2] "%A at %-l:%M%p" 0 }}
{{formatDate dates[2] "%A at %-l:%M%p" -120 }}
{{formatDate dates[3] "%v"}}
```

```
Monday, September 30th 2013
Sep. 30th 2013
Monday at 10:00PM
Monday at 8:00PM
30-Sep-2013
```

## Equality Helpers

### Equal

Render one thing if both variables are equal. Render another thing if they're not. If you specify "exact", the comparison will be done with `===`, which checks for equality AND type.

```javascript
{ 
	one: 1,
	one_string: '1',
	two: 2
}
```

```handlebars
1 and 1 are equal: {{#equal one one}}Yup.{{else}}Nope.{{/equal}}
1 and '1' are equal: {{#equal one one_string}}Yup.{{else}}Nope.{{/equal}}
1 and 2 are equal: {{#equal one two}}Yup.{{else}}Nope.{{/equal}}
1 and 1 are exactly equal: {{#equal one one "exact"}}Yup.{{else}}Nope.{{/equal}}
1 and '1' are exactly equal: {{#equal one one_string "exact"}}Yup.{{else}}Nope.{{/equal}}
1 and 2 are not equal: {{^equal one two}}Yup.{{else}}Nope.{{/equal}}
```

```
1 and 1 are equal: Yup.
1 and '1' are equal: Yup.
1 and 2 are equal: Nope.
1 and 1 are exactly equal: Yup.
1 and '1' are exactly equal: Nope.
1 and 2 are not equal: Yup.
```

### Greater

Render one thing if the first item is greater than the second. Render another thing if it isn't. If you specify "equal", the comparison will be greater than **and equal to**.

```javascript
{ 
	one: 1,
	two: 2
}
```

```handlebars
2 is greater than 1: {{#greater two one}}Yup.{{else}}Nope.{{/greater}}
1 is greater than 2: {{#greater one two}}Yup.{{else}}Nope.{{/greater}}
2 is greater than 2: {{#greater two two}}Yup.{{else}}Nope.{{/greater}}
2 is greater than or equal to 1: {{#greater two one "equal"}}Yup.{{else}}Nope.{{/greater}}
2 is greater than or equal to 2: {{#greater two two "equal"}}Yup.{{else}}Nope.{{/greater}}
1 is not greater than 2: {{^greater one two}}Yup.{{else}}Nope.{{/greater}}
2 is not greater than 2: {{^greater two two}}Yup.{{else}}Nope.{{/greater}}
```

```
2 is greater than 1: Yup.
1 is greater than 2: Nope.
2 is greater than 2: Nope.
2 is greater than or equal to 1: Yup.
2 is greater than or equal to 2: Yup.
1 is not greater than 2: Yup.
2 is not greater than 2: Yup.
```

### Less

Render one thing if the first item is less than the second. Render another thing if it isn't. If you specify "equal", the comparison will be less than **and equal to**.

```javascript
{ 
	one: 1,
	two: 2
}
```

```handlebars
2 is less than 1: {{#less two one}}Yup.{{else}}Nope.{{/less}}
1 is less than 2: {{#less one two}}Yup.{{else}}Nope.{{/less}}
2 is less than 2: {{#less two two}}Yup.{{else}}Nope.{{/less}}
1 is less than or equal to 2: {{#less one two "equal"}}Yup.{{else}}Nope.{{/less}}
2 is less than or equal to 2: {{#less two two "equal"}}Yup.{{else}}Nope.{{/less}}
2 is not less than 1: {{^less one two}}Yup.{{else}}Nope.{{/less}}
2 is not less than 2: {{^less two two}}Yup.{{else}}Nope.{{/less}}
```

```
2 is less than 1: Nope.
1 is less than 2: Yup.
2 is less than 2: Nope.
1 is less than or equal to 2: Yup.
2 is less than or equal to 2: Yup.
2 is not less than 1: Yup.
2 is not less than 2: Yup.
```

## Number Helpers

### Times

Render this block **x** times. If "zero" is specified, the count starts at `0` instead of `1`.

```handlebars
Do this 1 time: {{#times 1}}{{this}} {{/times}}
Do this 5 times: {{#times 5}}{{this}} {{/times}}
Do this 1 time, starting from 0: {{#times 1 "zero"}}{{this}} {{/times}}
Do this 5 times, starting from 0: {{#times 5 "zero"}}{{this}} {{/times}}
```

```
Do this 1 time: 1 
Do this 5 times: 1 2 3 4 5 
Do this 1 time, starting from 0: 0 
Do this 5 times, starting from 0: 0 1 2 3 4 
```

### Add

Add numbers together. Anything that's not a number will be converted to a number, then added.

```handlebars
1 + 2 = {{add 1 2}}
-1 + 2 = {{add -1 2}}
"1" + 2 = {{add "1" 2}}
1.5 + 1 = {{add 1.5 1}}
1 + 2 + 3 = {{add 1 2 3}}
```

```
1 + 2 = 3
-1 + 2 = 1
"1" + 2 = 3
1.5 + 1 = 2.5
1 + 2 + 3 = 6
```

### Subtract

Subtract numbers from one another. Anything that's not a number will be converted to a number, then subtracted.

```handlebars
1 - 2 = {{subtract 1 2}}
-1 - 2 = {{subtract -1 2}}
"1" - 2 = {{subtract "1" 2}}
1.5 - 1 = {{subtract 1.5 1}}
1 - 2 - 3 = {{subtract 1 2 3}}
```

```
1 - 2 = -1
-1 - 2 = -3
"1" - 2 = -1
1.5 - 1 = 0.5
1 - 2 - 3 = -4
```

### Multiply

Multiply numbers. Anything that's not a number will be converted to a number, then multiplied.

```handlebars
2 * 2 = {{multiply 2 2}}
-2 * 2 = {{multiply -2 2}}
"2" * 2 = {{multiply "2" 2}}
1.5 * 2 = {{multiply 1.5 2}}
2 * 2 * 2 = {{multiply 2 2 2}}
```

```
2 * 2 = 4
-2 * 2 = -4
"2" * 2 = 4
1.5 * 2 = 3
2 * 2 * 2 = 8
```

### Divide

Divide numbers. Anything that's not a number will be converted to a number, then divided.

```handlebars
4 ÷ 2 = {{divide 4 2}}
-4 ÷ 2 = {{divide -4 2}}
"4" ÷ 2 = {{divide "4" 2}}
3 ÷ 1.5 = {{divide 3 1.5}}
8 ÷ 2 ÷ 2 = {{divide 8 2 2}}
```

```
4 ÷ 2 = 2
-4 ÷ 2 = -2
"4" ÷ 2 = 2
3 ÷ 1.5 = 2
8 ÷ 2 ÷ 2 = 2
```