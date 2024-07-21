# Helpers

The `sass/helpers/` folder gathers all Sass tools and helpers used across the project. Every global Variable, function, mixin and placeholder should be put in here. This folder can be named `abstracts/`.

**!!** This folder should not output a single line of CSS when compiled on its own because it's just made of Sass helpers.

Helpers are required in most files of the codebase:
`@use "helpers" as *`

## [Variables](https://sass-lang.com/documentation/variables)

`sass/helpers/_variables.scss` contains all your variables and [SASS Maps](https://sass-lang.com/documentation/values/maps).

## [Functions](https://sass-lang.com/documentation/at-rules/function)

`sass/helpers/_functions.scss` contains all your functions.

## [Mixins](https://sass-lang.com/documentation/at-rules/mixin)

`sass/helpers/_mixins.scss` contains all your mixins to be included `@include`.

## [Placeholders](https://sass-lang.com/documentation/at-rules/extend)

`sass/helpers/_placeholders.scss` contains all your placeholders to be extended `@extend`.


## Guidelines

### Variables

- _When to create a new varaible?_: When all of the following criteria are met:

1. The value is repeated at least twice.
2. The value is likely to updated at least once.
3. All occurrences of the value are tied to the variable(i.e. not by coincidence).

- Redeclaring a global variable inside an inner scope(selector, function, mixin...) will override it just for the local scope(**Global variable shadowing**: the local variable is shadowing the global one).
- Do not use the `!global` flag at root level as it might constitute a violation of Sass syntax in the future, use it only to override a global variable from a local scope.
- Do use the `!default` flag for any variable part of a public API that can be safely overwritten. Using `!default` flag allows external developers to override the variable's default value in their own Sass without modifying your source code. If a variable has already been assigned by the developer even before importing your source code, then it won't be re-assigned by the default values in yours.
- Use maps instead of multiple distinct variables(maps are iterable, ability to create a getter function).

### Extending/Inheritance

- Stick to extending `%placeholders`, not existing CSS selectors for 2 major reasons:

1. Placeholders give you freedom to use and change any selectors naming convention.
2. Relationships are only defined inside the placeholders, so you are far less likely to produce unintended selectors.

- When extend classes, only extend a class with another class, never a complex selector.
- Avoid extending general ancestor selectors(`.navbar .button`) or general sibiling selectors(`.navbar ~ .button`): it causes **!!selector explosion**.
- Extend a `%placeholder` as few times as possible in order to avoid side effects.
- Only extend selectors within the same media scope.
- Whenever possible, avoid using extending except if two selectors are characteristically similar, otherwise if they are unrelated but share some rules use a `@mixin` instead.

### Mixins

- **Rule of thumb**: If a group of CSS properties always appear together for a reason(i.e. not a coincidence), put them in a mixin.
- Keep mixins simple, if a mixin ends up with more than 20 lines, it should be either split into smaller chunks or completely revised.
- For argument-less mixins you can omit parentheses when including them.
- Use an argument list `arglist` rather than a list when a mixin is intended to accept an unknown number of arguments using triple dots ...

```Example
@mixin shadows($shadows...) {
 // type-of($shadows) == 'arglist'
 // …
}
```

- When dealing with Vendor prefixes use an **Autoprefixer** rather than a `@mixin`(it will be always up-to-date).

### Conditional Statements: @if, @else

- No parentheses unless they are necessary.
- Always an empty new line before `@if`.
- Always a line break after the opening brace.
- `@else` statements on the same line as previous closing brace.
- Always an empty new line after the last closing brace unless the next line is a closing brace.
- When testing for a falsy value, use the `not` keyword rather than testing against false or null.
- When using conditional within a function to return a different result based on some condition, make sure the function still have a `@return` statement outside of any conditional block to avoid errors.

### Loops: @each, @for, @while

- Use `@each` to iterate over a list or a map.
- When iterating over a map, always use `$key` and `$value` as variable names to enforce consistency.
- Always an empty new line before `@each`.
- Always an empty new line after the last closing brace unless the next line is a closing brace.

- Use `@for` when combined with CSS `:nth-*` pseudo-classes, otherwise use `@each` for iterating.
- Always use `$i` as a variable name(just a common convention) and `through` instead of `to`.

```Example
@for $i from 1 through 10 {
    .item:nth-of-type(#{$i}) {
      border-color: hsl($i * 36, 50%, 50%);
 }
}
```

- Always an empty new line before `@for`.
- Always an empty new line after the last closing brace unless the next line is a closing brace.

- `@while` loop has no practical use case and there is no way to break its loop, so avoid using it.


