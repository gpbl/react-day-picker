# Type Alias: Modifiers

> **Modifiers** = `Record`\<`string`, `boolean`\>

Defined in: [src/types/shared.ts:277](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L277)

Represents the modifiers that match a specific day in the calendar.

## Example

```ts
const modifiers: Modifiers = {
    today: true, // The day is today
    selected: false, // The day is not selected
    weekend: true, // Custom modifier for weekends
  };
```

## See

https://daypicker.dev/guides/custom-modifiers
