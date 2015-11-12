react-day-picker
=======

[![build status](https://img.shields.io/travis/gpbl/react-day-picker/master.svg?style=flat-square)](https://travis-ci.org/gpbl/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)

react-day-picker is a flexible date picker component for [React](https://facebook.github.io/react/).

* select days, ranges, whatever using CSS modifiers
* easily change style and add content to days cells
* display multiple months
* ready for i18n, with moment.js or any other library
* navigable via keyboard, ARIA support
* no external dependencies

<p align="center">
<img width="291" style="margin: 0 auto" alt="screen shot 2015-11-11 at 15 51 07" src="https://cloud.githubusercontent.com/assets/120693/11093859/d52e0c26-888c-11e5-917e-aaa9686dcb84.png">
</p>

## Documentation and help

* [Guides and API](http://gpbl.org/react-day-picker)
* [Examples with code](http://gpbl.org/react-day-picker/examples)
* [Github](https://github.com/gpbl/react-day-picker)
* [Changelog](https://github.com/gpbl/react-day-picker/releases)
* [Issues](https://github.com/gpbl/react-day-picker/issues)
* [Gitter room](https://gitter.im/gpbl/react-day-picker)

## Quick start

Install via npm

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

Or install via bower

```
bower install react-day-picker --save
```

The bower package exposes a global `DayPicker` variable:

```jsx
function isSunday(day) {
  return day.getDay() === 0;
}

function MyComponent() {
  return <DayPicker initialMonth={ new Date(2016, 1) } modifiers={{ isSunday }} />
}
```
