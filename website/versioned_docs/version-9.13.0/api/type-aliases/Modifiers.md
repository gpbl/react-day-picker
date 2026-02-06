# Type Alias: Modifiers

> **Modifiers** = `Record`\<`string`, `boolean`\>

Defined in: [src/types/shared.ts:277](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L277)

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
