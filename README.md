<p align="center">
<img width="359"  style="margin: 0 auto" alt="title" src="https://cloud.githubusercontent.com/assets/120693/12210154/46ea65d2-b658-11e5-9328-8abaaa9fbcdd.png">
</p>
<p align="center">
<img width="297" style="margin: 0 auto"  alt="screen shot" src="https://cloud.githubusercontent.com/assets/120693/12312069/74c136d6-ba5c-11e5-8eae-680ecd200f95.png">
</p>

react-day-picker is a flexible date picker component for [React](https://facebook.github.io/react/).

* no external dependencies
* select [days](http://www.gpbl.org/react-day-picker/examples/#selectable), [ranges](http://www.gpbl.org/react-day-picker/examples/#range), whatever using CSS modifiers
* ready for i18n, with [moment.js](http://www.gpbl.org/react-day-picker/examples/#localized) or [any other library](http://www.gpbl.org/react-day-picker/examples/#localizedCustom)
* customizable [style](https://github.com/gpbl/react-day-picker/blob/master/src/style.css)
* navigable via keyboard, ARIA support

Look at [some examples](http://gpbl.org/react-day-picker/examples) showing all its features!

[![build status](https://img.shields.io/travis/gpbl/react-day-picker/master.svg?style=flat-square)](https://travis-ci.org/gpbl/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![Bower](https://img.shields.io/bower/v/react-day-picker.svg)](http://bower.io/search/?q=react-day-picker)


### How to use

* [Examples with code](http://gpbl.org/react-day-picker/examples)
* [Documentation](http://gpbl.org/react-day-picker)
    * [Getting started](http://gpbl.org/react-day-picker/docs/GettingStarted.html)
    * [API](http://www.gpbl.org/react-day-picker/docs/API.html)
    * [Styling](http://www.gpbl.org/react-day-picker/docs/Styling.html)
    * [Localization](http://www.gpbl.org/react-day-picker/docs/Localization.html)
    * [Tips](http://www.gpbl.org/react-day-picker/docs/Tips.html)
    * [Utilities](http://www.gpbl.org/react-day-picker/docs/Utilities.html)
* [Changelog](CHANGELOG.md)

### Partecipate

* [Gitter room](https://gitter.im/gpbl/react-day-picker) – ask questions and chat with other developers
* [Issues](https://github.com/gpbl/react-day-picker/issues) – file bugs and suggestions
* Check out the source code on [Github](https://github.com/gpbl/react-day-picker)
* Pull requests are welcome! If you are planning a pull request with lot of changes, please add an issue to discuss your idea first
  * See how to start the project locally [here](http://www.gpbl.org/react-day-picker/docs/Contributing.html)

## Quick start

**Install via npm**

```
npm install react-day-picker --save
```

and use it in your React components:

```jsx
import DayPicker from "react-day-picker";

function isSunday(day) {
  return day.getDay() === 0;
}

function MyComponent() {
  return <DayPicker initialMonth={ new Date(2016, 1) } modifiers={{ isSunday }} />
}
```

If you are not using ES2015, until [this is not fixed](https://github.com/gpbl/react-day-picker/issues/136)
you should require the module as:

```js
var DayPicker = require("react-day-picker").default
```

**Install via Bower**

```
bower install react-day-picker --save
```

The bower package exposes a global `DayPicker` variable.
