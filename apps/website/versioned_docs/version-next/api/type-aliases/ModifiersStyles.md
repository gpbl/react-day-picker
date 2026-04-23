# Type Alias: ModifiersStyles

> **ModifiersStyles** = `Record`\<`string`, `CSSProperties`\>

Defined in: [src/types/shared.ts:289](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L289)

The style to apply to each day element matching a modifier.

## Example

```ts
const modifiersStyles: ModifiersStyles = {
    today: { color: "red" },
    selected: { backgroundColor: "blue" },
    weekend: { color: "green" },
  };
```
