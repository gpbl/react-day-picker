<p align="center">
<img width="359"  style="margin: 0 auto" alt="title" src="https://cloud.githubusercontent.com/assets/120693/17276843/94ad5b62-5734-11e6-9f25-454f50f81122.png">
</p>
<p align="center">
<img width="254" style="margin: 0 auto"  alt="screen shot" src="https://cloud.githubusercontent.com/assets/120693/22856445/3a6b008e-f070-11e6-8ef6-59bbab1c218b.png">
</p>

react-day-picker is a flexible date picker component for [React](https://facebook.github.io/react/).

* no external dependencies
* select [days](http://react-day-picker.js.org/examples?selectable), [ranges](http://react-day-picker.js.org/examples?range), whatever using CSS modifiers
* simple [localization](http://react-day-picker.js.org/examples?localized), even with [moment.js](http://react-day-picker.js.org/examples/?localizedMoment)
* customizable [style](https://github.com/gpbl/react-day-picker/blob/master/src/style.css) and [CSS Modules](http://react-day-picker.js.org/CSSModules.html) support
* navigable via keyboard, ARIA support

Check out the [examples](http://react-day-picker.js.org/examples) to see its features.

[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![Bower](https://img.shields.io/bower/v/react-day-picker.svg?style=flat-square)](http://bower.io/search/?q=react-day-picker)
[![build status](https://img.shields.io/travis/gpbl/react-day-picker/master.svg?style=flat-square)](https://travis-ci.org/gpbl/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/gpbl/react-day-picker.svg)](https://codeclimate.com/github/gpbl/react-day-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-day-picker)

## Quick start

**Add the dependency to your project**

```bash
npm install react-day-picker --save

# or with yarn:
yarn add react-day-picker
```

**Using unpkg**

Include the component without installing:

```html
<script src="https://unpkg.com/react-day-picker/daypicker.min.js"></script>
```

See this [jsfiddle](https://jsfiddle.net/fordjxht/) as example.

**Using bower**

```html
bower install react-day-picker
```

### Example

```js
import React from 'react';
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

function sundays(day) {
  return day.getDay() === 0;
}

class MyComponent extends React.Component {
  state = {
    selectedDay: new Date(),
  }
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day, { disabled, selected }) {
    if (disabled) {
      return;
    }
    this.setState({ 
      selectedDay: selected ? null : day 
    })
  },
  render() {
    return (
      <DayPicker
        initialMonth={ new Date(2017, 1) }
        disabledDays={ sundays }
        selectedDays={ this.state.selectedDay }
        onDayClick={ this.handleDayClick }
    />);
  }
}
```

See [Basic usage](http://react-day-picker.js.org/Basic.html) for a deeper explanation of the example above.

### Docs and examples

* [Examples With Code](http://react-day-picker.js.org/examples)
* [Documentation](http://react-day-picker.js.org)
    * [Basic Usage](http://react-day-picker.js.org/Basic.html)
    * [Use of Day Modifiers](http://react-day-picker.js.org/Modifiers.html)
    * [API](http://react-day-picker.js.org/API.html)
    * [Styling](http://react-day-picker.js.org/Styling.html)
    * [Use with CSS Modules](http://react-day-picker.js.org/CSSModules.html)
    * [Localization](http://react-day-picker.js.org/Localization.html)
    * [Utilities](http://react-day-picker.js.org/Utilities.html)
* [CHANGELOG](https://github.com/gpbl/react-day-picker/blob/master/CHANGELOG.md)

### Get support

* Tag with `react-day-picker` your questions on [Stack Overflow](http://stackoverflow.com/questions/tagged/react-day-picker?sort=newest)
* Join the [Gitter room](https://gitter.im/gpbl/react-day-picker) for immediate help
* **Tip** Fork https://jsfiddle.net/fordjxht/ to help us reproducing your problem

### Contribute

* File bugs and feature requests in the [issues page](https://github.com/gpbl/react-day-picker/issues)
* Check out the source code on [Github](https://github.com/gpbl/react-day-picker)
* Pull requests are welcome! If you are planning a pull request with lot of changes, please add an issue to discuss your idea first
  * See how to start the project locally [here](http://react-day-picker.js.org/Contributing.html)
