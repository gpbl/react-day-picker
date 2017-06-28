---
layout: docs
title: Localization
permalink: docs/localization.html
redirect_from: 
  - /docs/localization-moment.html
  - /docs/localization-advanced.html
---

react-day-picker can be localized into any language (English being the default). 

You can either:

* use the localization props (`locale`, `months`, `weekdaysLong`, `weekdaysShort` and `firstDayOfWeek` as shown in [this example](../examples/localization.md)) 
* or [use moment.js](#moment) for the translations strings (e.g. if you are already including it in your project).
* for more advanced options, such as changing the way days and captions are displayed, see [advanced localization](#advanced).

## Example

The following code will render react-day-picker in Italian, using Monday as first day of the week.

[Open in CodeSandbox](https://codesandbox.io/s/0R72WgDPN).

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

const MONTHS = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
const WEEKDAYS_LONG = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'];

export default function Localized() {
  return (
    <div>
      <DayPicker
        locale="it"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
      />
    </div>
  );
}

```
<a name="moment"></a>
## Localization with moment.js

If you already use [moment.js](http://www.momentjs.com) in your dependencies, you may find convenient to use moment's translation strings.

1. make sure `moment` is included in your dependencies
2. make sure the required moment's locale data is available when rendering react-day-picker
3. import `LocaleUtils` from `react-day-picker/moment` and pass it to the `localeUtils` props
4. use the `locale` prop to set the locale in react-day-picker

### Example

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

<a name="advanced"></a>

## Advanced localization

Internally, react-day-picker uses [LocaleUtils](utils-locale.md), a set of formatting functions. You can overwrite its behavior by passing your own custom functions to the `localeUtils` props.

### Example

In the following example, a custom `localeUtils` object is used to localize the calendar in English or in Italian.

[Open in CodeSandbox](https://codesandbox.io/s/Rjg9jJrE)

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

const WEEKDAYS_LONG = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  it: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
};
const WEEKDAYS_SHORT = {
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  it: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
};

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
};

const FIRST_DAY = {
  en: 0,
  it: 1, // Use Monday as first day of the week
};

const localeUtils = {
  formatDay: (d, locale = 'en') =>
    `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][
      d.getMonth()
    ]} ${d.getFullYear()}`,
  formatMonthTitle: (d, locale) =>
    `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (i, locale) => WEEKDAYS_SHORT[locale][i],
  formatWeekdayLong: (i, locale) => WEEKDAYS_LONG[locale][i],
  getFirstDayOfWeek: locale => FIRST_DAY[locale],
};

export default function MyComponent() {
  return <DayPicker locale="it" localeUtils={localeUtils} />;
}
```