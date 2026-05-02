# Type Alias: DateBefore

> **DateBefore** = \{ `before`: `Date`; \}

Defined in: [packages/react-day-picker/src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L177)

Match a day falling before the specified date (exclusive).

## Example

```ts
// Match days before February 2, 2019
  const matcher: DateBefore = { before: new Date(2019, 1, 2) };
```

## Properties

### before

> **before**: `Date`

Defined in: [packages/react-day-picker/src/types/shared.ts:177](https://github.com/gpbl/react-day-picker/blob/f96815cbda74d7e7b588e8e7e32923ebd787cc35/packages/react-day-picker/src/types/shared.ts#L177)
