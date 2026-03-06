# Type Alias: DateInterval

> **DateInterval** = \{ `after`: `Date`; `before`: `Date`; \}

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L216)

An interval of dates. Unlike [DateRange](DateRange.md), the range ends are not
included.

## Example

```ts
// Match days between February 2 and February 5, 2019
  const matcher: DateInterval = {
    after: new Date(2019, 1, 2),
    before: new Date(2019, 1, 5),
  };
```

## Properties

### after

> **after**: `Date`

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L216)

***

### before

> **before**: `Date`

Defined in: [src/types/shared.ts:216](https://github.com/gpbl/react-day-picker/blob/103fe7f57055a681af0d1e473054a9da528b5423/src/types/shared.ts#L216)
