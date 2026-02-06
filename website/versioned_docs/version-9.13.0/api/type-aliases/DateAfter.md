# Type Alias: DateAfter

> **DateAfter** = \{ `after`: `Date`; \}

Defined in: [src/types/shared.ts:168](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L168)

Match a day falling after the specified date (exclusive).

## Example

```ts
// Match days after February 2, 2019
  const matcher: DateAfter = { after: new Date(2019, 1, 2) };
```

## Properties

### after

> **after**: `Date`

Defined in: [src/types/shared.ts:168](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L168)
