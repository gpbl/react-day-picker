# Type Alias: ModifiersStyles

> **ModifiersStyles** = `Record`\<`string`, `CSSProperties`\>

Defined in: [packages/react-day-picker/src/types/shared.ts:289](https://github.com/gpbl/react-day-picker/blob/4f05162215b4f525bb715406bc3c84dac5de42bb/packages/react-day-picker/src/types/shared.ts#L289)

The style to apply to each day element matching a modifier.

## Example

```ts
const modifiersStyles: ModifiersStyles = {
    today: { color: "red" },
    selected: { backgroundColor: "blue" },
    weekend: { color: "green" },
  };
```
