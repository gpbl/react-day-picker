# react-day-picker

Customizable date picker and calendar component for React.js. See [docs and examples](http://www.gpbl.org/react-day-picker/)

<p align="center">
<a href="http://www.gpbl.org/react-day-picker/"><img src="https://cloud.githubusercontent.com/assets/120693/8303891/9f85e42c-19a1-11e5-9905-ee31f4e3f5aa.png" width="300" /></a>
</p>

* use CSS modifiers to change the day’s style
* easily add content to days cells
* display multiple months
* ready for i18n, with [moment.js](http://momentjs.com) or any library you use
* navigable via keyboard
* ARIA support

[![Build Status](https://travis-ci.org/gpbl/react-day-picker.svg)](https://travis-ci.org/gpbl/react-day-picker)
[![Coverage Status](https://coveralls.io/repos/gpbl/react-day-picker/badge.svg?branch=master)](https://coveralls.io/r/gpbl/react-day-picker?branch=master)
[![npm version](https://badge.fury.io/js/react-day-picker.svg)](http://badge.fury.io/js/react-day-picker)

### Documentation

[See the website](http://www.gpbl.org/react-day-picker/) for examples with code, API and tips.


 [![Join the chat at https://gitter.im/gpbl/react-day-picker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gpbl/react-day-picker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

