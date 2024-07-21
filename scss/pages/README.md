# Pages

The `sass/pages/` folder holds page-specific styles in files named after the page.
These files could be partials or not. If they are partials, they should be imported into the `sass/main.scss` file, if not their resulted compiled CSS stylesheets should be linked to their respective pages.

**!!** We recommend merging these files in the main resulting stylesheet to avoid bad network performance when importing multiple CSS stylesheets files that results in a bad user experience.
