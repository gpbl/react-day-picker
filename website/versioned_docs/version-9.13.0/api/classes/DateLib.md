# Class: DateLib

Defined in: [src/classes/DateLib.ts:127](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L127)

A wrapper class around [date-fns](http://date-fns.org) that provides utility
methods for date manipulation and formatting.

## Since

9.2.0

## Example

```ts
const dateLib = new DateLib({ locale: es });
  const newDate = dateLib.addDays(new Date(), 5);
```

## Constructors

### Constructor

> **new DateLib**(`options?`, `overrides?`): `DateLib`

Defined in: [src/classes/DateLib.ts:140](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L140)

Creates an instance of `DateLib`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`DateLibOptions`](../interfaces/DateLibOptions.md) | Configuration options for the date library. |
| `overrides?` | `Partial`\<`DateLib`\> | Custom overrides for the date library functions. |

#### Returns

`DateLib`

## Methods

### addDays()

> **addDays**(`date`, `amount`): `Date`

Defined in: [src/classes/DateLib.ts:304](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L304)

Adds the specified number of days to the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to add days to. |
| `amount` | `number` | The number of days to add. |

#### Returns

`Date`

The new date with the days added.

***

### addMonths()

> **addMonths**(`date`, `amount`): `Date`

Defined in: [src/classes/DateLib.ts:317](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L317)

Adds the specified number of months to the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to add months to. |
| `amount` | `number` | The number of months to add. |

#### Returns

`Date`

The new date with the months added.

***

### addWeeks()

> **addWeeks**(`date`, `amount`): `Date`

Defined in: [src/classes/DateLib.ts:330](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L330)

Adds the specified number of weeks to the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to add weeks to. |
| `amount` | `number` | The number of weeks to add. |

#### Returns

`Date`

The new date with the weeks added.

***

### addYears()

> **addYears**(`date`, `amount`): `Date`

Defined in: [src/classes/DateLib.ts:343](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L343)

Adds the specified number of years to the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to add years to. |
| `amount` | `number` | The number of years to add. |

#### Returns

`Date`

The new date with the years added.

***

### differenceInCalendarDays()

> **differenceInCalendarDays**(`dateLeft`, `dateRight`): `number`

Defined in: [src/classes/DateLib.ts:356](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L356)

Returns the number of calendar days between the given dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dateLeft` | `Date` | The later date. |
| `dateRight` | `Date` | The earlier date. |

#### Returns

`number`

The number of calendar days between the dates.

***

### differenceInCalendarMonths()

> **differenceInCalendarMonths**(`dateLeft`, `dateRight`): `number`

Defined in: [src/classes/DateLib.ts:369](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L369)

Returns the number of calendar months between the given dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dateLeft` | `Date` | The later date. |
| `dateRight` | `Date` | The earlier date. |

#### Returns

`number`

The number of calendar months between the dates.

***

### eachMonthOfInterval()

> **eachMonthOfInterval**(`interval`): `Date`[]

Defined in: [src/classes/DateLib.ts:380](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L380)

Returns the months between the given dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `interval` | `Interval` | The interval to get the months for. |

#### Returns

`Date`[]

***

### eachYearOfInterval()

> **eachYearOfInterval**(`interval`): `Date`[]

Defined in: [src/classes/DateLib.ts:393](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L393)

Returns the years between the given dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `interval` | `Interval` | The interval to get the years for. |

#### Returns

`Date`[]

The array of years in the interval.

#### Since

9.11.1

***

### endOfBroadcastWeek()

> **endOfBroadcastWeek**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:418](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L418)

Returns the end of the broadcast week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The end of the broadcast week.

***

### endOfISOWeek()

> **endOfISOWeek**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:430](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L430)

Returns the end of the ISO week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The end of the ISO week.

***

### endOfMonth()

> **endOfMonth**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:442](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L442)

Returns the end of the month for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The end of the month.

***

### endOfWeek()

> **endOfWeek**(`date`, `options?`): `Date`

Defined in: [src/classes/DateLib.ts:454](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L454)

