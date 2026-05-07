# Type Alias: SelectedValue\<T\>

> **SelectedValue**\<`T`\> = `T` *extends* \{ `mode`: `"single"`; `required?`: `boolean`; \} ? [`SelectedSingle`](SelectedSingle.md)\<`T`\> : `T` *extends* \{ `mode`: `"multiple"`; `required?`: `boolean`; \} ? [`SelectedMulti`](SelectedMulti.md)\<`T`\> : `T` *extends* \{ `mode`: `"range"`; `required?`: `boolean`; \} ? [`SelectedRange`](SelectedRange.md)\<`T`\> : `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:43](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L43)

Represents the selected value based on the selection mode.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Example

```ts
// Single selection mode
  const selected: SelectedValue<{ mode: "single" }> = new Date();

  // Multiple selection mode
  const selected: SelectedValue<{ mode: "multiple" }> = [
    new Date(),
    new Date(),
  ];

  // Range selection mode
  const selected: SelectedValue<{ mode: "range" }> = {
    from: new Date(),
    to: new Date(),
  };
```
