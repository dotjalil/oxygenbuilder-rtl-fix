# RTL OxygenBuilder Fix

## Why this script?

If you have an RTL site running [OxygenBuilder](https://oxygenbuilder.com/), then you'll need to add this snippet to your site.
RTL Languages: Arabic, Aramaic, Azeri, Dhivehi/Maldivian, Hebrew, Kurdish (Sorani), Persian/Farsi, and Urdu.

## The issue

If you install the OxygenBuilder plugin for the first time, and have your site in one of the RTL languages, the editor layout will be broken, page preview is not complete, tabs and settings will appear in weird places and a lot of funny stuff:

![As you can see in the above screenshot, there's a blank space on the left of the page preview](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/screenshot1-min.png)

![Even worst when you have a code block open](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/screenshot2-min.png)

## How to fix the issue?

1. First you'll need to install a plugin that let's you add/manage code snippets on your site. I use the free [WPCode Plugin](https://wordpress.org/plugins/insert-headers-and-footers/). Go ahead to Plugins > Add New > and search for WPCode and Install & Activate the plugin ![enter image description here](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/wpcode-min.png)
2. After installing WPCode, go to Code Snippets > + Add Snippet and add the following snippet. Full snippet located inside the [script.js file on this repo](https://github.com/dotjalil/oxygenbuilder-rtl-fix/blob/main/script.js).

```
// Fix Oxygen Builder Editor Layout for RTL sites
// Get the current window location
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const oxy_builder = urlParams.get("ct_builder");

// Check if the current page is an editor page
if (oxy_builder == "true") {
  // if it's the editor, make the page direction LTR
  // Making the page direction LTR will ensure that the builder itself will show up correctly
  // While the page's content will remain RTL
  // It works!

  document
    .querySelector('html[ng-app="CTFrontendBuilderUI"]')
    .setAttribute("dir", "ltr");
}
```

3. Save the snippet and don't forget to make it active![Add the snippet and Activate it](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/wpcode2-min.png)
4. That's it. Now everytime the editor loads, it will be set to display correctl![Editor appears as usual](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/screenshot3-min.png)

![No weird stuff happening](https://github.com/dotjalil/oxygenbuilder-rtl-fix/raw/main/images/screenshot4-min.png)
