# Type Alias: Matcher

> **Matcher** = `boolean` \| (`date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](DateRange.md) \| [`DateBefore`](DateBefore.md) \| [`DateAfter`](DateAfter.md) \| [`DateInterval`](DateInterval.md) \| [`DayOfWeek`](DayOfWeek.md)

Defined in: [src/types/shared.ts:176](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L176)

A value or a function that matches specific days.

## Example

```ts
// Match weekends and specific holidays
  const matcher: Matcher = [
    { dayOfWeek: [0, 6] }, // Weekends
    { from: new Date(2023, 11, 24), to: new Date(2023, 11, 26) }, // Christmas
  ];
```
