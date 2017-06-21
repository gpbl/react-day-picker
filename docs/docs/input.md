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
yarn add moment
# or if you use npm
npm install moment --save
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

## Example

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
    const datePickerProps = {
      enableOutsideDays: true,
    };
    const value = this.state.selectedDay 
      ? this.state.selectedDay.format('DD/MM/YYYY') 
      : '';
      
    return (
      <form>
        <p>
          <label for="input">Please enter a day:</label>
        </p>
        <DayPickerInput
          name="birthday"
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          value={value}
          onDayChange={this.handleDayChange}
          dayPickerProps={}
        />
      </form>
    );
  }
}
```
