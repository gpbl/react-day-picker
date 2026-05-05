# Type Alias: Matcher

> **Matcher** = `boolean` \| ((`date`) => `boolean`) \| `Date` \| `Date`[] \| [`DateRange`](DateRange.md) \| [`DateBefore`](DateBefore.md) \| [`DateAfter`](DateAfter.md) \| [`DateInterval`](DateInterval.md) \| [`DayOfWeek`](DayOfWeek.md)

Defined in: [packages/react-day-picker/src/types/shared.ts:150](https://github.com/gpbl/react-day-picker/blob/88d4318764b878667a386ffb8b3f9683358c8564/packages/react-day-picker/src/types/shared.ts#L150)

A value or a function that matches specific days.

## Example

```ts
// Match weekends and specific holidays
  const matcher: Matcher = [
    { dayOfWeek: [0, 6] }, // Weekends
    { from: new Date(2023, 11, 24), to: new Date(2023, 11, 26) }, // Christmas
  ];
```
