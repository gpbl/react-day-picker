# Type Alias: SelectedRange\<T\>

> **SelectedRange**\<`T`\> = `T`\[`"required"`\] *extends* `true` ? [`DateRange`](DateRange.md) : [`DateRange`](DateRange.md) \| `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:21](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L21)

Selected value for range selection mode, respecting required selections.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \{ `required?`: `boolean`; \} |
