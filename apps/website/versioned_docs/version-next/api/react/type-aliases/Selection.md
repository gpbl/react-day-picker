# Type Alias: Selection\<T\>

> **Selection**\<`T`\> = \{ `isSelected`: (`date`) => `boolean`; `select`: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`; `selected`: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`; \}

Defined in: [packages/react-day-picker/src/types/selection.ts:5](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L5)

Selection state and helpers for the active selection mode.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DayPickerProps`](DayPickerProps.md) |

## Properties

### isSelected

> **isSelected**: (`date`) => `boolean`

Defined in: [packages/react-day-picker/src/types/selection.ts:11](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L11)

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

Defined in: [packages/react-day-picker/src/types/selection.ts:9](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L9)

Set a selection.

***

### selected

> **selected**: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:7](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L7)

The selected date(s).
