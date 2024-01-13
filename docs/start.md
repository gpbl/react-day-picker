# Getting Started

DayPicker requires React 18+ and works with [date-fns](https://date-fns.org/) to format and manipulate dates.

## 1. Install the packages

Add `react-day-picker` and [`date-fns`](http://date-fns.org/) to your project:

```bash
npm install react-day-picker date-fns --save
```

## 2. Import the package

Import `DayPicker` and the base style into your app. Use the "onSelect" prop to get the selected day.

```js
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function MyApp() {
  return <DayPicker onSelect={(date) => console.log(date)} />;
}
```

## 3. Configure DayPicker

Refer to the [documentation](./README.md) for more details about the available props and the component's configuration.
