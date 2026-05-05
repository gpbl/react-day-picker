# Type Alias: ModifiersClassNames

> **ModifiersClassNames** = `Record`\<`string`, `string`\>

Defined in: [src/types/shared.ts:327](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L327)

The classnames to assign to each day element matching a modifier.

## Example

```ts
const modifiersClassNames: ModifiersClassNames = {
    today: "today", // Use the "today" class for the today's day
    selected: "highlight", // Use the "highlight" class for the selected day
    weekend: "weekend", // Use the "weekend" class for the weekend days
  };
```
