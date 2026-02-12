# Interface: DateLibOptions

Defined in: [src/classes/DateLib.ts:96](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L96)

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

Defined in: [src/classes/DateLib.ts:101](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L101)

A constructor for the `Date` object.

***

### locale?

> `optional` **locale**: [`DayPickerLocale`](DayPickerLocale.md)

Defined in: [src/classes/DateLib.ts:103](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L103)

A locale to use for formatting dates.

#### Overrides

`DateFnsFormatOptions.locale`

***

### numerals?

> `optional` **numerals**: [`Numerals`](../type-aliases/Numerals.md)

Defined in: [src/classes/DateLib.ts:115](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L115)

The numbering system to use for formatting numbers.

#### Since

9.5.0

***

### timeZone?

> `optional` **timeZone**: `string`

Defined in: [src/classes/DateLib.ts:109](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/classes/DateLib.ts#L109)

A time zone to use for dates.

#### Since

9.5.0
