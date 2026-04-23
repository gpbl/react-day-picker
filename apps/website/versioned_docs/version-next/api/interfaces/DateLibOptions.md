# Interface: DateLibOptions

Defined in: [src/classes/DateLib.ts:85](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/classes/DateLib.ts#L85)

The options for the `DateLib` class.

Extends `date-fns` [format](https://date-fns.org/docs/format),
[startOfWeek](https://date-fns.org/docs/startOfWeek) and
[endOfWeek](https://date-fns.org/docs/endOfWeek) options.

## Since

9.2.0

## Extends

- `FormatOptions`.`StartOfWeekOptions`.`EndOfWeekOptions`

## Properties

### Date?

> `optional` **Date**: `DateConstructor`

Defined in: [src/classes/DateLib.ts:90](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/classes/DateLib.ts#L90)

A constructor for the `Date` object.

***

### locale?

> `optional` **locale**: [`DayPickerLocale`](DayPickerLocale.md)

Defined in: [src/classes/DateLib.ts:92](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/classes/DateLib.ts#L92)

A locale to use for formatting dates.

#### Overrides

`DateFnsFormatOptions.locale`

***

### numerals?

> `optional` **numerals**: [`Numerals`](../type-aliases/Numerals.md)

Defined in: [src/classes/DateLib.ts:104](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/classes/DateLib.ts#L104)

The numbering system to use for formatting numbers.

#### Since

9.5.0

***

### timeZone?

> `optional` **timeZone**: `string`

Defined in: [src/classes/DateLib.ts:98](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/classes/DateLib.ts#L98)

A time zone to use for dates.

#### Since

9.5.0