Returns the end of the week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |
| `options?` | `EndOfWeekOptions`\<`Date`\> | - |

#### Returns

`Date`

The end of the week.

***

### endOfYear()

> **endOfYear**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:466](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L466)

Returns the end of the year for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The end of the year.

***

### format()

> **format**(`date`, `formatStr`, `_options?`): `string`

Defined in: [src/classes/DateLib.ts:479](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L479)

Formats the given date using the specified format string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to format. |
| `formatStr` | `string` | The format string. |
| `_options?` | `FormatOptions` | - |

#### Returns

`string`

The formatted date string.

***

### formatMonthYear()

> **formatMonthYear**(`date`): `string`

Defined in: [src/classes/DateLib.ts:212](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L212)

Formats the month/year pair respecting locale conventions.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `Date` |

#### Returns

`string`

#### Since

9.11.0

***

### formatNumber()

> **formatNumber**(`value`): `string`

Defined in: [src/classes/DateLib.ts:191](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L191)

Formats a number using the configured numbering system.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` \| `number` | The number to format. |

#### Returns

`string`

The formatted number as a string.

#### Since

9.5.0

***

### getISOWeek()

> **getISOWeek**(`date`): `number`

Defined in: [src/classes/DateLib.ts:499](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L499)

Returns the ISO week number for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to get the ISO week number for. |

#### Returns

`number`

The ISO week number.

***

### getMonth()

> **getMonth**(`date`, `_options?`): `number`

Defined in: [src/classes/DateLib.ts:511](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L511)

Returns the month of the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to get the month for. |
| `_options?` | `GetMonthOptions` | - |

#### Returns

`number`

The month.

***

### getMonthYearOrder()

> **getMonthYearOrder**(): [`MonthYearOrder`](../type-aliases/MonthYearOrder.md)

Defined in: [src/classes/DateLib.ts:199](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L199)

Returns the preferred ordering for month and year labels for the current
locale.

#### Returns

[`MonthYearOrder`](../type-aliases/MonthYearOrder.md)

***

### getWeek()

> **getWeek**(`date`, `_options?`): `number`

Defined in: [src/classes/DateLib.ts:535](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L535)

Returns the local week number for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to get the week number for. |
| `_options?` | `GetWeekOptions` | - |

#### Returns

`number`

The week number.

***

### getYear()

> **getYear**(`date`, `_options?`): `number`

Defined in: [src/classes/DateLib.ts:523](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L523)

Returns the year of the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to get the year for. |
| `_options?` | `GetYearOptions` | - |

#### Returns

`number`

The year.

***

### isAfter()

> **isAfter**(`date`, `dateToCompare`): `boolean`

Defined in: [src/classes/DateLib.ts:548](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L548)

Checks if the first date is after the second date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to compare. |
| `dateToCompare` | `Date` | The date to compare with. |

#### Returns

`boolean`

True if the first date is after the second date.

***

### isBefore()

> **isBefore**(`date`, `dateToCompare`): `boolean`

Defined in: [src/classes/DateLib.ts:561](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L561)

Checks if the first date is before the second date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to compare. |
| `dateToCompare` | `Date` | The date to compare with. |

#### Returns

`boolean`

True if the first date is before the second date.

***

### isSameDay()

> **isSameDay**(`dateLeft`, `dateRight`): `boolean`

Defined in: [src/classes/DateLib.ts:586](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L586)

Checks if the given dates are on the same day.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dateLeft` | `Date` | The first date to compare. |
| `dateRight` | `Date` | The second date to compare. |

#### Returns

`boolean`

True if the dates are on the same day.

***

### isSameMonth()

> **isSameMonth**(`dateLeft`, `dateRight`): `boolean`

Defined in: [src/classes/DateLib.ts:599](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L599)

Checks if the given dates are in the same month.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dateLeft` | `Date` | The first date to compare. |
| `dateRight` | `Date` | The second date to compare. |

#### Returns

`boolean`

True if the dates are in the same month.

***

### isSameYear()

> **isSameYear**(`dateLeft`, `dateRight`): `boolean`

Defined in: [src/classes/DateLib.ts:612](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L612)

Checks if the given dates are in the same year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dateLeft` | `Date` | The first date to compare. |
| `dateRight` | `Date` | The second date to compare. |

