# Type Alias: DateBefore

> **DateBefore** = \{ `before`: `Date`; \}

Defined in: [src/types/shared.ts:203](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L203)

Match a day falling before the specified date (exclusive).

## Example

```ts
// Match days before February 2, 2019
  const matcher: DateBefore = { before: new Date(2019, 1, 2) };
```

## Properties

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:203](https://github.com/gpbl/react-day-picker/blob/bdd54947a9610ac8d7393f5a4c3b8b0c13ca0d5d/src/types/shared.ts#L203)
