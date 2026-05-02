# Type Alias: SelectHandlerMulti\<T\>

> **SelectHandlerMulti**\<`T`\> = (`triggerDate`, `modifiers`, `e`) => `T`\[`"required"`\] *extends* `true` ? `Date`[] : `Date`[] \| `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:54](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/selection.ts#L54)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \{ `required?`: `boolean`; \} |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `triggerDate` | `Date` |
| `modifiers` | [`Modifiers`](Modifiers.md) |
| `e` | `React.MouseEvent` \| `React.KeyboardEvent` |

## Returns

`T`\[`"required"`\] *extends* `true` ? `Date`[] : `Date`[] \| `undefined`
