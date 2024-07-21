# Base

The `base/` folder holds the basic code for the project. Base styles include resets, typography rules, utility classes, standard styles for commonly used HTML elements and so on.

## Resets

`sass/base/_resets.scss` contains all base rules designed to reset/normalize browsers default values to provide an elegant, consistent, and simple baseline across browsers to build the site on.

## Typography

`sass/base/_typography.scss` contains any rules for typography (responsive font-sizes etc…).

## Utilities

`sass/base/_utilities.scss` contains classes that have pre-defined properties. Any utility class comes with a prefix (`.#{$prefix}class`) to avoid conflicts with other frameworks or personal named classes. The prefix can be modified from `sass/abstracts/_variables.scss` if needed.
