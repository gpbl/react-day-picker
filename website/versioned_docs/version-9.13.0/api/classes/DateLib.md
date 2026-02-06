# Class: DateLib

Defined in: [src/classes/DateLib.ts:116](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L116)

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

Defined in: [src/classes/DateLib.ts:129](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L129)

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

Defined in: [src/classes/DateLib.ts:287](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L287)

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

Defined in: [src/classes/DateLib.ts:300](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L300)

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

Defined in: [src/classes/DateLib.ts:313](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L313)

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

Defined in: [src/classes/DateLib.ts:326](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L326)

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

Defined in: [src/classes/DateLib.ts:339](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L339)

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

Defined in: [src/classes/DateLib.ts:352](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L352)

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

Defined in: [src/classes/DateLib.ts:363](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L363)

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

Defined in: [src/classes/DateLib.ts:376](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L376)

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

Defined in: [src/classes/DateLib.ts:401](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L401)

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

Defined in: [src/classes/DateLib.ts:413](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L413)

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

Defined in: [src/classes/DateLib.ts:425](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L425)

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

Defined in: [src/classes/DateLib.ts:437](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L437)

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

Defined in: [src/classes/DateLib.ts:449](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L449)

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

Defined in: [src/classes/DateLib.ts:462](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L462)

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

Defined in: [src/classes/DateLib.ts:201](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L201)

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

Defined in: [src/classes/DateLib.ts:180](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L180)

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

Defined in: [src/classes/DateLib.ts:482](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L482)

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

Defined in: [src/classes/DateLib.ts:494](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L494)

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

Defined in: [src/classes/DateLib.ts:188](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L188)

Returns the preferred ordering for month and year labels for the current
locale.

#### Returns

[`MonthYearOrder`](../type-aliases/MonthYearOrder.md)

***

### getWeek()

> **getWeek**(`date`, `_options?`): `number`

Defined in: [src/classes/DateLib.ts:518](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L518)

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

Defined in: [src/classes/DateLib.ts:506](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L506)

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

Defined in: [src/classes/DateLib.ts:531](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L531)

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

Defined in: [src/classes/DateLib.ts:544](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L544)

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

Defined in: [src/classes/DateLib.ts:569](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L569)

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

Defined in: [src/classes/DateLib.ts:582](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L582)

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

Defined in: [src/classes/DateLib.ts:595](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L595)

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

Defined in: [src/classes/DateLib.ts:607](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L607)

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

Defined in: [src/classes/DateLib.ts:617](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L617)

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

Defined in: [src/classes/DateLib.ts:270](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L270)

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

Defined in: [src/classes/DateLib.ts:628](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L628)

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

Defined in: [src/classes/DateLib.ts:641](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L641)

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

Defined in: [src/classes/DateLib.ts:653](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L653)

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

Defined in: [src/classes/DateLib.ts:665](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L665)

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

Defined in: [src/classes/DateLib.ts:677](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L677)

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

Defined in: [src/classes/DateLib.ts:689](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L689)

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

Defined in: [src/classes/DateLib.ts:701](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L701)

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

Defined in: [src/classes/DateLib.ts:713](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L713)

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

Defined in: [src/classes/DateLib.ts:250](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L250)

Creates a new `Date` object representing today's date.

#### Returns

`Date`

A `Date` object for today's date.

#### Since

9.5.0

## Properties

### isDate()

> **isDate**: (`value`) => `value is Date`

Defined in: [src/classes/DateLib.ts:556](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L556)

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

Defined in: [src/classes/DateLib.ts:118](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L118)

The options for configuring the date library.

***

### overrides?

> `readonly` `optional` **overrides**: `Partial`\<`DateLib`\>

Defined in: [src/classes/DateLib.ts:121](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/DateLib.ts#L121)

Overrides for the default date library functions.
