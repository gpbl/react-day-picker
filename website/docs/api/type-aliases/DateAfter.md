# Type Alias: DateAfter

> **DateAfter** = \{ `after`: `Date`; \}

Defined in: [src/types/shared.ts:194](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L194)

Match a day falling after the specified date (exclusive).

## Example

```ts
// Match days after February 2, 2019
  const matcher: DateAfter = { after: new Date(2019, 1, 2) };
```

## Properties

### after

> **after**: `Date`

Defined in: [src/types/shared.ts:194](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L194)
