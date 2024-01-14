---
section: Getting Started
title: Installing DayPicker
description: Get DayPicker from npm. Requires React 18+ and date-fns.
---

# Installing DayPicker

## 1. Install the packages

Add `react-day-picker` and [`date-fns`](http://date-fns.org/) to your project:

```bash
npm install react-day-picker date-fns --save
```

## 2. Import package and its style

Import `DayPicker` and the base style into your app. Use the "onSelect" prop to get the selected day.

```js
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
```

## 3. Add DayPicker to your code

Use `onSelect` to get the picked day.

```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
export default function MyApp() {
  return <DayPicker onSelect={(date) => console.log(date)} />;
}
```

## 4. Configure DayPicker

Refer to the [documentation](./README.md) for more details about the available props and the component's configuration.
