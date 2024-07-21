---
Title: Guidelines
description: Learn about the guiding principles, strategies and techniques used to build and maintain this architecture so you can more easily customize and extend it yourself.
---

# Introduction

This is a Template based on the 7-1 architecture and [Sass Guidelines](https://sass-guidelin.es) writing conventions and best practices.

This styleguide is **strongly opinionated**, it may or may not suit your project preferences _SO_ feel free to pick only what you need or to ignore it completely and make your own suitable styleguide.

# Folder structure

The Sass architecture is made according to a _5-1 pattern_ folder structure:
5 basic folders, 1 file.

Basically, it has 5 different folders(**Partials**) and a single file at the root level(`main.scss`) which imports them all to be compiled into a single CSS stylesheet.

We think that the 5 basic partials are the only needed folders for a basic project.
For more complex projects, we have added 3 additional partials: `themes`, `vendors` and `vendors-extensions`.

We have included a `README.md` file within each partial folder that describe extensively the purpose of each one.

Folders in the `sass/` folder have an `_index.scss` file that allows to load from a single entrypoint all modules if needed with the help of the `@forward` rule, using one single rule `@use 'folder_name';` in our `main.scss` file.

```
project-name/
├── sass/
│   ├── base/
|   |    ├── _resets.scss               # Reset/Normalize All Elements
|   |    ├── _typography.scss           # Typography Rules(font-size in each
|   |    |                                 breakpoint... etc.)
|   |    ├── _utilities.scss            # Classes with pre-defined properties
|   |    ├── _base.scss                 # @forward All Partial Files in base
|   |    |                                Folder (to be able to import the whole
|   |    |                                folder across other files)
|   |    └── ...                        # Etc...
│   ├── components/
|   |    ├── _buttons.scss              # Buttons
|   |    ├── _carousel.scss             # Carousel
|   |    ├── _dropdown.scss             # Dropdown
|   |    ├── _index.scss                # @forward All Partial Files in components
|   |    |                                Folder (to be able to import the whole
|   |    |                                folder across other files)
|   |    └── ...                        # Etc...
|   ├── helpers/
|   |   ├── _variables.scss             # Sass Variables, Maps, Lists
|   |   ├── _functions.scss             # Sass Functions
|   |   ├── _mixins.scss                # Sass Mixins to Include
|   |   ├── _placeholders.scss          # Sass Placeholders to Extend
|   |   ├── _index.scss                 # @forward All Partial Files in helpers
|   |   |                                Folder (to be able to import the whole
|   |   |                                folder across other files)
|   |   └── ...                         # Etc...
│   ├── layout/
|   |    ├── _header.scss               # Header
|   |    ├── _sidebar.scss              # Sidebar
|   |    ├── _footer.scss               # Footer
|   |    ├── _grid.scss                 # Grid System
|   |    ├── _index.scss                # @forward All Partial Files in layout
|   |    |                                Folder (to be able to import the whole
|   |    |                                folder across other files)
|   |    └── ...                        # Etc...
│   ├── pages/
|   |    ├── _home.scss                 # Home Page Specific Styles
|   |    ├── _about.scss                # About Page Specific Styles
|   |    ├── _contact.scss              # Contact Page Specific Styles
|   |    ├── _index.scss                # @forward All Partial Files in pages
|   |    |                                Folder (to be able to import the whole
|   |    |                                folder across other files)
|   |    └── ...                        # Etc...
│   ├── themes/
|   |    ├── _default.scss              # Default Theme
|   |    ├── _admin.scss                # Admin Theme
|   |    ├── _index.scss                # @forward All Partial Files in themes
|   |    |                                Folder (to be able to import the whole
|   |    |                                folder across other files)
|   |    └── ...                        # Etc...
│   ├── vendors/
|   |    ├── bootstrap                  # Bootstrap Framework
|   |    |   └── _bootstrap.scss
|   |    ├── owlcarousel                # OwlCarousel Library
|   |    |   └── _fontawesome.scss
|   |    └── ...                        # Etc...
│   ├── vendors-extensions/
|   |    ├── custom_bootstrap.scss      # Custom Bootstrap Theme
|   |    ├── _owlcarousel.scss          # Custom OwlCarousel
|   |    ├── _index.scss                # @forward All Partial Files in vendors-
|   |    |                                extensions Folder (to be able to import
|   |    |                                the whole folder across other files)
|   |    └── ...                        # Etc...
|   └── main.scss                       # Main Sass File to be Compiled and Linked
|                                          in all Pages HTML Files
└── ...
```

## Partial Folders

- Files naming follow the **hyphen-delimited convention**.
- All partials files names start with an UNDERSCORE\_: this prefix tells Sass to not generate the corresponding CSS output for this file (will not be compiled into CSS).
- Each partial folder has an `_index.scss` file used to forward all the folder files into a single file that will be imported by the main file (or other) in one shot without need to import each of the partial files. In other words, this file will contain only `@forward` rules that help forward your files as a folder across different codebase files.

## Main Sass File

The main Sass file `main.scss` should be the only `.scss` file not to begin with an underscore, so that it compiles into normal CSS. This file should not contain anything but `@use` rule and comments.It should contain all your imported partials folders using the `@use` rule and its compiled css file should be linked in all pages of your application (files in the `pages/` folder can be also made to be compiled to link each compiled CSS stylesheet to its respective page but that's not recommended due to resulted bad network performances).

**Importing Order**
Partials folders should be imported in the following order:

1. helpers/
2. base/
3. components/
4. layout/
5. pages/
6. themes/
7. vendors-extensions/

**TIP** When importing Sass files, file extensions and leading underscores are omitted.

## Custom Vendor Theme File

Because it's strongly recommended to avoid modifying vendor's core files, we think that creating your own stylesheet that imports vendor core file so you can modify and extend it is a good approach.

In your `custom.scss` you will import needed vendor source Sass files and begin to modify any of the Sass variables and maps.This custom file will then be compiled to produce a CSS custom stylesheet of respective vendor that will be included in your HTML files instead of the vendor's core file.

Vendors core files are placed in `vendors` folder, customized vendors files are placed in `vendors-extensions` folder.

_For more details_ `vendors-extensions/README.md`.

# Guidelines

We have attached some notes within each partial about good practices to write maintainable, scalable and clean Sass.
Our approach has a major core goal:

- Keep Sass as simple as it can be (**KISS** principle: Keep it Simple, Stupid) even if it goes against **DRY** principle (Don't Repeat Yourself) in some circumstances.

Sass should not get much more complex than regular CSS to keep code more organized, more stuctured and easier to maintain.

## Syntax

- An indentation is made of two (2) spaces, no tabs.
- Lines should be, as much as possible, shorter than 80 characters: feel free to split them into several lines when necessary.
- CSS should be properly written, possibly following the CSS Guidelines from Harry Roberts.
- Whitespace is free, use it to separate items, rules and declarations (but keep it a meaningful use).
- Do not hesitate to leave empty lines, it never hurts.

### Strings

- Declaring the @charset directive on top of the stylesheet is highly recommended t enforce UTF-8 encoding (No character of any kind before it).
- Strings including URLs should be quoted (unless applied as CSS identifers = Specific CSS values).

### Numbers

- Leading zeros should be added (to improve readability) but trailing zeros (0) should be omitted(Sass makes no distinction between numbers, integers and floats).
- A 0 length value should never have a unit (only lengths, be aware of time properties).
- Units manipulation should be considered as arithmetic operations, not string operations.

* To add a unit to a number, multiply it by 1 unit (10 \* 1px)
* To remove a unit of a value, divide it by one unit of _its kind_ (10px / 1px)

- Top-level calculations should be wrapped in parentheses (to improve readability and prevent some unexpected output by forcing Sass to evaluate the content of the parentheses).

### Colors

- Colors should be expressed in HSL when possible, then RGB, then hexadecimal (in a lowercase and shortened form).
- Color keywords should be avoided (can be non perfectly semantic and confused).
- When lightening or darkening a color , using `mix()` rather than `lighten()` and `darken()` is recommended. We have already built two helpers functions `tint()` and `shade()` within `_functions.scss` to do the job.

### Lists

- Can be inlined or multilines (necessarily if too long to fit on an 80-character line).
- If multilines, it should have a trailing comma, not if inlined.
- Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas.
- Should always be wrapped in parentheses (to improve readability).
- When adding items to a list, always use the provided API (not manually).

### Maps

- A space should be added after the assignment colon `:`.
- The opening brace should be on the same line of the assignment colon `: (`.
- Maps containing more than a single pair are written on several lines.
- Keys should be quoted if they are strings (99% of the cases).
- Each key-value pair should be placed on its own new line.
- A comma `,` is added at the end of each pair.
- The last pair should have a trailing comma (to make it easier to add, remove or reorder pairs).
- The closing brace `)` should be on its new line.
- No space or new line between closing brace and semi-colon.
- Avoid using complex data types (like maps) as map keys.

```
$breakpoints: {
    "sm": 768px,
    "md": 992px,
    "lg": 1200px,
    "xl": 1400px,
};
```

### CSS Ruleset

- Related selectors on the same line, unrelated selectors on new lines.
- A single space between the last selector and the rule opening brace.
- Each declaration should be in its own new line.
- A single space after the declaration colon.
- A trailing semi-colon at the end of all declarations.
- The rule closing brace on its own new line.
- No new line before the rule closing brace.
- A new line after the rule closing brace.

- Local variables are declared before any other declaration, and spaced from others by a new line.
- Mixin calls with no `@content` come before any declaraton.
- Nested selectors always come after a new line.
- Mixin calls with `@content` come after any nested selector.

```
.card .card-header,
.modal {
    $length: 20rem;

    @include circle;
    @include size($length);
    display: flex;
    align-items: center;

    &:hover {
        background-color: #fff;
    }

    @include media-min("sm") {
        display: block;
    }
}

```

### Declaration Sorting

There are 2 famous systems for declaration sorting: _alphabetical_ or _by type_.
We think that sorting by type is more consistent and make the code more organized and easier to read.
But any of the two systems can be used as long as it is consistent.
According to our approach, properties are organized in the following order:

1. Position
2. Box
3. Visuals
4. Text(Typography)
5. Other

**Position**: Properties that affect the position of the box: `position`, `top`, `right`, `bottom`, `left`, `float` and so on.
**Box**: Properties that affect the display and dimensions of the box: `display`, `width`, `height`, `padding`, `margin`, `border` and so on.
**Visuals**: Properties that affect the visuals of the box: `background`, `color`,`opacity` and so on.
**Text**: Properties that affect the display of the text: `font-size`, `font-weight`, `text-transform`, `text-align` and so on.
**Other**: Any property that doesn't belong to the above groups.

### Selector Deep Nesting

Because selector nesting may makes code more difficult to read our approach consists of:

- Avoid selector nesting as much as possible.
- If nesting is needed respect the _Inception_ rule which advised against nesting more than 3 levels deep.
- Use selector nesting for pseudo-classes, pseudo-elements and component state classes (To keep everything related to a component at the same place).
- If the element is contained within another specific element, you can still using nesting (to preserve the idea of components).
- Media queries can also be nested inside their relevant selector.

## Naming Conventions

- Whenever possible, use the **lowercase hyphen-delimited** convention.
- If your Sass code is intended to be distributed (library, framework, ...), it's recommended to namespace all you variables, functions, mixins and placeholders to avoid conflicts with others code.

## Comments and documentation

- CSS is a tricky language; do not hesitate to write very extensive comments about things that look (or are) fishy.
- Every variable, function, mixin and placeholder that is intended to be reused all over the codebase should be documented as part of the global API using `SassDoc`.
- Triple slashes `///` are required for documentation.
- You will find some fully documented mixins and functions in our partials.

## Warnings and Errors

- `@error` stops the compilation, `@warn` does not.
- Both directives display a message in the output stream handy for debugging.

## !default flag
- The !default flag tells the compiler to set the value of the variable only if the value is not defined.