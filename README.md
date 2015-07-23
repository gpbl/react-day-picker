# react-day-picker

Customizable date picker and calendar component for React.js. See [docs and examples](http://www.gpbl.org/react-day-picker/).

<p align="center">
<a href="http://www.gpbl.org/react-day-picker/"><img src="https://cloud.githubusercontent.com/assets/120693/8303891/9f85e42c-19a1-11e5-9905-ee31f4e3f5aa.png" width="300" /></a>
</p>

* select days, ranges, whatever with CSS modifiers
* easily change style and add content to days cells
* display multiple months
* ready for i18n, with [moment.js](http://momentjs.com) or any other library
* navigable via keyboard and 

[![Build Status](https://travis-ci.org/gpbl/react-day-picker.svg)](https://travis-ci.org/gpbl/react-day-picker)
[![Coverage Status](https://coveralls.io/repos/gpbl/react-day-picker/badge.svg?branch=master)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![npm version](https://badge.fury.io/js/react-day-picker.svg)](http://badge.fury.io/js/react-day-picker)

### Documentation

[See the website](http://www.gpbl.org/react-day-picker/) for examples with code, API and tips. Release notes are [here](https://github.com/gpbl/react-day-picker/releases).

### Usage

```bash
npm install react-day-picker --save
```

```js 
import React from "react";
import DayPicker from "react-day-picker";

class MyComponent extends React.Component {

  render() {
    return <DayPicker initialMonth={new Date()} />
  }
}
```
---
### Contribute

* Use `npm run test` or `npm run test:watch` to run the unit tests. 
* Run `npm run cover` for a test coverage report.
* To make sure files are linted: `npm run lint`
* To run the website with examples use `cd site && npm install && npm start`, then visit `localhost:3000`
  * If you want to see your changes applied, remember to run `npm install` before running it!
