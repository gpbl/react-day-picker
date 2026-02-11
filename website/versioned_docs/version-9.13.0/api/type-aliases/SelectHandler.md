# Type Alias: SelectHandler\<T\>

> **SelectHandler**\<`T`\> = `T` *extends* \{ `mode`: `"single"`; \} ? [`SelectHandlerSingle`](SelectHandlerSingle.md)\<`T`\> : `T` *extends* \{ `mode`: `"multiple"`; \} ? [`SelectHandlerMulti`](SelectHandlerMulti.md)\<`T`\> : `T` *extends* \{ `mode`: `"range"`; \} ? [`SelectHandlerRange`](SelectHandlerRange.md)\<`T`\> : `undefined`

Defined in: [src/types/selection.ts:78](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/selection.ts#L78)

The handler to set a selection based on the mode.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \{ `mode?`: [`Mode`](Mode.md); `required?`: `boolean`; \} |

## Example

```ts
const handleSelect: SelectHandler<{ mode: "single" }> = (
    triggerDate,
    modifiers,
    e,
  ) => {
    console.log("Selected date:", triggerDate);
  };
```
