# Type Alias: DateBefore

> **DateBefore** = \{ `before`: `Date`; \}

Defined in: [src/types/shared.ts:203](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L203)

Match a day falling before the specified date (exclusive).

## Example

```ts
// Match days before February 2, 2019
  const matcher: DateBefore = { before: new Date(2019, 1, 2) };
```

## Properties

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:203](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L203)
