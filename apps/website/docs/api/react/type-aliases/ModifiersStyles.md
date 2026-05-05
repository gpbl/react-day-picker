# Type Alias: ModifiersStyles

> **ModifiersStyles** = `Record`\<`string`, `CSSProperties`\>

Defined in: [packages/react-day-picker/src/types/shared.ts:289](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/types/shared.ts#L289)

The style to apply to each day element matching a modifier.

## Example

```ts
const modifiersStyles: ModifiersStyles = {
    today: { color: "red" },
    selected: { backgroundColor: "blue" },
    weekend: { color: "green" },
  };
```
