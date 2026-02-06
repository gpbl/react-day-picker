# Class: CalendarDay

Defined in: [src/classes/CalendarDay.ts:10](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L10)

Represents a day displayed in the calendar.

In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
provides additional information about the day, such as whether it belongs to
the displayed month.

## Constructors

### Constructor

> **new CalendarDay**(`date`, `displayMonth`, `dateLib`): `CalendarDay`

Defined in: [src/classes/CalendarDay.ts:11](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L11)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `date` | `Date` | `undefined` |
| `displayMonth` | `Date` | `undefined` |
| `dateLib` | [`DateLib`](DateLib.md) | `defaultDateLib` |

#### Returns

`CalendarDay`

## Methods

### isEqualTo()

> **isEqualTo**(`day`): `boolean`

Defined in: [src/classes/CalendarDay.ts:82](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L82)

Checks if this day is equal to another `CalendarDay`, considering both the
date and the displayed month.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `day` | `CalendarDay` | The `CalendarDay` to compare with. |

#### Returns

`boolean`

`true` if the days are equal, otherwise `false`.

## Properties

### date

> `readonly` **date**: `Date`

Defined in: [src/classes/CalendarDay.ts:52](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L52)

The date represented by this day.

***

### dateMonthId

> `readonly` **dateMonthId**: `string`

Defined in: [src/classes/CalendarDay.ts:73](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L73)

Stable `yyyy-MM` representation of the date's actual month.

#### Since

V9.11.2

***

### displayMonth

> `readonly` **displayMonth**: `Date`

Defined in: [src/classes/CalendarDay.ts:49](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L49)

The month that is currently displayed in the calendar.

This property is useful for determining if the day belongs to the same
month as the displayed month, especially when `showOutsideDays` is
enabled.

***

### displayMonthId

> `readonly` **displayMonthId**: `string`

Defined in: [src/classes/CalendarDay.ts:66](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L66)

Stable `yyyy-MM` representation of the displayed month.

#### Since

V9.11.2

***

### isoDate

> `readonly` **isoDate**: `string`

Defined in: [src/classes/CalendarDay.ts:59](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L59)

Stable `yyyy-MM-dd` representation for reuse in keys/data attrs.

#### Since

V9.11.2

***

### outside

> `readonly` **outside**: `boolean`

Defined in: [src/classes/CalendarDay.ts:40](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/classes/CalendarDay.ts#L40)

Indicates whether the day does not belong to the displayed month.

If `outside` is `true`, use `displayMonth` to determine the month to which
the day belongs.