#### Returns

`boolean`

True if the dates are in the same year.

***

### max()

> **max**(`dates`): `Date`

Defined in: [src/classes/DateLib.ts:624](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L624)

Returns the latest date in the given array of dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dates` | `Date`[] | The array of dates to compare. |

#### Returns

`Date`

The latest date.

***

### min()

> **min**(`dates`): `Date`

Defined in: [src/classes/DateLib.ts:634](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L634)

Returns the earliest date in the given array of dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dates` | `Date`[] | The array of dates to compare. |

#### Returns

`Date`

The earliest date.

***

### newDate()

> **newDate**(`year`, `monthIndex`, `date`): `Date`

Defined in: [src/classes/DateLib.ts:287](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L287)

Creates a new `Date` object with the specified year, month, and day.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year. |
| `monthIndex` | `number` | The month (0-11). |
| `date` | `number` | The day of the month. |

#### Returns

`Date`

A new `Date` object.

#### Since

9.5.0

***

### setMonth()

> **setMonth**(`date`, `month`): `Date`

Defined in: [src/classes/DateLib.ts:645](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L645)

Sets the month of the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to set the month on. |
| `month` | `number` | The month to set (0-11). |

#### Returns

`Date`

The new date with the month set.

***

### setYear()

> **setYear**(`date`, `year`): `Date`

Defined in: [src/classes/DateLib.ts:658](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L658)

Sets the year of the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to set the year on. |
| `year` | `number` | The year to set. |

#### Returns

`Date`

The new date with the year set.

***

### startOfBroadcastWeek()

> **startOfBroadcastWeek**(`date`, `_dateLib`): `Date`

Defined in: [src/classes/DateLib.ts:670](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L670)

Returns the start of the broadcast week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |
| `_dateLib` | `DateLib` | - |

#### Returns

`Date`

The start of the broadcast week.

***

### startOfDay()

> **startOfDay**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:682](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L682)

Returns the start of the day for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The start of the day.

***

### startOfISOWeek()

> **startOfISOWeek**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:694](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L694)

Returns the start of the ISO week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The start of the ISO week.

***

### startOfMonth()

> **startOfMonth**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:706](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L706)

Returns the start of the month for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The start of the month.

***

### startOfWeek()

> **startOfWeek**(`date`, `_options?`): `Date`

Defined in: [src/classes/DateLib.ts:718](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L718)

Returns the start of the week for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |
| `_options?` | `StartOfWeekOptions`\<`Date`\> | - |

#### Returns

`Date`

The start of the week.

***

### startOfYear()

> **startOfYear**(`date`): `Date`

Defined in: [src/classes/DateLib.ts:730](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L730)

Returns the start of the year for the given date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The original date. |

#### Returns

`Date`

The start of the year.

***

### today()

> **today**(): `Date`

Defined in: [src/classes/DateLib.ts:268](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L268)

Creates a new `Date` object representing today's date.

#### Returns

`Date`

A `Date` object for today's date.

#### Since

9.5.0

## Properties

### ~~Date~~

> **Date**: `DateConstructor`

Defined in: [src/classes/DateLib.ts:260](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L260)

Reference to the built-in Date constructor.

#### Deprecated

Use `newDate()` or `today()`.

***

### isDate()

> **isDate**: (`value`) => `value is Date`

Defined in: [src/classes/DateLib.ts:573](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L573)

Checks if the given value is a Date object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | The value to check. |

#### Returns

`value is Date`

True if the value is a Date object.

***

### options

> `readonly` **options**: [`DateLibOptions`](../interfaces/DateLibOptions.md)

Defined in: [src/classes/DateLib.ts:129](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L129)

The options for configuring the date library.

***

### overrides?

> `readonly` `optional` **overrides**: `Partial`\<`DateLib`\>

Defined in: [src/classes/DateLib.ts:132](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L132)

Overrides for the default date library functions.
