# Type Alias: SelectHandler\<T\>

> **SelectHandler**\<`T`\> = `T` *extends* \{ `mode`: `"single"`; \} ? [`SelectHandlerSingle`](SelectHandlerSingle.md)\<`T`\> : `T` *extends* \{ `mode`: `"multiple"`; \} ? [`SelectHandlerMulti`](SelectHandlerMulti.md)\<`T`\> : `T` *extends* \{ `mode`: `"range"`; \} ? [`SelectHandlerRange`](SelectHandlerRange.md)\<`T`\> : `undefined`

Defined in: [packages/react-day-picker/src/types/selection.ts:86](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/selection.ts#L86)

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
