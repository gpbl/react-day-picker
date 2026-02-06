# Type Alias: ModifiersClassNames

> **ModifiersClassNames** = `Record`\<`string`, `string`\>

Defined in: [src/types/shared.ts:301](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L301)

The classnames to assign to each day element matching a modifier.

## Example

```ts
const modifiersClassNames: ModifiersClassNames = {
    today: "today", // Use the "today" class for the today's day
    selected: "highlight", // Use the "highlight" class for the selected day
    weekend: "weekend", // Use the "weekend" class for the weekend days
  };
```
