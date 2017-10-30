---
layout: docs
title: Using the input field
permalink: docs/input.html
redirect_from: 
  - /Input.html
---

The package includes [`<DayPickerInput />`](api-input.md), a component rendering an input field and displaying react-day-picker in an overlay.

### Setup as dependency

[moment.js](https://momentjs.com/) is required, as it is used to validate and format the date typed by the user. Make sure you have it installed in your dependencies:

```bash
npm install moment --save
# or with yarn
yarn add moment
```

In your code, import the component from `react-day-picker/DayPickerInput`
  
```js
import DayPickerInput from 'react-day-picker/DayPickerInput';
```

### Setup from unpkg

If your are using [unpkg](https://unpkg.com), the component is available as `DayPicker.Input` global var:

```html
<script src="https://unpkg.com/moment@2/min/moment.min.js"></script>
<script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>
<script type="text/javascript">
  DayPickerInput = DayPicker.Input;
</script>
```

### Example

[Open this example in CodeSandbox](https://codesandbox.io/s/4qWp4zR7).

```jsx
import React from 'react';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class MyForm extends React.Component {
  state = {
    selectedDay: undefined,
  }
  handleDayChange = selectedDay => {
    this.setState({ selectedDay });
  };
  render() {
    const value = this.state.selectedDay 
      ? this.state.selectedDay.format('DD/MM/YYYY') 
      : '';
    return (
      <DayPickerInput
        name="birthday"
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
        value={value}
        onDayChange={this.handleDayChange}
      />
    );
  }
}
```

## Customize the DayPicker

To change how the DayPicker appears in the overlay, use the `dayPickerProps` which accepts all the [DayPicker options](api-daypicker.md):

```jsx
function MyDatePicker() {
  return (
    <DayPickerInput
      name="birthday"
      placeholder="DD/MM/YYYY"
      format="DD/MM/YYYY"
      dayPickerProps={ {
          month: new Date(2018, 10)
          showWeekNumbers: true,
      } }
    />
  )
}
```

## Localization

You can use the `locale` and `format` methods of moment.js to format the value displayed
in the input field. Remember to add the `locale` prop to the `dayPickerProps`!

For example, this implementation display the input field in Italian:

```jsx
import React from 'react';
import moment from 'moment';

// Make sure moment.js has the required locale
import 'moment/locale/it';

import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class MyForm extends React.Component {
  state = {
    selectedDay: undefined,
  }
  handleDayChange = selectedDay => {
    this.setState({ selectedDay });
  };
  render() {
    const format = 'LL';
    const locale = 'it';
    let value = '';
    if (this.state.selectedDay) {
      // Format the value of the input field
      value = this.state.selectedDay.locale(locale).format(format);
    }
    return (
      <DayPickerInput
        name="birthday"
        placeholder="E.g. 15 ottobre 2017"
        format={format}
        value={value}
        onDayChange={this.handleDayChange}
        dayPickerProps={ {
          locale,
        } }
      />
    );
  }
}
```