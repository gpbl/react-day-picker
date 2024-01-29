# Type alias: SelectHandler\<T\>

> **SelectHandler**\<`T`\>: (`selected`, `date`, `modifiers`, `e`) => `void`

The callback called when the user select a days from the calendar.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`Mode`](/api/type-aliases/Mode.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `selected` | [`Selected`](/api/type-aliases/Selected.md)\<`T`\> |
| `date` | `Date` |
| `modifiers` | [`Modifiers`](/api/type-aliases/Modifiers.md) |
| `e` | `MouseEvent` \| `KeyboardEvent` |

## Returns

`void`

## Source

[Users/gp/Developer/react-day-picker/v9/src/types/props.ts:580](https://github.com/gpbl/react-day-picker/blob/005599683/src/types/props.ts#L580)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
