# Themed Google Material Icons
Version: 0.0.1

## Background
Based on various Github issues on react-native-vector-icons: [#723](https://github.com/oblador/react-native-vector-icons/issues/723), [#861](https://github.com/oblador/react-native-vector-icons/issues/861), [#793](https://github.com/oblador/react-native-vector-icons/issues/793), and etc, it seems like there isn't a way to use _themed_ Google Material Icons in react-native-vector-icon, which is a very standard library to use icons in RN projects.

Moreover, since icons are more scalable, colorable and maintainable in a vectorized format (_SVGs_), and importing SVGs is not supported by RN out of the box, having a *ttf* set of icons and using react-native-vector-icon to apply them in RN apps is essential. That's why I created the script to crawl down SVG icons from Google Material Icons website.

> Note: This current version only has icons for the **rounded** theme, and don't have a streamlined way to get other sets quickly.

## Usage
### To import icons directly using react-native-vector-icons
- Follow these [instructions](https://github.com/oblador/react-native-vector-icons#createiconsetfromicomoonconfig-fontfamily-fontfile) on react-native-vector-icon to import custom IcoMoon font set.
- Regarding the parameters passed to the `createIconSetFromIcoMoonConfig()` function, for the current (rounded) set, use [this file](/generated-assets/rounded-google-material-icons/selection.json) as the config file, 'rounded-google-material-icons' as the fontFamily param, and [this file](/generated-assets/rounded-google-material-icons/fonts/rounded-google-material-icons.ttf) as the ttf font file.

### To get your own set of icons
- The tricky part of this is that the Google website is an Angular app that renders at runtime and directly extracting data from HTML is not available (otherwise I'd use a node script to directly fetch the icon names and streamline the process).
- Before I come up with a better solution, `get-icon-names.ts` has the WebAPI script that can be copied and pasted directly into a Chrome console to run to extract all the icon names. (A pre-generated list is also provided in this repo [here](/icon-names)).
- Once the names are there, running `npm install` and `npm start` should allow you to directly download all the icons. (I'll try to make it a cli tool), but for now, you'll have to change the parameters (size, theme, etc) directly in the code.
- The svg files will be saved to `/icon-files`, but the necessary manual work for now is to go to IcoMoon to generate a ttf set with those SVGs.
