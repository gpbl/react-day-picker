# Type Alias: DateBefore

> **DateBefore** = \{ `before`: `Date`; \}

Defined in: [src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L177)

Match a day falling before the specified date (exclusive).

## Example

```ts
// Match days before February 2, 2019
  const matcher: DateBefore = { before: new Date(2019, 1, 2) };
```

## Properties

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/fee7c41a14a33ffe420a52725cc230af72faa526/src/types/shared.ts#L177)
