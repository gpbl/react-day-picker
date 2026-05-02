# Type Alias: Selection\<T\>

> **Selection**\<`T`\> = \{ `isSelected`: (`date`) => `boolean`; `select`: [`SelectHandler`](SelectHandler.md)\<`T`\> \| `undefined`; `selected`: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`; \}

Defined in: [packages/react-day-picker/src/types/selection.ts:4](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/selection.ts#L4)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DayPickerProps`](DayPickerProps.md) |

## Properties

### isSelected

> **isSelected**: (`date`) => `boolean`

Defined in: [packages/react-day-picker/src/types/selection.ts:10](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/selection.ts#L10)

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

Defined in: [packages/react-day-picker/src/types/selection.ts:8](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/selection.ts#L8)

Set a selection.

***

### selected

> **selected**: [`SelectedValue`](SelectedValue.md)\<`T`\> \| `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:6](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/selection.ts#L6)

The selected date(s).
