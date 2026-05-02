# Type Alias: Modifiers

> **Modifiers** = `Record`\<`string`, `boolean`\>

Defined in: [packages/react-day-picker/src/types/shared.ts:277](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L277)

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
