# Type Alias: SelectHandlerRange\<T\>

> **SelectHandlerRange**\<`T`\> = (`triggerDate`, `modifiers`, `e`) => `T`\[`"required"`\] *extends* `true` ? [`DateRange`](DateRange.md) : [`DateRange`](DateRange.md) \| `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:68](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L68)

Selection handler for range selection mode.

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
