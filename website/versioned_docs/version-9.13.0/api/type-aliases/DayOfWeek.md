# Type Alias: DayOfWeek

> **DayOfWeek** = \{ `dayOfWeek`: `number` \| `number`[]; \}

Defined in: [src/types/shared.ts:239](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L239)

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

Defined in: [src/types/shared.ts:239](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L239)
