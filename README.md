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
* integrates with `<input />` fields (requires moment.js – [example](http://react-day-picker.js.org/examples?input))

Check out the [examples](http://react-day-picker.js.org/examples) to see its features.

[![npm version](https://img.shields.io/npm/v/react-day-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-day-picker)
[![CircleCI](https://img.shields.io/circleci/project/github/gpbl/react-day-picker/master.svg?style=flat-square)](https://circleci.com/gh/gpbl/react-day-picker)
[![coveralls](https://img.shields.io/coveralls/gpbl/react-day-picker.svg?style=flat-square)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/react-day-picker.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-day-picker)

## Quick start

**Add the dependency to your project**

```bash
yarn add react-day-picker

# or with npm
npm install react-day-picker --save
```

**Using unpkg**

Include the component without installing:

```html
<script src="https://unpkg.com/react-day-picker/daypicker.min.js"></script>
```

See this [jsfiddle](https://jsfiddle.net/gpbl/cggxvq6t/) as example.

**Using bower**

```html
bower install react-day-picker
```

### Example

```js
import React from 'react';
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

class MyComponent extends React.Component {
  state = {
    selectedDay: undefined,
  };
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };
  render() {
    return (
      <DayPicker
        disabledDays={{ daysOfWeek: [0] }}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
      />
    );
  }
}
```

See [this running example](http://react-day-picker.js.org/examples/?disabled) and read [basic usage](http://react-day-picker.js.org/Basic.html) for a deeper explanation of the example above.

### Docs and examples

* [Examples With Code](http://react-day-picker.js.org/examples)
* [Documentation and API reference](http://react-day-picker.js.org)
* [CHANGELOG](https://github.com/gpbl/react-day-picker/blob/master/CHANGELOG.md)

### Get support

Fork [https://jsfiddle.net/gpbl/cggxvq6t](https://jsfiddle.net/gpbl/cggxvq6t) to reproduce your problem.

* Ask on on [Stack Overflow](http://stackoverflow.com/questions/tagged/react-day-picker?sort=newest)  (tag your question with `react-day-picker`)
* Join the [Gitter room](https://gitter.im/gpbl/react-day-picker) for immediate help

### Contribute

* File bugs and feature requests in the [issues page](https://github.com/gpbl/react-day-picker/issues)
* Check out the source code on [Github](https://github.com/gpbl/react-day-picker)
* Pull requests are welcome! If you are planning a pull request with lot of changes, please add an issue to discuss your idea first
  * See how to start the project locally [here](http://react-day-picker.js.org/Contributing.html)
