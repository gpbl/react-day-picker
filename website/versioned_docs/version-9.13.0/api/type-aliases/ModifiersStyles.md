# Type Alias: ModifiersStyles

> **ModifiersStyles** = `Record`\<`string`, `CSSProperties`\>

Defined in: [src/types/shared.ts:289](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L289)

The style to apply to each day element matching a modifier.

## Example

```ts
const modifiersStyles: ModifiersStyles = {
    today: { color: "red" },
    selected: { backgroundColor: "blue" },
    weekend: { color: "green" },
  };
```
