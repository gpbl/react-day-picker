# Class: CalendarMonth

Defined in: [packages/react-day-picker/src/classes/CalendarMonth.ts:9](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/classes/CalendarMonth.ts#L9)

Represents a month in a calendar year.

A `CalendarMonth` contains the weeks within the month and the date of the
month.

## Constructors

### Constructor

> **new CalendarMonth**(`month`, `weeks`): `CalendarMonth`

Defined in: [packages/react-day-picker/src/classes/CalendarMonth.ts:10](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/classes/CalendarMonth.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `month` | `Date` |
| `weeks` | [`CalendarWeek`](CalendarWeek.md)[] |

#### Returns

`CalendarMonth`

## Properties

### date

> **date**: `Date`

Defined in: [packages/react-day-picker/src/classes/CalendarMonth.ts:16](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/classes/CalendarMonth.ts#L16)

The date representing the first day of the month.

***

### weeks

> **weeks**: [`CalendarWeek`](CalendarWeek.md)[]

Defined in: [packages/react-day-picker/src/classes/CalendarMonth.ts:19](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/classes/CalendarMonth.ts#L19)

The weeks that belong to this month.
