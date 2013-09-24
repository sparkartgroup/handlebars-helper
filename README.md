handlebars-helpers
==================

A collection of Handlebars Helpers for use with Solidus

# String Helpers

## Lowercase

Converts a string to all lowercase characters.

```handlebars
{{lowercase "LIQUID!"}}

liquid!
```

## Uppercase

Converts a string to all uppercase characters.

```handlebars
{{uppercase "brother!"}}

BROTHER!
```

## Replace

Replaces part of a string with a string.

```handlebars
{{replace "Liquid Snake" "Liquid" "Solid"}}

Solid Snake
```

# Collection Helpers

## Length

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