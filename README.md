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