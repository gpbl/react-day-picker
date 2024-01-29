# Type alias: SelectionContext

> **SelectionContext**: `Object`

## Type declaration

### excluded

> **excluded**: [`Matcher`](/api/type-aliases/Matcher.md)[]

### isExcluded

> **isExcluded**: (`date`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

### isSelected

> **isSelected**: (`date`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

### selected

> **selected**: [`Selected`](/api/type-aliases/Selected.md)\<[`Mode`](/api/type-aliases/Mode.md)\> \| `undefined`

The currently selected value.

### setSelected

> **setSelected**: (`date`, `modifiers`, `e`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `date` | `Date` |
| `modifiers` | [`Modifiers`](/api/type-aliases/Modifiers.md) |
| `e` | `MouseEvent` \| `KeyboardEvent` |

#### Returns

`void`

## Source

[Users/gp/Developer/react-day-picker/v9/src/contexts/SelectionContext/SelectionContext.tsx:19](https://github.com/gpbl/react-day-picker/blob/005599683/src/contexts/SelectionContext/SelectionContext.tsx#L19)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
