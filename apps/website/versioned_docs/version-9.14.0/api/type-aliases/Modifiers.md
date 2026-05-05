# Type Alias: Modifiers

> **Modifiers** = `Record`\<`string`, `boolean`\>

Defined in: [src/types/shared.ts:303](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L303)

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
