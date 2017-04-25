# DateUtils

`DateUtils` is a set of functions useful to work with dates and modifiers.

```js
import { DateUtils } from "react-day-picker";
console.log(DateUtils.isPastDay(new Date())); // false
```

## Functions

### addMonths `(d: Date, n: Number) ⇒ Date`

Return `d` as a new date with `n` months added. Missing days will be added to the final date, e.g. 2016-03-31 + 1 month = 2016-05-01 (the 31th of April is missing).

### clone `(d: Date) ⇒ Date`

Clone the date `d` returning a new date with the same time.

### isDayAfter `(day1: ?Date, day2: ?Date) ⇒ Bool`

Return `true` if the first day is after the second day.

### isDayBefore `(day1: ?Date, day2: ?Date) ⇒ Bool`

Return `true` if the first day is before the second day.

### isSameDay `(day1: ?Date, day2: ?Date) ⇒ Bool`

Return `true` if `day1` and `day2` are the same day.

### isPastDay `(day: Date) ⇒ Bool`

Returns `true` if `day` is in the past, e.g. is yesterday or any day before yesterday.

### isFutureDay `(day: Date) ⇒ Bool`

Returns `true` if `day` is in the future, e.g. is tomorrow or any day after tomorrow.

### isDayBetween `(day: Date, day1: Date, day2: Date) ⇒ Bool`

Returns `true` if `day` is between the days `day1` and `day2`, without including those days.

### addDayToRange `(day: Date, range: ?object<from: ?Date, to: ?Date>) ⇒ Object<from: ?Date, to: ?Date>`

Add `day` to a range of days, returning a new range including that day. A range is an object with `from` and `to` keys.

See the [range example](http://react-day-picker.js.org/examples?range) for an example using this function.

```js
import { DateUtils } from "react-day-picker";

const range = {
  from: new Date(2015, 5, 14),
  to: new Date(2015, 5, 18)
}
const newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);

console.log(newRange.from) // 2015-05-24
```

### isDayInRange `(day: Date, range: object<from: ?Date, to: ?Date>) ⇒ Bool`

Returns `true` if `day` is included in the specified range of days.  See the [range example](http://react-day-picker.js.org/examples?range) for an example using this function.
