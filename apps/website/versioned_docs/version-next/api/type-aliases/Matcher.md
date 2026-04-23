# Type Alias: Matcher

> **Matcher** = `boolean` \| (`date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](DateRange.md) \| [`DateBefore`](DateBefore.md) \| [`DateAfter`](DateAfter.md) \| [`DateInterval`](DateInterval.md) \| [`DayOfWeek`](DayOfWeek.md)

Defined in: [src/types/shared.ts:150](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L150)

A value or a function that matches specific days.

## Example

```ts
// Match weekends and specific holidays
  const matcher: Matcher = [
    { dayOfWeek: [0, 6] }, // Weekends
    { from: new Date(2023, 11, 24), to: new Date(2023, 11, 26) }, // Christmas
  ];
```
