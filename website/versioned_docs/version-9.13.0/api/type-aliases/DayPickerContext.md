# Type Alias: DayPickerContext\<T\>

> **DayPickerContext**\<`T`\> = \{ `classNames`: [`ClassNames`](ClassNames.md); `components`: [`CustomComponents`](CustomComponents.md); `dayPickerProps`: [`DayPickerProps`](DayPickerProps.md); `formatters`: [`Formatters`](Formatters.md); `getModifiers`: (`day`) => [`Modifiers`](Modifiers.md); `goToMonth`: (`month`) => `void`; `isSelected`: (`date`) => `boolean` \| `undefined`; `labels`: [`Labels`](Labels.md); `months`: [`CalendarMonth`](../classes/CalendarMonth.md)[]; `nextMonth`: `Date` \| `undefined`; `previousMonth`: `Date` \| `undefined`; `select`: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`; `selected`: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`; `styles`: `Partial`\<[`Styles`](Styles.md)\> \| `undefined`; \}

Defined in: [src/useDayPicker.ts:34](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L34)

Represents the context for the DayPicker component, providing various
properties and methods to interact with the calendar.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* \{ `mode?`: [`Mode`](Mode.md); `required?`: `boolean`; \} | The type of the DayPicker props, which must optionally include `mode` and `required` properties. This type can be used to refine the type returned by the hook. |

## Properties

### classNames

> **classNames**: [`ClassNames`](ClassNames.md)

Defined in: [src/useDayPicker.ts:56](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L56)

The class names for the UI elements.

***

### components

> **components**: [`CustomComponents`](CustomComponents.md)

Defined in: [src/useDayPicker.ts:54](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L54)

The components used internally by DayPicker.

***

### dayPickerProps

> **dayPickerProps**: [`DayPickerProps`](DayPickerProps.md)

Defined in: [src/useDayPicker.ts:68](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L68)

The props as passed to the DayPicker component.

#### Since

9.3.0

***

### formatters

> **formatters**: [`Formatters`](Formatters.md)

Defined in: [src/useDayPicker.ts:62](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L62)

The formatters used to format the UI elements.

***

### getModifiers()

> **getModifiers**: (`day`) => [`Modifiers`](Modifiers.md)

Defined in: [src/useDayPicker.ts:46](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L46)

Returns the modifiers for the given day.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `day` | [`CalendarDay`](../classes/CalendarDay.md) |

#### Returns

[`Modifiers`](Modifiers.md)

***

### goToMonth()

> **goToMonth**: (`month`) => `void`

Defined in: [src/useDayPicker.ts:44](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L44)

Navigate to the specified month. Will fire the `onMonthChange` callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `month` | `Date` |

#### Returns

`void`

***

### isSelected

> **isSelected**: (`date`) => `boolean` \| `undefined`

Defined in: [src/useDayPicker.ts:52](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L52)

Whether the given date is selected.

***

### labels

> **labels**: [`Labels`](Labels.md)

Defined in: [src/useDayPicker.ts:60](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L60)

The labels used in the user interface.

***

### months

> **months**: [`CalendarMonth`](../classes/CalendarMonth.md)[]

Defined in: [src/useDayPicker.ts:38](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L38)

The months displayed in the calendar.

***

### nextMonth

> **nextMonth**: `Date` \| `undefined`

Defined in: [src/useDayPicker.ts:40](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L40)

The next month to display.

***

### previousMonth

> **previousMonth**: `Date` \| `undefined`

Defined in: [src/useDayPicker.ts:42](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L42)

The previous month to display.

***

### select

> **select**: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`

Defined in: [src/useDayPicker.ts:50](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L50)

Set a selection.

***

### selected

> **selected**: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`

Defined in: [src/useDayPicker.ts:48](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L48)

The selected date(s).

***

### styles

> **styles**: `Partial`\<[`Styles`](Styles.md)\> \| `undefined`

Defined in: [src/useDayPicker.ts:58](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/useDayPicker.ts#L58)

The styles for the UI elements.
