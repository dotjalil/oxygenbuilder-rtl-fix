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
