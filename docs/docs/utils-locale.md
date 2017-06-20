---
layout: api
title: LocaleUtils
permalink: docs/utils-locale.html
---

`LocaleUtils` is a set of functions used to localize the component (see: [Advanced localization](localization-advanced.md)). You may want to implement your own `LocaleUtils`, or override some of its functions.

> Usually you won't need to use these functions. The component can be localized using `months`, `weekdaysLong`, `weekdaysShort` and `firstDayOfWeek` props.

For example, this code renders the month's title as `M/YYYY` instead of the default:

```jsx
import DayPicker, { LocaleUtils } from "react-day-picker";

function formatMonthTitle(d, locale) {
 return `${d.getMonth() + 1}/${d.getFullYear}`
}

<DayPicker localeUtils={ { ...LocaleUtils, formatMonthTitle } } />

```

## Functions

### formatDay `(d: date, locale: String) ⇒ String`

Format the string used as `aria-label` for the given day.

### formatMonthTitle `(d: date, locale: String) ⇒ String`

Return the string used to format the month's title in react-day-picker for the given date `d`.

### formatWeekdayShort `(i: number, locale: String) ⇒ String`

Return the string used to render the weekday's short name, e.g. `Mo` for Monday.

### formatWeekdayLong `(i: number, locale: String) ⇒ String`

Return the string used to render the weekday's long name (starting from `0` as Sunday).

### getFirstDayOfWeek `(locale: String) ⇒ number`

Return the first day of the week for the given locale (starting from `0` as Sunday).

### getMonths `(locale: String) ⇒ Array`

Return the twelve months for the given locale (full name, e.g. `January`).
