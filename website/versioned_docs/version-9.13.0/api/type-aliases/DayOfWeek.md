# Type Alias: DayOfWeek

> **DayOfWeek** = \{ `dayOfWeek`: `number` \| `number`[]; \}

Defined in: [src/types/shared.ts:213](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L213)

Match days of the week (`0-6`, where `0` is Sunday).

## Example

```ts
// Match Sundays
  const matcher: DayOfWeek = { dayOfWeek: 0 };
  // Match weekends
  const matcher: DayOfWeek = { dayOfWeek: [0, 6] };
```

## Properties

### dayOfWeek

> **dayOfWeek**: `number` \| `number`[]

Defined in: [src/types/shared.ts:213](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L213)
