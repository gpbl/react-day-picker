---
layout: docs
title: Localization
permalink: docs/localization.html
---

react-day-picker can be localized into any language (English being the default). 

You can either set the localization props (`months`, `weekdaysLong`, `weekdaysShort` and `firstDayOfWeek` as shown in [this example](Localization.html)) or [use moment.js instead](localization-moment.md) if you are already including it in your project.

> For more advanced options, such as changing the way days and caption is displayed, see [Advanced localization](localization-advanced.md).

## Example

The following code will render react-day-picker in Italian, using Monday as first day of the week.

[Open in codesandbox](https://codesandbox.io/s/0R72WgDPN).

```jsx
import React from 'react';
import DayPicker from 'react-day-picker';

const MONTHS = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

const WEEKDAYS_LONG = [
  'Domenica',
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
];

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