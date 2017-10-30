---
layout: api
title: DateUtils
permalink: docs/utils-date.html
---

`DateUtils` is a set of functions useful to work with dates and modifiers.

```js
import { DateUtils } from "react-day-picker";
console.log(DateUtils.isPastDay(new Date())); // false
```

## Functions

### addMonths `(d: date, n: number) ⇒ Date`

Return `d` as a new date with `n` months added. Missing days will be added to the final date, e.g. 2016-03-31 + 1 month = 2016-05-01 (the 31th of April is missing).

### clone `(d: date) ⇒ Date`

Clone the date `d` returning a new date with the same time.

### isDayAfter `(day1: ?date, day2: ?date) ⇒ bool`

Return `true` if the first day is after the second day.

### isDayBefore `(day1: ?date, day2: ?date) ⇒ bool`

Return `true` if the first day is before the second day.

### isSameDay `(day1: ?date, day2: ?date) ⇒ bool`

Return `true` if `day1` and `day2` are the same day.

### isPastDay `(day: date) ⇒ bool`

Returns `true` if `day` is in the past, e.g. is yesterday or any day before yesterday.

### isFutureDay `(day: date) ⇒ bool`

Returns `true` if `day` is in the future, e.g. is tomorrow or any day after tomorrow.

### isDayBetween `(day: date, day1: date, day2: date) ⇒ bool`

Returns `true` if `day` is between the days `day1` and `day2`, without including those days.

### addDayToRange `(day: date, range: ?object<from: ?date, to: ?date>) ⇒ object<from: ?date, to: ?date>`

Add `day` to a range of days, returning a new range including that day. A range is an object with `from` and `to` keys.

See the [range example](../examples/selecting-range.md) for an example using this function.

```js
import { DateUtils } from "react-day-picker";

const range = {
  from: new Date(2015, 5, 14),
  to: new Date(2015, 5, 18)
}
const newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);

console.log(newRange.from) // 2015-05-24
```

### isDayInRange `(day: date, range: object<from: ?date, to: ?date>) ⇒ bool`

Returns `true` if `day` is included in the specified range of days.  See the [range example](../examples/selecting-range.md) for an example using this function.

### getWeekNumber `(day: date) ⇒ number`

Returns the year's week number (as per ISO, i.e. with the week starting from Monday) for the given day.
