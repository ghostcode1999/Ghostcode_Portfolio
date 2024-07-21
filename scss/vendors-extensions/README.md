# Vendors Extensions

The `sass/vendors-extensions/` folder contains files designed to override vendors styles named exactly after the vendors they overwrite.
The basic reason to have this folder here is to avoid editing the vendor files themselves, which is generally not a good idea.

There are two approaches when overwritting vendors styles:

1. If importing core vendor file is needed to make your customization(modifying and extending it), then it's recommended to deal with your `cutsom.scss` as a new customized vendor file that will be compiled on itself (so its name will not be preceded by the _underscore_) and linked in HTML files instead of original vendor file(**New vendor theme**).

_So_ in your `custom.scss`, you'll import vendor's source Sass files, add default variable overrides and additional custom code then compile the file.
Once your CSS is compiled, you can include it in your HTML files instead of vendor core CSS.

The main reason is that when importing vendor file in your own partial file that itself will be imported in the main Sass file `main.scss`, and if this is done for all vendors the resulted stylesheet will be heavy, messy and unreadable.
Having a single file for each vendor separated from main application stylesheet make it easy to find stuff later when you have to come back to the code.

**As an example** `sass/vendors-extensions/custom_bootstrap.scss` is a file containing
all variables reconfiguration intended to re-declare some of Bootstrap’s default CSS and resulting a new customized Bootstrap stylesheet `custom_bootstrap.css` to be included in your project.

2. If importing vendor file is _NOT_ needed to make your customization, then proceed as with classic partial files, declare your custom styles in `_#{vendor-name}.scss` then forward it in `_vendors.scss` that will be then imported in `main.scss`.

Core vendor file still linked in HTML files.

**As an example** `sass/vendors-extensions/owlcarousel.scss` is a file containing
all cutsom CSS rules intended to re-declare some of OwlCarousel’s default CSS.
