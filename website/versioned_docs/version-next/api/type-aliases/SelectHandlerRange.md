# Type Alias: SelectHandlerRange()\<T\>

> **SelectHandlerRange**\<`T`\> = (`triggerDate`, `modifiers`, `e`) => `T`\[`"required"`\] *extends* `true` ? [`DateRange`](DateRange.md) : [`DateRange`](DateRange.md) \| `undefined`

Defined in: [src/types/selection.ts:60](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/selection.ts#L60)

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

`T`\[`"required"`\] *extends* `true` ? [`DateRange`](DateRange.md) : [`DateRange`](DateRange.md) \| `undefined`
