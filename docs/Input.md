# Using the input field

react-day-picker comes with `<DayPickerInput />`, a component rendering an input field and displaying Day Picker in an overlay. [See this example](http://react-day-picker.js.org/examples/?input) and read [its API reference](DayPickerInputAPI.md).

### Setup

* [momentjs](https://momentjs.com/) is required to validate and format the date typed by the user. Make sure you have it installed in your dependencies:

  ```bash
  yarn add moment
  # or if you use npm
  npm install moment --save
  ```
  

* In your code, import the component from `react-day-picker/DayPickerInput`
  
  ```js
  import DayPickerInput from 'react-day-picker/DayPickerInput';
  ```

## Example

```jsx
import React from 'react';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';

export class MyForm extends React.Component {

  handleBirthdayChange = day => {
    this.setState({
      birthday: day
    })
  }

  render() {
    return (
      <form>
        <DayPickerInput
          name="birthday"
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          onDayChange={ this.handleBirthdayChange }
          dayPickerProps={{
            enableOutsideDays: true,
          }}
        />
      </form>
    )
  }
}
```
