# Type Alias: Modifiers

> **Modifiers** = `Record`\<`string`, `boolean`\>

Defined in: [packages/react-day-picker/src/types/shared.ts:277](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/types/shared.ts#L277)

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
