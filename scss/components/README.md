# Components

The `sass/components/` folder is for reusable elements like widgets. It contains all kind of specific modules like a buttons, cards, sliders and so on. This folder can be named `modules/`.

When creating a new file/component be sure to import the helpers using `@use '../helpers/' as *;`, add the new component in the `_components.scss` using `@forward 'component_name';` and use the prefix `.#{$prefix}class` to avoid conflicts with other frameworks or personal classes.

Each Module should be designed to exist as a standalone component to make the page more flexible.

## Few Words About Components

- Components can be anything, as long as they:

1. Has a _unique action_: a button, a card, a search form...
2. `Reusable` and `reused` across the project at different positions, on different pages and in various situations
3. `Independent`: that's means it should not depend on its position in the DOM (header, main, footer...)

- **Component Structure**: Styles included in each component partial file are only:

1. Base styles of the component itself
2. Styles of the component's variants, modifiers and states
3. Styles of the component's descendents if necessary

It can include component-specific variables, placeholders, mixins and functions.
To keep your component able to be themed externally(e.g. from a theme inside the `themes/` folder), limit the declarations to only _structural styles_, such as dimensions (width/height), padding, margins, alignment, etc. Exclude styles such as colors, shadows, font rules, background rules, etc.
