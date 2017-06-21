---
layout: docs
title: Localization with moment.js
permalink: docs/localization-moment.html
---

If you already use moment.js in your dependencies, you may find convenient to use moment's translation strings.

To localize the calendar with [moment.js](http://www.momentjs.com):

1. make sure [moment](https://www.npmjs.com/package/moment) is included in your dependencies
2. make sure the required moment's locale data is available when rendering react-day-picker
3. import `LocaleUtils` from `react-day-picker/moment` and pass it to the `localeUtils` props
4. use the `locale` prop to set the locale in react-day-picker

## Example

The following component shows four react-day-pickers, in English, Japanese, Arabic and Italian.

[Open in CodeSandbox](https://codesandbox.io/s/W6jXx7Wnv).

```jsx
import React from 'react'; 
import ReactDOM from 'react-dom';

import DayPicker from 'react-day-picker';

import LocaleUtils from 'react-day-picker/moment';

import 'react-day-picker/lib/style.css';

// Make sure moment.js has the required locale data
import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/it';

export default function LocalizedExample() {
  return (
    <div>

      <p>English</p>
      <DayPicker localeUtils={LocaleUtils} locale="en" />

      <p>Japanese</p>
      <DayPicker localeUtils={LocaleUtils} locale="ja" />

      <p>Arabic</p>
      <DayPicker localeUtils={LocaleUtils} locale="ar" />

      <p>Italian</p>
      <DayPicker localeUtils={LocaleUtils} locale="it" />

    </div>
  );
}
```
