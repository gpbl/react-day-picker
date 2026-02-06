# Type Alias: Selection\<T\>

> **Selection**\<`T`\> = \{ `isSelected`: (`date`) => `boolean`; `select`: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`; `selected`: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`; \}

Defined in: [src/types/selection.ts:4](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/selection.ts#L4)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DayPickerProps`](DayPickerProps.md) |

## Properties

### isSelected()

> **isSelected**: (`date`) => `boolean`

Defined in: [src/types/selection.ts:10](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/selection.ts#L10)

Whether the given date is selected.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `Date` |

#### Returns

`boolean`

***

### select

> **select**: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`

Defined in: [src/types/selection.ts:8](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/selection.ts#L8)

Set a selection.

***

### selected

> **selected**: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`

Defined in: [src/types/selection.ts:6](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/selection.ts#L6)

The selected date(s).
