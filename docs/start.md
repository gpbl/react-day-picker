---
sort: 1
section: Getting Started
title: Installing DayPicker
description: Learn how to get started with DayPicker in your React app.
---

# Installing DayPicker

To install and start using DayPicker in your React app, follow these steps:

## 1. Install the packages

Add `react-day-picker` and [`date-fns`](http://date-fns.org/) to your project:

```bash
npm install react-day-picker date-fns --save
```

## 2. Import package and its style

Import `DayPicker` and the base style into your app. Use the "onSelect" prop to get the selected day.

```js
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function MyApp() {
  return <DayPicker onSelect={(date) => console.log(date)} />;
}
```

For more details about the available props and the component's configuration, refer to the [documentation](./README.md).

## 3. Configure DayPicker

Refer to the [documentation](./README.md) for more details about the available props and the component's configuration.
