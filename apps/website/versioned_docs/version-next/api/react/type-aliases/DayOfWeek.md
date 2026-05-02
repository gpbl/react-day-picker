# Type Alias: DayOfWeek

> **DayOfWeek** = \{ `dayOfWeek`: `number` \| `number`[]; \}

Defined in: [packages/react-day-picker/src/types/shared.ts:213](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L213)

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

Defined in: [packages/react-day-picker/src/types/shared.ts:213](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L213)
