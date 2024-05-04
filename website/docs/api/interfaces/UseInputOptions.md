# Interface: UseInputOptions

## Extends

- `Pick` \<[`DayPickerBase`](DayPickerBase.md), `"locale"` \| `"fromDate"` \| `"toDate"` \| `"fromMonth"` \| `"toMonth"` \| `"fromYear"` \| `"toYear"` \| `"today"`\>

## Properties

### defaultSelected?

> `optional` **defaultSelected**: `Date`

The initially selected date

#### Source

[src/hooks/useInput/useInput.ts:53](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L53)

***

### format?

> `optional` **format**: `string`

The format string for formatting the input field. See
https://date-fns.org/docs/format for a list of format strings.

#### Default Value

```ts
PP
```

#### Source

[src/hooks/useInput/useInput.ts:60](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L60)

***

### fromDate?

> `optional` **fromDate**: `Date`

The earliest day to start the month navigation.

#### Inherited from

`Pick.fromDate`

#### Source

[src/types/DayPickerBase.ts:103](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L103)

***

### fromMonth?

> `optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

#### Inherited from

`Pick.fromMonth`

#### Source

[src/types/DayPickerBase.ts:107](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L107)

***

### fromYear?

> `optional` **fromYear**: `number`

The earliest year to start the month navigation.

#### Inherited from

`Pick.fromYear`

#### Source

[src/types/DayPickerBase.ts:111](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L111)

***

### locale?

> `optional` **locale**: `Locale`

The date-fns locale object used to localize dates.

#### Default Value

```ts
en-US
```

#### Inherited from

`Pick.locale`

#### Source

[src/types/DayPickerBase.ts:246](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L246)

***

### required?

> `optional` **required**: `boolean`

Make the selection required.

#### Source

[src/hooks/useInput/useInput.ts:62](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/hooks/useInput/useInput.ts#L62)

***

### toDate?

> `optional` **toDate**: `Date`

The latest day to end the month navigation.

#### Inherited from

`Pick.toDate`

#### Source

[src/types/DayPickerBase.ts:105](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L105)

***

### toMonth?

> `optional` **toMonth**: `Date`

The latest month to end the month navigation.

#### Inherited from

`Pick.toMonth`

#### Source

[src/types/DayPickerBase.ts:109](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L109)

***

### toYear?

> `optional` **toYear**: `number`

The latest year to end the month navigation.

#### Inherited from

`Pick.toYear`

#### Source

[src/types/DayPickerBase.ts:113](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L113)

***

### today?

> `optional` **today**: `Date`

The today’s date. Default is the current date. This Date will get the
`today` modifier to style the day.

#### Inherited from

`Pick.today`

#### Source

[src/types/DayPickerBase.ts:237](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/DayPickerBase.ts#L237)
