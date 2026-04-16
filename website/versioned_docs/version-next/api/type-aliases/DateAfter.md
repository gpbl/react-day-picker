# Type Alias: DateAfter

> **DateAfter** = \{ `after`: `Date`; \}

Defined in: [src/types/shared.ts:168](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L168)

Match a day falling after the specified date (exclusive).

## Example

```ts
// Match days after February 2, 2019
  const matcher: DateAfter = { after: new Date(2019, 1, 2) };
```

## Properties

### after

> **after**: `Date`

Defined in: [src/types/shared.ts:168](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L168)
