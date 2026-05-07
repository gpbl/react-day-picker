# Interface: DateLibOptions

Defined in: [packages/react-day-picker/src/classes/DateLib.ts:86](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/classes/DateLib.ts#L86)

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

> `optional` **Date?**: `DateConstructor`

Defined in: [packages/react-day-picker/src/classes/DateLib.ts:91](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/classes/DateLib.ts#L91)

A constructor for the `Date` object.

***

### locale?

> `optional` **locale?**: [`DayPickerLocale`](DayPickerLocale.md)

Defined in: [packages/react-day-picker/src/classes/DateLib.ts:93](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/classes/DateLib.ts#L93)

A locale to use for formatting dates.

#### Overrides

`DateFnsFormatOptions.locale`

***

### numerals?

> `optional` **numerals?**: [`Numerals`](../type-aliases/Numerals.md)

Defined in: [packages/react-day-picker/src/classes/DateLib.ts:105](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/classes/DateLib.ts#L105)

The numbering system to use for formatting numbers.

#### Since

9.5.0

***

### timeZone?

> `optional` **timeZone?**: `string`

Defined in: [packages/react-day-picker/src/classes/DateLib.ts:99](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/classes/DateLib.ts#L99)

A time zone to use for dates.

#### Since

9.5.0
