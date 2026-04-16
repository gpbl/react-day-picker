# Type Alias: SelectedValue\<T\>

> **SelectedValue**\<`T`\> = `T` *extends* \{ `mode`: `"single"`; `required?`: `boolean`; \} ? [`SelectedSingle`](SelectedSingle.md)\<`T`\> : `T` *extends* \{ `mode`: `"multiple"`; `required?`: `boolean`; \} ? [`SelectedMulti`](SelectedMulti.md)\<`T`\> : `T` *extends* \{ `mode`: `"range"`; `required?`: `boolean`; \} ? [`SelectedRange`](SelectedRange.md)\<`T`\> : `undefined`

Defined in: [src/types/selection.ts:39](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/selection.ts#L39)

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
