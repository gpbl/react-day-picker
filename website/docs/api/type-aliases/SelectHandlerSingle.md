# Type Alias: SelectHandlerSingle()\<T\>

> **SelectHandlerSingle**\<`T`\> = (`triggerDate`, `modifiers`, `e`) => `T`\[`"required"`\] *extends* `true` ? `Date` : `Date` \| `undefined`

Defined in: [src/types/selection.ts:47](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/selection.ts#L47)

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

`T`\[`"required"`\] *extends* `true` ? `Date` : `Date` \| `undefined`
