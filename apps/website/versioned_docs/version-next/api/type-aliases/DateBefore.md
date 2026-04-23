# Type Alias: DateBefore

> **DateBefore** = \{ `before`: `Date`; \}

Defined in: [src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L177)

Match a day falling before the specified date (exclusive).

## Example

```ts
// Match days before February 2, 2019
  const matcher: DateBefore = { before: new Date(2019, 1, 2) };
```

## Properties

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/db279ef24bcdd3c3018446084803de56287dd04e/src/types/shared.ts#L177)
