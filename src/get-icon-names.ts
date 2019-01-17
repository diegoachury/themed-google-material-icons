/* Icon List:
*  https://material.io/tools/icons
*/

// Run this script in console to get a list of icon names
const iconsCollection = document.getElementsByClassName('icon-image-preview');
const indexOfIconNameClass = 0;
const indexOfIconNameWithoutPrefix = 1;
const iconNames = [];
for (let i = 0; i < iconsCollection.length; i++) {
  const name = iconsCollection[i].classList[indexOfIconNameClass];
  const iconNameWithoutPrefix = name.split('-')[indexOfIconNameWithoutPrefix];
  iconNames.push(iconNameWithoutPrefix);
}
JSON.stringify(iconNames);
// The console should return a string format of icon names array
// In chrome, the result can be right-click'ed and saved to a local file or copied to clipboard