---
layout: docs
title: Getting started
permalink: docs/index.html
---

react-day-picker is designed to cover the most common needs for a date picker in web applications.

The package includes:

* the [**DayPicker**](api-daypicker.md) component, to render the date picker (the "calendar")
* the [**DayPickerInput**](api-input.md) component – to render an input field opening the DayPicker in an overlay.

## Setup

### As dependency

Install as dependency to use it in your project:

```bash
npm install react-day-picker --save
# or with yarn
yarn add react-day-picker
```

If you are using the [DayPickerInput](input.md) component, you must install moment.js as well:

```bash
npm install moment --save
# or with yarn
yarn add moment
```

Then import the component and its style in your component:

```js
import DayPicker from 'react-day-picker';

// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';

import from 'react-day-picker/lib/style';
```

### Use from unpkg

Include the component without installing:

```html
<script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css">
```

The components will be available as `window.DayPicker` and `window.DayPicker.Input`.

## Usage example

[Open in CodeSandbox](https://codesandbox.io/s/98EZJ6VZZ).

```jsx
class MyAwesomeComponent extends React.Component {
  state = {
    selectedDay: new Date(),
  };
  handleDayClick = day => {
    this.setState({
      selectedDay: day,
    });
  };
  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}
```

Go over to [basic concepts](./basics.md) to learn more, or see the [APIs](./api.md).

