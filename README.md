react-day-picker
=======

[react-day-picker](https://www.npmjs.com/package/react-day-picker) is a date picker and calendar component for [React](https://facebook.github.io/react/). Using *modifiers* to define its appearance and behavior, it is flexible and highly customizable.

[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![build status](https://img.shields.io/travis/gpbl/react-day-picker/master.svg?style=flat-square)](https://travis-ci.org/gpbl/react-day-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)

### Main features

* no external dependencies
* select days, ranges, whatever with CSS modifiers
* easily change style and add content to days cells
* display multiple months
* ready for i18n, with moment.js or any other library
* navigable via keyboard, ARIA support

### Usage

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

### Examples 

Look at [some examples](http://www.gpbl.org/react-day-picker/examples) to see react-day-picker in action.
